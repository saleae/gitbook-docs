# I2C - Frame Format

## I2C Communication Overview
I2C communication involves two roles: a master and a slave. The master initiates and controls the communication, while the slave responds to the master's requests. Data transmission on the I2C bus is organized into transactions, each starting with a START condition and ending with a STOP condition. Each transaction begins with a 7-bit address and comprises one or more data bytes, with each byte followed by an acknowledgment from the receiver.

###  I2C Frame Evaluation
I2C communication is captured as frames by a built-in low-level I2C analyzer. Each frame represents one byte of information. Frame types are defined below including: start, address, data, and stop.

### Data Frame Evaluation
The HLA executes once for each incoming frame. Each frame contains only one byte. Each transaction begins with a start frame, an address frame, and then any number of data frames, ending with a stop frame. A state machine is often needed to decode multi-byte (multi-frame) sequences such as a command followed by a parameter.

## Output Frame Format

### Frame Type: `"address"`

* I2C address byte

| Property  | Type  | Description                                                       |
| --------- | ----- | ----------------------------------------------------------------- |
| `address` | byte  | The 7 bit I2C address                                             |
| `read`    | bool  | True for read operations, false for write operations              |
| `ack`     | bool  | True when the address was ACKed, false when NAKed                 |
| `error`   | str   | (optional) Present if an there was a problem reading the I2C data |

#### Example
Store the address as an integer and display it on the terminal as a hex value
```
if frame.type == 'address':
  address = frame.data['address'][0]
  print(f"Address: {hex(address)}")
```
Result
```
Data: 0x3C
```

### Frame Type: `"data"`

* I2C data byte

| Property | Type  | Description                                                       |
| -------- | ----- | ----------------------------------------------------------------- |
| `data`   | byte | single 8 bit data word                                             |
| `ack`    | bool  | True when the data byte was ACKed, false when NAKed               |
| `error`  | str   | (optional) Present if an there was a problem reading the I2C data |

#### Example
Store the data value as an integer and display it on the terminal as a hex value
```
if frame.type == 'data':
  data = frame.data['data'][0]
  print(f"Data: {hex(data)}")
```
Result:
```
Data: 0x00
```

### Frame Type: `"start"`

* undefined
* I2C start condition

| Property | Type | Description |
| -------- | ---- | ----------- |

### Frame Type: `"stop"`

* undefined
* I2C stop condition

| Property | Type | Description |
| -------- | ---- | ----------- |
