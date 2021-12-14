# LIN - Frame Format

## Output Frame Format

### Frame Type: `"no_frame"`

| Property | Type | Description |
| -------- | ---- | ----------- |

* undefined
* Inter-byte space

### Frame Type: `"header_break"`

| Property | Type | Description |
| -------- | ---- | ----------- |

* undefined
* Header break

### Frame Type: `"header_sync"`

| Property | Type | Description |
| -------- | ---- | ----------- |

* undefined
* Header sync

### Frame Type: `"header_pid"`

| Property       | Type | Description        |
| -------------- | ---- | ------------------ |
| `protected_id` | int  | 6 bit protected Id |

* Protected identifier

### Frame Type: `"data"`

| Property | Type | Description                                            |
| -------- | ---- | ------------------------------------------------------ |
| `data`   | int  | Data byte                                              |
| `index`  | int  | Index, 0-8, of the data byte inside of the transaction |

### Frame Type: `"checksum"`

| Property   | Type | Description  |
| ---------- | ---- | ------------ |
| `checksum` | int  | LIN checksum |

* Checksum byte

### Frame Type: `"data_or_checksum"`

| Property   | Type | Description                                            |
| ---------- | ---- | ------------------------------------------------------ |
| `checksum` | int  | LIN checksum                                           |
| `data`     | int  | Data byte                                              |
| `index`    | int  | Index, 0-8, of the data byte inside of the transaction |

* Unable to determine if this byte is a data byte or a checksum. It is technically valid as both. This occurs if a a data byte, at index N, is equal to what the CRC should be if the transaction is N-1 bytes.
