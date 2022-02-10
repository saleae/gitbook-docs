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
                print('read from ' + str(frame.data['address']))
            else
                print('write to ' + str(frame.data['address']))
        elif frame.type == 'data':
            print(frame.data['data'])
        elif frame.type == 'start':
            print('I2C start condition')
        elif frame.type == 'stop':
            print('I2C stop condition')
```
