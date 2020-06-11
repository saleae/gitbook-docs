# I2C Analyzer

## Output Frame Format

### Frame Type: `"address"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `address` | bytes | The 7 bit I2C address |
| `read` | bool | True for read operations, false for write operations |
| `ack` | bool | True when the address was ACKed, false when NAKed |
| `error` | str | \(optional\) Present if an there was a problem reading the I2C data |

I2C address byte

### Frame Type: `"data"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `data` | bytes | 8 bit data word |
| `ack` | bool | True when the data byte was ACKed, false when NAKed |
| `error` | str | \(optional\) Present if an there was a problem reading the I2C data |

I2C data byte

### Frame Type: `"start"`

| Property | Type | Description |
| :--- | :--- | :--- |


undefined

I2C start condition

### Frame Type: `"stop"`

| Property | Type | Description |
| :--- | :--- | :--- |


undefined

I2C stop condition

