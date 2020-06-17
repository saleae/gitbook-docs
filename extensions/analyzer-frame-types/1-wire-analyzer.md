# 1-Wire Analyzer

### Output Frame Format

#### Frame Type: `"reset"`

| Property | Type | Description |
| :--- | :--- | :--- |


Reset pulse

#### Frame Type: `"presence"`

| Property | Type | Description |
| :--- | :--- | :--- |


Presence Pulse

#### Frame Type: `"rom_command"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `description` | str | read, skip, search, or match |
| `rom_command` | bytes | The command byte |

ROM command. This is the first command issued by the master after a presence pulse

#### Frame Type: `"crc"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `crc` | bytes | The CRC byte |

8 bit CRC, last part of the 64 bit identifier

#### Frame Type: `"family_code"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `family` | bytes | The family code, which is the first part of the 64 bit identifier |

The family code of the device ID

#### Frame Type: `"id"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | int | 48 bit integer, taken from the center of the 64 bit identifier |

The 48 bit device identifier

#### Frame Type: `"data"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `data` | bytes | A single data byte |

Data byte after the ROM command and identifier

#### Frame Type: `"invalid_rom_command"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `rom_command` | bytes | The ROM command byte |

Unknown ROM command

#### Frame Type: `"alarm"`

| Property | Type | Description |
| :--- | :--- | :--- |
| `rom_command` | bytes | The command byte |

Alarm search command

