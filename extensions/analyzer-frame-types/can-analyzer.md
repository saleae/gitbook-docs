# Controller Area Network (CAN) Analyzer
  

## Output Frame Format
  
### Frame Type: `"identifier_field"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `Identifier` | int | Identifier, either 11 bit or 29 bit |
| `Extended` | bool | (optional) Indicates that this identifier is a 29 bit extended identifier. This key is not present on regular 11 bit identifiers |
| `remote_frame` | bool | (optional) Present and true for remote frames |

### Frame Type: `"control_field"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `num_data_bytes` | int | Number of data bytes in the transaction |

### Frame Type: `"data_field"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `data` | int | The byte |

### Frame Type: `"crc_field"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `crc` | int | 16 bit CRC value |

### Frame Type: `"ack_field"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `Ack` | bool | True when an ACK was present |

### Frame Type: `"can_error"`

| Property | Type | Description |
| :--- | :--- | :--- |
undefined

Invalid CAN data was encountered
