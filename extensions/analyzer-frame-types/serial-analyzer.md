# Async Serial - Frame Format

## Output Frame Format

### Frame Type: `"data"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `data` | bytes | The serial word, the width in bits is controlled by the serial settings |
| `error` | str | \(optional\) Present if an error was detected when decoding this word |
| `address` | bool | \(optional\) Present if multi-processor or multi-drop bus special modes were selected. True indicates that this is an address byte |

A single serial word

