# I2C - Frame Format

## Output Frame Format

### Frame Type: `"address"`

* I2C address byte

| Property  | Type  | Description                                                       |
| --------- | ----- | ----------------------------------------------------------------- |
| `address` | bytes | The 7 bit I2C address                                             |
| `read`    | bool  | True for read operations, false for write operations              |
| `ack`     | bool  | True when the address was ACKed, false when NAKed                 |
| `error`   | str   | (optional) Present if an there was a problem reading the I2C data |

### Frame Type: `"data"`

* I2C data byte

| Property | Type  | Description                                                       |
| -------- | ----- | ----------------------------------------------------------------- |
| `data`   | bytes | 8 bit data word                                                   |
| `ack`    | bool  | True when the data byte was ACKed, false when NAKed               |
| `error`  | str   | (optional) Present if an there was a problem reading the I2C data |

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
