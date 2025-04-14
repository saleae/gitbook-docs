---
description: Learn how to modify your new Measurement
---

# Measurement Extensions

{% hint style="warning" %}
This guide assumes that you have familiarity with the [Python](https://www.python.org/) programming language. It is what will be used to customize our Measurement. Browse user shared [Analog Measurement Extensions](analog-measurement-extensions.md) and [Digital Measurement Extensions](digital-measurement-extensions.md) for own use or inspiration.
{% endhint %}

## Overview

This guide assumes [you have generated](../extensions-quickstart.md) a new Digital Measurement. In this guide you will learn about:

1. The files included in the Digital Measurement template extension and what they are.
2. The different parts of `DigitalMeasurement.py`.
3. How to update the template to make your own measurements.

## Measurement Files

In your new Measurement extension folder you will find 3 files:

* `README.md`
  * Documentation for your extension, shown within Logic 2 when you select an extension, and what users will see if you put your extension on the Marketplace.
* `extension.json`
  * Every extension must have this file in its root directory.
  * Contains metadata about the extension, and the HLAs and Measurement scripts that are included with the extension.
  * See [Extension File Format](../extension-file-format.md) for more information.
* `DigitalMeasurement.py` or `AnalogMeasurement.py`
  * Python source code for your measurement.

### DigitalMeasurement.py and AnalogMeasurement.py

Digital measurements are implemented with a class template that looks like below. Take a look at [`pulseCount.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/pulseCount.py) to see how this was modified for our Pulse Count extension.

```python
from saleae.range_measurements import DigitalMeasurer

class MyDigitalMeasurement(DigitalMeasurer):
  # Add supported_measurements here. This includes the metric
  # strings that were defined in the extension.json file.

  def __init__(self, requested_measurements):
    super().__init__(requested_measurements)
    # Initialize your variables here

  def process_data(self, data):
    for t, bitstate in data:
        # Process data here
  
  def measure(self):
    values = {}
    # Assign the final metric results here to the values object
    return values
```

Analog measurements are implemented with a class template that looks like below. Take a look at [`voltage_peak_to_peak.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/voltagePeakToPeak/voltage_peak_to_peak.py) to see how this was modified for an example analog extension.

```python
from saleae.range_measurements import AnalogMeasurer

class VoltageStatisticsMeasurer(AnalogMeasurer):
  # Add supported_measurements here. This includes the metric
  # strings that were defined in the extension.json file.

  def __init__(self, requested_measurements):
    super().__init__(requested_measurements)
    # Initialize your variables here

  def process_data(self, data):
    # Process data here
  
  def measure(self):
    values = {}
    # Assign the final metric results here to the values object
    return values
```

### Measurer creation

In python, your class will be constructed when the user adds or edits a measurement. This instance of your class will be used for a single computation. Your class can either process analog data or digital data, but not both. A class may handle as many metrics as you want though. If you want to implement both digital and analog measurements, you will need at a minimum two classes.

### Constructor

The constructor will be called with an array of requested measurements, which are taken from the `extension.json` file. In our [`pulseCount.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/pulseCount.py) example, this is declared like so:

```python
POSITIVE_PULSES = 'positivePulses'
NEGATIVE_PULSES = 'negativePulses'

class PosNegPulseMeasurer(DigitalMeasurer):
    supported_measurements = [POSITIVE_PULSES, NEGATIVE_PULSES]
```

### Process Data

Immediately after construction, the function `def process_data(self, data):` will be called one or more times. This function takes a parameter `data` which differs between analog and digital measurements.

The Saleae Logic software stores collected data in chunks. To keep python processing performant, the Logic software passes these blocks, or sections of these blocks, one at a time to your measurement. If the requested measurement range does not line up with the internal block storage, the objects passed to python will already be adjusted to the measurement range, so no work needs to be done to handle this condition.

This makes it impossible to know exactly how much data will be needed for the given measurement range the first time `process_data` is called. Be sure to update the internal state of your class in such a way that this isn't a problem. For example, when computing the average analog value over a range, it would be best to hold the sum of all values passed to `process_data` and the total count of samples in data members, and only compute the average in the `measure` function.

#### Process Analog Measurements

For analog measurements, `data` is an instance of `AnalogData`, which is an `iterable` class with the properties `sample_count` and `samples`. `sample_count` is a number, and is the number of analog samples in the data instance. Note - this might not be the total number of analog samples passed to your measurement, since `process_data` may be called more than once if the user selected range spans multiple chunks.

`samples` is a [numpy](https://numpy.org/) [ndarray](https://docs.scipy.org/doc/numpy/reference/arrays.ndarray.html). For information handling this type, please refer to the numpy documentation.

The `process_data` function should not return a value. Instead, it should update the internal state of your class, such that the `measure` function can produce your measurement's results.

#### Process Digital Measurements

For digital measurement classes, the `data` parameter is an instance of the `iterable` Saleae class `DigitalData`. Each iteration returns a pair of values - the current time, as a `GraphTime` class instance, and the current bit state as a `bool`. (`True` = signal high).

The object is essentially a list with the timestamp of each transition inside of the user selected region of digital data.

The `GraphTime` has one feature. One `GraphTime` can be subtracted from another to compute the difference in seconds, as a `GraphTimeDelta`. `GraphTimeDelta` can be converted to a float using `float(graph_time_delta)`. This allows your code to compute the time in between transitions, or the time duration between the beginning of the measurement and any transition inside of the measurement range, but it does not expose absolute timestamps.

For example, to compute the total number of transitions over the user selected range, this could be used:

```python
def __init__(self, requested_measurements):
  super().__init__(requested_measurements)
  self.first_transition_time = None
  self.edge_count = 0

def process_data(self, data):
    for t, bitstate in data:
        if self.first_transition_time is None:
            self.first_transition_time = t
        else
          # note: the first entry does not indicate a transition, it's simply the bitstate and time at the beginning of the user selected range.
          self.edge_count += 1
```

Currently, the `DigitalData` collection will first include the starting time and bit state, and then every transition that exists in the user selected range, if any. It also exposes the starting and ending time of the user-selected measurement range. Consult the [API Documentation](../api-documentation.md) for details.

### Measure

The `def measure(self):` function will be called on your class once all data has been passed to `process_data`.  This will only be called once and should return a dictionary with one key for every `requested_measurements` entry that was passed into your class's constructor.

{% hint style="info" %}
in the future, we may allow the user to select which metrics to compute. To avoid unnecessary processing, it's recommended to check the `requested_measurements` provided by the constructor before computing or returning those values. However, returning measurements that were not requested is allowed. The results will just be ignored.
{% endhint %}

## What's Next?

* Browse the Saleae Marketplace in Logic 2 for more ideas and examples of extensions you can create.
* [Publish your extension](../publish-an-extension.md) to the Saleae Marketplace!

{% content-ref url="../publish-an-extension.md" %}
[publish-an-extension.md](../publish-an-extension.md)
{% endcontent-ref %}



