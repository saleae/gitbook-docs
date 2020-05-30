# Measurement Extensions

The software currently has a few built-in measurements already installed and ready to use. The gif below demonstrates how to use them. You can also hold the shift key while dragging across your recorded data to add a measurement without using the sidebar. The use of measurement extensions will allow additional custom measurements to be made. 

![Logic 2 measurements](../.gitbook/assets/use_measurement.gif)

### Create an Extension

A measurement extension consists of at least two files, all of which should be stored in the same folder.

* an `extension.json` file, which stores information about the extension
* one or more python source files

To quickly get acquainted with measurement extensions, you can follow along with creating one below. Here, we will walk you through the installation of a custom measurement extension which you can try out immediately.

1. Make sure you're running the latest version of [Logic 2.x software](https://ideas.saleae.com/f/changelog/).  
2. Open the software. Click the 'Extensions button' to open the 'Extensions Panel' and click 'Create Extension.'

![](../.gitbook/assets/screen-shot-2020-05-21-at-3.50.11-pm.png)

3. A pop-up window will appear. Under 'Generate from template', select 'Digital Measurement' and click 'Save As.' We will be creating a Digital Measurement.  
4. Navigate to a location of your choice to save your measurement extension folder. Let's name the folder as 'pulseCount'  
5. Confirm that your new 'pulseCount' folder now contains two files \(`extension.json` & `DigitalMeasurement.py`\).  
6. Rename `DigitalMeasurement.py` to `pulseCount.py` to give it a more relevant name.  
7. For `pulseCount.py`, copy and paste the code from [here](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/pulseCount.py)  
8. For `extension.json`, copy and paste the code from [here](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/extension.json)  
9. Now we will install the extension to the software. Follow the instructions in the Extensions article below, under the section titled "Installing an Extension."

{% page-ref page="./" %}

10. You should now see 'Pulse Count' appear in the 'Extensions' panel of the software.

![](../.gitbook/assets/screen-shot-2020-05-27-at-7.15.34-pm.png)

11. To see your new measurement in action, take a capture of digital data and add a measurement to it as shown in the gif at the top of this article. You should see the new measurements:

![](../.gitbook/assets/screen-shot-2020-05-27-at-7.19.26-pm.png)

* Np\(+\) for number of positive pulses
* Np\(-\) for number of negative pulses

### Extension File Layout

Let's take a look at the `extension.json` file for our Pulse Count extension that we recently installed above. There exists some key metadata properties. 

The `author`, `description`, and `name` properties manage what appears in the Extensions panel where the extensions are managed. 

```text
"author": "Tim Reyes",
"description": "Count pos and neg pulses",
"name": "Pulse Count",
```

The `extensions`  section describes more properties specific to your extension. Note that multiple measurements can exist within a single extension. In this example, we include only one called `Pulses`. 

```text
"extensions": {
  "Pulses": {
    "type": "DigitalMeasurement",
    "entryPoint": "pulseCount.PosNegPulseMeasurer",
    "metrics": {
      "positivePulses": {
        "name": "Positive Pulses",
        "notation": "N<sub>p(+)</sub>"
      },
      "negativePulses": {
        "name": "Negative Pulses",
        "notation": "N<sub>p(-)</sub>"
      }
    }
  }
}
```

| Property | Description |
| :--- | :--- |
| `type` | Here we tell the software that this will be a `DigitalMeasurement`. On the other hand, an analog measurement will have the type `AnalogMeasurement` |
| `entryPoint` | Points the software to the measurement's python file and its class name. This line is structured like so: `<python_file_name>.<python_class_name>` |
| `metrics` | Measurements need to compute a set of display values for a specific range of time, over a single digital or analog channel. These display values are called metrics. Each metric needs to be declared here. We've declared two metric keys - `positivePulses` and `negativePulses`. These keys will be passed into your python code, so be sure to keep note of them. |
| `notation` | The notation that appears when the software displays the metric. Can be an html string, however only limited tags are supported: ['b'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b), ['i'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i), ['em'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em), ['strong'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong), ['sub'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) |
| `units` | This should not include a metric prefix, as this will automatically be calculated. For example, if the unit is frequency, provide "Hz" as a string, and ensure your measurement class always returns a value in "Hz". The Logic software will automatically adjust large or small numbers to display with the correct metric prefix. For example, 1000 Hz will be automatically displayed as 1 kHz. |

### Python File Layout

Digital measurements are implemented with a class template that looks like below. Take a look at [`pulseCount.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/pulseCount.py) to see how this was implemented for our Pulse Count extension.

```text
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

Analog measurements are implemented with a class template that looks like below. Take a look at [`voltage_peak_to_peak.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/voltagePeakToPeak/voltage_peak_to_peak.py) to see how this was implemented for an example analog extension.

```text
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

### Development Process

In python, your class will be constructed when the user adds or edits a measurement. This instance of your class will be used for a single computation. Your class can either process analog data or digital data, but not both. A class may handle as many metrics as you want though. If you want to implement both digital and analog measurements, you will need at a minimum two classes.

#### Constructor

The constructor will be called with an array of requested measurements, which are taken from the extension.json file. In our [`pulseCount.py`](https://github.com/saleae/logic2-extensions-examples/blob/master/pulseCount/pulseCount.py) example, this is declared like so:

```text
POSITIVE_PULSES = 'positivePulses'
NEGATIVE_PULSES = 'negativePulses'

class PosNegPulseMeasurer(DigitalMeasurer):
    supported_measurements = [POSITIVE_PULSES, NEGATIVE_PULSES]
```

#### Process Data

Immediately after construction, the function `def process_data(self, data):` will be called one or more times. This function takes a parameter `data` which differs between analog and digital measurements.

The Saleae Logic software stores collected data in chunks. To keep python processing performant, the Logic software passes these blocks, or sections of these blocks, one at a time to your measurement. If the requested measurement range does not line up with the internal block storage, the objects passed to python will already be adjusted to the measurement range, so no work needs to be done to handle this condition.

This makes it impossible to know exactly how much data will be needed for the given measurement range the first time `process_data` is called. Be sure to update the internal state of your class in such a way that this isn't a problem. For example, when computing the average analog value over a range, it would be best to hold the sum of all values passed to `process_data` and the total count of samples in data members, and only compute the average in the `measure` function.

#### Process Analog Measurements

For analog measurements, `data` is an instance of the Saleae class `AnalogData`, which is an iterable class with the properties `sample_count` and `samples`. `sample_count` is a number, and is the number of analog samples in the data instance. Note - this might not be the total number of analog samples passed to your measurement, since `process_data` may be called more than once if the user selected range spans multiple chunks.

`samples` is a [numpy](https://numpy.org/) [ndarray](https://docs.scipy.org/doc/numpy/reference/arrays.ndarray.html). For information handling this type, please refer to the numpy documentation.

The `process_data` function should not return a value. Instead, it should update the internal state of your class, such that the `measure` function can produce your measurement's results.

#### Process Digital Measurements

For digital measurement classes, the `data` parameter is an instance of the iterable Saleae class `DigitalData`. Each iteration returns a pair of values - the current time, as a `GraphTime` class instance, and the current bit state as a boolean. \(true = signal high\).

The object is essentially a list with the timestamp of each transition inside of the user selected region of digital data.

The `GraphTime` has one feature. One GraphTime can be subtracted from another to compute the difference in seconds, as a number. This allows your code to compute the time in between transitions, or the time duration between the beginning of the measurement and any transition inside of the measurement range, but it does not expose absolute timestamps.

For example, to compute the total number of transitions over the user selected range, this could be used:

```text
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

Currently, the `DigitalData` collection will first include the starting time and bit state, and then every transition that exists in the user selected range, if any. However, it does not yet provide any indication of where the user selected range stops. This is something we're keeping in mind for improvement.

#### Measure

The `def measure(self):` function will be called on your class once all data has been passed to `process_data`.  This will only be called once and should return a dictionary with one key for every `requested_measurements` entry that was passed into your class's constructor.

{% hint style="info" %}
in the future, we may allow the user to select which metrics to compute. To avoid unnecessary processing, it's recommended to check the `requested_measurements` provided by the constructor before computing or returning those values. However, returning measurements that were not requested is allowed. The results will just be ignored.
{% endhint %}

