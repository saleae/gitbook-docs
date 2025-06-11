# Binary Export Format - Version 0

{% hint style="info" %}
This documentation is for binary export version 0, which is still in use for Logic 8, Logic Pro 8, and Logic Pro 16. Upcoming products use version 1, which is documented here: [binary-and-csv-export-formats-2025-update.md](binary-and-csv-export-formats-2025-update.md "mention")\
Logic 8, Logic Pro 8, and Logic Pro 16 exports will be updated to use the new version 1 binary export format soon, but for now, they only support the original version, version 0.
{% endhint %}

The binary file format summarized in this support article pertains to binary files exported via exporting raw data described in the support article linked below.

{% content-ref url="../../user-guide/using-logic/exporting-data.md" %}
[exporting-data.md](../../user-guide/using-logic/exporting-data.md)
{% endcontent-ref %}

If you were looking into converting your .sal capture file into the binary file format described in the support article, you can refer to the support article linked below.

{% content-ref url="sal-file-format.md" %}
[sal-file-format.md](sal-file-format.md)
{% endcontent-ref %}

## Binary Export Format (Version 0)

In Logic 2, both digital and analog binary files start with the same header, which can be used to determine the type of data stored in the file.

* All multi-byte values are in little endian byte-order
* Floating point values are IEE754

Digital and analog binary files have the same initial header that can be used to determine whether it is a valid Saleae binary export file, the version, and whether it contains analog or digital data.

```
byte[8] identifier;
int32 version;
int32 type;
```

For Saleae binary exports, the identifier will always be `<SALEAE>`. The current version is `0`.

Types:\
`0` - Digital\
`1` - Analog

The remaining format is based on the type of the data.

#### Digital Binary Format (Version 0)

File structure (starting with the shared header above)

```
byte[8] identifier;
int32 version;
int32 type;
uint32 initial_state;
double begin_time;
double end_time;
uint64 num_transitions;
for each transition in num_transitions
    double transition_time;
```

#### Analog Binary Format (Version 0)

File structure (starting with the shared header above)

```
byte[8] identifier;
int32 version;
int32 type;
double begin_time;
uint64 sample_rate;
uint64 downsample;
uint64 num_samples;
for each sample in num_samples:
    float voltage;
```

## Sample Python code for reading binary data

**Digital data**

```python
import array
import struct
import sys
from collections import namedtuple

TYPE_DIGITAL = 0
TYPE_ANALOG = 1
expected_version = 0

DigitalData = namedtuple('DigitalData', ('initial_state', 'begin_time', 'end_time', 'num_transitions', 'transition_times'))

def parse_digital(f):
    # Parse header
    identifier = f.read(8)
    if identifier != b"<SALEAE>":
        raise Exception("Not a saleae file")

    version, datatype = struct.unpack('=ii', f.read(8))

    if version != expected_version or datatype != TYPE_DIGITAL:
        raise Exception("Unexpected data type: {}".format(datatype))

    # Parse digital-specific data
    initial_state, begin_time, end_time, num_transitions = struct.unpack('=iddq', f.read(28))

    # Parse transition times
    transition_times = array.array('d')
    transition_times.fromfile(f, num_transitions)

    return DigitalData(initial_state, begin_time, end_time, num_transitions, transition_times)


if __name__ == '__main__':
    filename = sys.argv[1]
    print("Opening " + filename)

    with open(filename, 'rb') as f:
        data = parse_digital(f)

    # Print out all digital data
    initial_state_str = 'low' if data.initial_state == 0 else 'high'
    print('Initial state: ' + initial_state_str)
    print('Begin time: {0:.6f}'.format(data.begin_time))
    print('End time: {0:.6f}'.format(data.end_time))
    print("Num transitions: {}".format(data.num_transitions))

    cur_state = data.initial_state

    print("  {0:>20} {1}".format("Time", "Bit State"))
    print("  {0:>20.6f} {1}".format(data.begin_time, 'low' if cur_state == 0 else 'high'))

    for time in data.transition_times:
        # This is a transition, flip the bit state
        cur_state = 0 if cur_state else 1
        print("  {0:>20.6f} {1}".format(time, 'low' if  cur_state == 0 else 'high'))
```

Example output:

```
Opening binary4/digital_5.bin
Identifier: <SALEAE>
Version: 0
Datatype: 0
Initial state: low
Begin time: 0.000000
End time: 0.033341
Num transitions: 1031
                  Time Bit State
              0.000000 low
              0.000009 high
              0.000028 low
              0.000037 high
              0.000099 low
              0.000139 high
              0.000168 low
              0.000171 high
              0.000228 low
              0.000289 high
              0.000332 low
...
```

**Analog data**

```python
import array
import struct
import sys
from collections import namedtuple

TYPE_DIGITAL = 0
TYPE_ANALOG = 1
expected_version = 0

AnalogData = namedtuple('AnalogData', ('begin_time', 'sample_rate', 'downsample', 'num_samples', 'samples'))

def parse_analog(f):
    # Parse header
    identifier = f.read(8)
    if identifier != b"<SALEAE>":
        raise Exception("Not a saleae file")

    version, datatype = struct.unpack('=ii', f.read(8))

    if version != expected_version or datatype != TYPE_ANALOG:
        raise Exception("Unexpected data type: {}".format(datatype))

    # Parse analog-specific data
    begin_time, sample_rate, downsample, num_samples = struct.unpack('=dqqq', f.read(32))

    # Parse samples
    samples = array.array("f")
    samples.fromfile(f, num_samples)

    return AnalogData(begin_time, sample_rate, downsample, num_samples, samples)


if __name__ == '__main__':
    filename = sys.argv[1]
    print("Opening " + filename)

    with open(filename, 'rb') as f:
        data = parse_analog(f)

    # Print out all analog data
    print("Begin time: {}".format(data.begin_time))
    print("Sample rate: {}".format(data.sample_rate))
    print("Downsample: {}".format(data.downsample))
    print("Number of samples: {}".format(data.num_samples))

    print("  {0:>20} {1:>10}".format("Time", "Voltage"))

    for idx, voltage in enumerate(data.samples):
        sample_num = idx * data.downsample
        time = data.begin_time + (float(sample_num) / data.sample_rate)
        print("  {0:>20.10f} {1:>10.3f}".format(time, voltage))
```

Example output:

```
Opening binary_export/analog_5.bin
Identifier: <SALEAE>
Version: 0
Datatype: 1
Begin time: 0.0
Sample rate: 50000000
Downsample: 1
Number of samples: 1667072
                  Time    Voltage
          0.0000000000     -0.002
          0.0000000200      0.784
          0.0000000400      1.560
          0.0000000600      2.332
          0.0000000800      3.089
          0.0000001000      3.827
          0.0000001200      4.540
          0.0000001400      5.223
          0.0000001600      5.873
          0.0000001800      6.493
...
```

## Community Shared Binary Parser

A community user has generously shared their C-based binary parser for digital channels! Their GitHub repository for it can be found here: [saleae-binparser](https://github.com/znuh/saleae-binparser)

## Logic 1.x

If you are using Logic 1.x, please refer to the articles below.

{% content-ref url="binary-data-export-format.md" %}
[binary-data-export-format.md](binary-data-export-format.md)
{% endcontent-ref %}

{% content-ref url="data-export-format-analog-binary.md" %}
[data-export-format-analog-binary.md](data-export-format-analog-binary.md)
{% endcontent-ref %}



