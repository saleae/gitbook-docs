# Serial Peripheral Interface \(SPI\) Analyzer

## Output Frame Format

### Frame Type: `"enable"`

| Property | Type | Description |
| :--- | :--- | :--- |


undefined

Indicates the enable \(chip select\) signal has transitioned from inactive to active, present when the enable channel is used

### Frame Type: `"disable"`

| Property | Type | Description |
| :--- | :--- | :--- |


undefined

Indicates the enable signal has transitioned back to inactive, present when the enable channel is used

### Frame Type: `"result"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `miso` | bytes | Master in slave out, width in bits is determined by settings |
| `mosi` | bytes | Master out slave in, width in bits is determined by settings |

A single word transaction, containing both MISO and MOSI

### Frame Type: `"error"`

| Property | Type | Description |
| :--- | :--- | :--- |


undefined

Indicates that the clock was in the wrong state when the enable signal transitioned to active

