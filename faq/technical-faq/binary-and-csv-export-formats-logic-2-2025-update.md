# Binary and CSV Export Formats - Logic 2 - 2025 Update

The Logic 2 binary export file format is being updated to support new Saleae products.

Existing products, including Logic 8, Logic Pro 8, and Logic Pro 16 still use the original binary export (version 0) however those will be updated to support the new export format soon.

Version 0, still in use for Logic 8, Logic Pro 8, and Logic Pro 16, is documented here:

{% content-ref url="binary-export-format-logic-2.md" %}
[binary-export-format-logic-2.md](binary-export-format-logic-2.md)
{% endcontent-ref %}

### Binary Export format

Logic 2 exports both digital and analog data in binary formats that start with a common header to identify the file type and version.

**Key Properties:**

* All multi-byte values are in **little-endian** byte order
* Floating point values are **IEEE 754** format
* Current version is **1** (supports gaps and multiple chunks)
* Version 0 files are still used for non-MSO devices

#### Common Header



All binary export files start with this header:

```
byte[8] identifier;   // Always "<SALEAE>"
int32 version;        // Current version is 1
int32 type;           // 0 = Digital, 1 = Analog
```

**Data Types:**

* `0` - Digital data
* `1` - Analog data

#### Digital Binary Format (Version 1)



The current digital format supports gaps in data and multiple sampling configurations:

```
byte[8] identifier;       // "<SALEAE>"
int32 version;            // 1
int32 type;               // 0 (Digital)

uint64 chunk_count;       // Number of data chunks
for each chunk in chunk_count:
    uint32 initial_state;     // 0 = Low, 1 = High
    double sample_rate;       // Samples per second
    double begin_time;        // Start time in seconds
    double end_time;          // End time in seconds
    uint64 num_transitions;   // Number of state changes
    
    for each transition in num_transitions:
        double transition_time;   // Time of state change in seconds
```

**Notes:**

* Each chunk represents a continuous segment of data
* Gaps between chunks indicate missing data, usually due to channels being turned off, but can also occur if USB bandwidth is saturated
* State alternates with each transition (initial\_state → !initial\_state → initial\_state...)

#### Analog Binary Format (Version 1)



The current analog format supports multiple waveforms with trigger information:

```
byte[8] identifier;       // "<SALEAE>"
int32 version;            // 1
int32 type;               // 1 (Analog)

uint64 waveform_count;    // Number of waveforms
for each waveform in waveform_count:
    double begin_time;       // Start time in seconds
    double trigger_time;     // Trigger time in seconds
    double sample_rate;      // Samples per second
    int64 downsample;        // Downsample factor
    uint64 num_samples;      // Number of voltage samples
    
    for each sample in num_samples:
        float voltage;       // Voltage value in volts
```

**Notes:**

* `trigger_time` indicates when the trigger occurred
* `downsample` factor indicates if data was decimated during export

#### Python Parsing Examples



**Digital Data Parser**



```python
import struct
import sys
from dataclasses import dataclass
from typing import List, BinaryIO, Optional

# Constants
TYPE_DIGITAL = 0
TYPE_ANALOG = 1

@dataclass
class DigitalChunk:
    """Represents a continuous segment of digital data"""
    initial_state: int  # 0 = Low, 1 = High
    sample_rate: Optional[float]  # Samples per second (None for version 0)
    begin_time: float  # Start time in seconds
    end_time: float  # End time in seconds
    num_transitions: int  # Number of state changes
    transition_times: List[float]  # Times when state changes occur

@dataclass
class DigitalData:
    """Complete digital data export containing one or more chunks"""
    chunks: List[DigitalChunk]

def parse_digital_v1(f: BinaryIO) -> DigitalData:
    """Parse Logic 2 digital binary format version 1"""
    
    # Parse header
    identifier = f.read(8)
    if identifier != b"<SALEAE>":
        raise ValueError("Not a Saleae file")
    
    version, datatype = struct.unpack('<ii', f.read(8))
    
    if datatype != TYPE_DIGITAL:
        raise ValueError(f"Expected digital data, got type {datatype}")
    
    if version not in [0, 1]:
        raise ValueError(f"Unsupported version: {version}")
    
    chunks = []
    
    if version == 0:
        # Version 1 format - single chunk without chunk count
        chunk_count = 1
    else:
        # Version 1 format
        chunk_count, = struct.unpack('<Q', f.read(8))
    
    for _ in range(chunk_count):
        # Parse chunk header
        initial_state, = struct.unpack('<I', f.read(4))
        
        if version >= 1:
            sample_rate, = struct.unpack('<d', f.read(8))
        else:
            sample_rate = None
            
        begin_time, end_time, num_transitions = struct.unpack('<ddQ', f.read(24))
        
        # Parse transition times
        transition_times = []
        for _ in range(num_transitions):
            time, = struct.unpack('<d', f.read(8))
            transition_times.append(time)
        
        chunks.append(DigitalChunk(
            initial_state=initial_state,
            sample_rate=sample_rate,
            begin_time=begin_time,
            end_time=end_time,
            num_transitions=num_transitions,
            transition_times=transition_times
        ))
    
    return DigitalData(chunks=chunks)

def print_digital_data(data: DigitalData):
    """Print digital data in human readable format"""
    print(f"Digital data with {len(data.chunks)} chunk(s)")
    
    for i, chunk in enumerate(data.chunks):
        print(f"\n--- Chunk {i} ---")
        initial_state_str = 'Low' if chunk.initial_state == 0 else 'High'
        print(f"Initial state: {initial_state_str}")
        if chunk.sample_rate:
            print(f"Sample rate: {chunk.sample_rate} Hz")
        print(f"Time range: {chunk.begin_time:.6f}s to {chunk.end_time:.6f}s")
        print(f"Transitions: {chunk.num_transitions}")
        
        # Show state changes
        current_state = chunk.initial_state
        print(f"  {chunk.begin_time:>15.6f}s: {'Low' if current_state == 0 else 'High'}")
        
        for trans_time in chunk.transition_times:
            current_state = 1 - current_state  # Toggle state
            print(f"  {trans_time:>15.6f}s: {'Low' if current_state == 0 else 'High'}")

# Usage example
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python parse_digital.py <digital_file.bin>")
        sys.exit(1)
    
    filename = sys.argv[1]
    with open(filename, 'rb') as f:
        data = parse_digital_v1(f)
    
    print_digital_data(data)
```

**Analog Data Parser**



```python
import struct
import sys
from dataclasses import dataclass
from typing import List, BinaryIO

# Constants
TYPE_DIGITAL = 0
TYPE_ANALOG = 1

@dataclass
class AnalogWaveform:
    """Represents a single analog waveform with samples"""
    begin_time: float  # Start time in seconds
    trigger_time: float  # Trigger time in seconds
    sample_rate: float  # Samples per second
    downsample: int  # Downsample factor
    num_samples: int  # Number of voltage samples
    samples: List[float]  # Voltage values in volts

@dataclass
class AnalogData:
    """Complete analog data export containing one or more waveforms"""
    waveforms: List[AnalogWaveform]

def parse_analog_v1(f: BinaryIO) -> AnalogData:
    """Parse Logic 2 analog binary format version 1"""
    
    # Parse header
    identifier = f.read(8)
    if identifier != b"<SALEAE>":
        raise ValueError("Not a Saleae file")
    
    version, datatype = struct.unpack('<ii', f.read(8))
    
    if datatype != TYPE_ANALOG:
        raise ValueError(f"Expected analog data, got type {datatype}")
    
    if version not in [0, 1]:
        raise ValueError(f"Unsupported version: {version}")
    
    waveforms = []
    
    if version == 0:
        # Version 0 format - single waveform
        begin_time, sample_rate, downsample, num_samples = struct.unpack('<dQQQ', f.read(32))
        trigger_time = begin_time  # No separate trigger time in v0
        
        # Read samples
        samples = []
        for _ in range(num_samples):
            voltage, = struct.unpack('<f', f.read(4))
            samples.append(voltage)
        
        waveforms.append(AnalogWaveform(
            begin_time=begin_time,
            trigger_time=trigger_time,
            sample_rate=float(sample_rate),
            downsample=downsample,
            num_samples=num_samples,
            samples=samples
        ))
    else:
        # Version 1 format
        waveform_count, = struct.unpack('<Q', f.read(8))
        
        for _ in range(waveform_count):
            begin_time, trigger_time, sample_rate, downsample, num_samples = struct.unpack('<dddqQ', f.read(40))
            
            # Read samples
            samples = []
            for _ in range(num_samples):
                voltage, = struct.unpack('<f', f.read(4))
                samples.append(voltage)
            
            waveforms.append(AnalogWaveform(
                begin_time=begin_time,
                trigger_time=trigger_time,
                sample_rate=sample_rate,
                downsample=downsample,
                num_samples=num_samples,
                samples=samples
            ))
    
    return AnalogData(waveforms=waveforms)

def print_analog_data(data: AnalogData, max_samples: int = 10):
    """Print analog data in human readable format"""
    print(f"Analog data with {len(data.waveforms)} waveform(s)")
    
    for i, waveform in enumerate(data.waveforms):
        print(f"\n--- Waveform {i} ---")
        print(f"Begin time: {waveform.begin_time:.6f}s")
        print(f"Trigger time: {waveform.trigger_time:.6f}s")
        print(f"Sample rate: {waveform.sample_rate} Hz")
        print(f"Downsample factor: {waveform.downsample}")
        print(f"Number of samples: {waveform.num_samples}")
        
        # Calculate actual sample period
        actual_sample_period = waveform.downsample / waveform.sample_rate
        
        print(f"\nFirst {min(max_samples, len(waveform.samples))} samples:")
        print(f"{'Time (s)':>15} {'Voltage (V)':>12}")
        
        for j, voltage in enumerate(waveform.samples[:max_samples]):
            sample_time = waveform.begin_time + (j * actual_sample_period)
            print(f"{sample_time:>15.9f} {voltage:>12.6f}")
        
        if len(waveform.samples) > max_samples:
            print(f"... and {len(waveform.samples) - max_samples} more samples")

# Usage example
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python parse_analog.py <analog_file.bin>")
        sys.exit(1)
    
    filename = sys.argv[1]
    with open(filename, 'rb') as f:
        data = parse_analog_v1(f)
    
    print_analog_data(data)
```

### CSV Export Format

#### Digital CSV Format

Digital data is exported as a multi-channel time-series showing state changes across all channels:

```
Time [s],Channel 0 :),Channel 1 :),Ch2
0.000000000,0,1,X
0.125000000,0,0,X
0.250000000,1,1,X
0.500000000,0,0,1
0.625000000,1,1,0
0.750000000,0,1,0
0.875000000,1,0,1
1.000000000,X,X,X
```

**Format:**

* **Header:** `Time [s],Channel Name 1,Channel Name 2,...`
* **Time Column:** Timestamp in seconds (floating point)
* **Channel Columns:** Digital state values

**Values:**

* `0` = Low state
* `1` = High state
* `X` = No data (channel disabled or gap in capture)

**Notes:**

* Each row represents a time point where at least one channel changes state
* Only state transition times are included (not every sample)
* `X` indicates missing data due to gaps or disabled channels
* Time values are relative to the current base time in Logic 2 (usually the start of the capture)

#### Waveform CSV Format

Waveform data includes trigger timing information along with voltage measurements:

```
Trigger [s],Time [s],Ch0,Ch1
0.000000000000,0.000000000000,1200.000000,-200.000000
0.062500000000,0.062500000000,1400.000000,300.000000
0.125000000000,0.125000000000,-200.000000,-100.000000
0.187500000000,0.187500000000,300.000000,400.000000
0.000000000000,0.200000000000,,-200.000000
0.062500000000,0.262500000000,,300.000000
0.125000000000,0.325000000000,,-100.000000
0.187500000000,0.387500000000,,400.000000
```

**Format:**

* **Header:** `Trigger [s],Time [s],Channel Name 1,Channel Name 2,...`
* **Trigger Column:** Time relative to trigger event (floating point seconds)
* **Time Column:** Time relative to current base time in Logic 2, usually the start of the capture (floating point seconds)
* **Channel Columns:** Voltage measurements

**Notes:**

* Each row represents a voltage sample across all channels
* If there is no voltage data for a channel, the voltage value will be empty
  * This is shown on the second waveform for Ch0 in the example above
