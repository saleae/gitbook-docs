# I2C - Frame Format

## I2C Communication Overview
I2C communication involves two roles: a master and a slave. The master initiates and controls the communication, while the slave responds to the master's requests. Data transmission on the I2C bus is organized into transactions, each starting with a START condition and ending with a STOP condition. Each transaction begins with a 7-bit address and comprises one or more data bytes, with each byte followed by an acknowledgment from the receiver.

###  I2C Frame Evaluation
I2C communication is captured as frames by a built-in low-level I2C analyzer. Each frame represents one byte of information. Frame types are defined below including: start, address, data, and stop.

### Data Frame Evaluation
The HLA evaluates each byte of the transaction as its own 'frame' received from the built-in I2C low-level analyzer. Decoding the sequence of frames in the HLA may require a state machine if preceding frames change the way future frames should be interpreted. One example includes that the first data frame indicates a command with the next frame including a parameter.

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
