# Async RGB LED - Frame Format

## Output Frame Format

### Frame Type: `"pixel"`

| Property | Type | Description                                             |
| -------- | ---- | ------------------------------------------------------- |
| `index`  | int  | The index along the LED strip. Index 0 is the first LED |
| `red`    | int  | The red channel, \[0-255]                               |
| `green`  | int  | The green channel, \[0-255]                             |
| `blue`   | int  | The blue channel, \[0-255]                              |

* Represents a single RGB pixel value
