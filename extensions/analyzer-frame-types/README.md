---
description: Documentation for output produced by Saleae's built-in Analyzers
---

# HLA - Analyzer Frame Format

Python High Level Analyzers allow users to write custom code that processes the output of an analyzer. The below list of pre-installed low level analyzers can be immediately used with high level analyzers (HLAs).

* [Async Serial](serial-analyzer.md)
* [I2C](i2c-analyzer.md)
* [SPI](spi-analyzer.md)
* [CAN](can-analyzer.md)
* [LIN](lin-analyzer.md)
* [Manchester](manchester-analyzer.md)
* [Parallel](simple-parallel-analyzer.md)
* [LED](async-rgb-led-analyzer.md)
* [1-Wire](1-wire-analyzer.md)
* [I2S / PCM](i2s-analyzer.md)

### Adding HLA Support for More Analyzers

We've released documentation on our FrameV2 API below, which can be used to add HLA support for any low level analyzer that is not listed above, including custom analyzers that were created using our Protocol Analyzer SDK.

{% content-ref url="../../saleae-api-and-sdk/protocol-analyzer-sdk/framev2-hla-support-analyzer-sdk.md" %}
[framev2-hla-support-analyzer-sdk.md](../../saleae-api-and-sdk/protocol-analyzer-sdk/framev2-hla-support-analyzer-sdk.md)
{% endcontent-ref %}

### Writing an HLA

In order to write a high level analyzer, the data format produced by the connected source analyzer must be understood.&#x20;

For example, a high level analyzer which consumes serial data needs to understand the serial analyzer output format in order to extract bytes, and this code is very different from the code required to extract data bytes from CAN data.

```
# Reading serial data

    def decode(self, frame):
        print(frame.data['data'])
        
# Reading CAN data

    def decode(self, frame):
        if frame.type == 'identifier_field':
            print(frame.data['identifier'])
        elif frame.type == 'data_field':
            print(frame.data['data'])
        elif frame.type == 'crc_field':
            print(frame.data['crc'])
```

To write a Python high level analyzer for a specific input analyzer, navigate to the section for that analyzer.

There is one page for each analyzer that is compatible with python HLAs. Each analyzer produces one or more frame types. These frame types have string names and will be in the `type` member of the frame class.

Each frame type may have data properties. The documentation page will list the data properties for that frame type, along with the data type and a description. These can be accessed from the `frame.data` dictionary.

Here is an example of you you might handle different frame types from I2C:

```
    def decode(self, frame):
        if frame.type == 'address':
            if frame.data['read'] == True:
                print('read from ' + str(frame.data['address'][0]))
            else
                print('write to ' + str(frame.data['address'][0]))
        elif frame.type == 'data':
            print(frame.data['data'][0])
        elif frame.type == 'start':
            print('I2C start condition')
        elif frame.type == 'stop':
            print('I2C stop condition')
```

### State Managment
In this example the HLA decodes the received I2C data one frame at a time, where each frame is a single byte.  State management is critical, keeping track of the entire transaction and recognizing muti-byte data.  

#### An example set of states follows:
1. *Idle:* Waiting for I2C transaction to begin
2. *I2C Device Address:* 7-bit device address is read, direction bit (read/write) is determined
  - Note that the I2C LLA automatically shifts the address back right by 1 bit to recover the original 7-bit address.
4. *Transaction Type:* Determined based on direction bit and device (e.g., register write, register read, EEPROM write, EEPROM read)
5. *Register Address (optional):* Some devices require a register address byte, width depends on device (typically 8-bits or 16-bits)
6. *Data:* Device will either send or receive a data byte, while the total number of bytes depends on device and transaction type an I2C HLA will be evaluated in each individual byte with no memory of preceeding bytes unless a state machine is used.
   - *Mode Selection:* In some cases the first data byte puts the device into different modes
        - Follow-on bytes may then be then either be data, commands, or parameters
        - The different states as well as commands and number of pamaters must be tacked by the state machine for proper decoding
        - Additionally keeping track of both transaction and frame begin and end times are critical for annotation placement
7. *Stop:* I2C stop condition signals end of transaction, return to Idle state


### Instruction Set
Developing an instruction set in JSON is another best practice that allows you to quickly build an HLA that interprets received data into human readable annotations.

```
instructions = {
    0x81: {"name": "Set Contrast Control", "param_description": "Contrast values (0-255)", "params": 1},
    0xA4: {"name": "Entire Display OFF", "param_description": "", "params": 0},
    0xA5: {"name": "Entire Display ON", "param_description": "", "params": 0}
}
```
