# I2S - Frame Format

## Output Frame Format

### Frame Type: `"error"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `error` | str | Error details. I2C errors usually indicate the wrong number of bits inside of a frame |

I2S decode error

### Frame Type: `"data"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `channel` | int | channel index. 0 or 1 |
| `data` | int | Audio value. signed or unsigned, based on I2S/PCM analyzer settings |

A single sample from a single channel

