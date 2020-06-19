# Protocol Analyzer SDK

The Saleae Analyzer SDK lets you make your own custom protocol analyzers. The framework is very flexible. You can do everything we can do \(we use the same SDK\). You'll be creating a shared library \(.dll, .so, or .dylib\) that will be loaded by the Logic software as a plugin.

While there are many advantages to providing the SDK in this format, implementation of a custom protocol will probably take an experienced C++ developer at least a full day, and possibly up to a week, to complete. You will probably want to have had considerable programming experience, probably significant C++ experience, before taking it on.

That said, you can get away with implementing only a small part of the full capability of the analyzer. For example, you could have only one setting \(the input channel\(s\) to use\), and you could skip creating simulated data to test against, not bothering to provide for data export or tabular display.

Further, by default, you will start out with a fully featured and maximally simple analyzer—SimpleSerialAnalyzer. The documentation will walk you through how to modify it to suit your needs, as well as what parts can be left empty.

Let us know what you think.

### **Latest SDK Release Works with All Software from 1.1.32 and Newer**

* [Sample Analyzer on GitHub](https://github.com/saleae/SampleAnalyzer)
* [Analyzer SDK on GitHub](https://github.com/saleae/AnalyzerSDK)

### **Documentation and Getting Started**

To get started, please first read the Setup guide below. We will be working with the provided Sample Analyzer above.

{% page-ref page="setup.md" %}

{% page-ref page="build.md" %}

{% page-ref page="debug.md" %}

The complete Build documentation is below.

* [SDK Project Build & Install](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Analyzer%20SDK%20Setup.md)

The documentation for the Analyzer SDK can be found in the pdf and on GitHub. This document still needs to be updated and migrated to markdown, but the documentation for the C++ SDK is largely up-to-date, although it is missing details on the Protocol Search system. Please do not use the first section of this for the setup instructions since they are outdated.

* [Saleae Analyzer SDK Documentation](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Saleae%20Analyzer%20SDK%20%28older%29.pdf)

### Installing your Custom Analyzers into Logic Software

{% page-ref page="../../faq/technical-faq/setting-up-developer-directory.md" %}

### Protocol Analyzers Source Code Github

* [1-Wire Analyzer](https://www.github.com/saleae/one-wire-analyzer)
* [Async Serial Analyzer](https://www.github.com/saleae/serial-analyzer) 
* [Addressable LEDs Analyzer](https://www.github.com/saleae/async-rgb-led-analyzer)
* [Atmel SWI Analyzer](https://www.github.com/saleae/atmel-swi-analyzer)
* [BISS Analyzer](https://www.github.com/saleae/biss-analyzer)
* [CAN Analyzer](https://www.github.com/saleae/can-analyzer)
* [DMX-512 Analyzer](https://www.github.com/saleae/dmx-512-analyzer)
* [HD44780 Analyzer](https://www.github.com/saleae/hd44780-analyzer) 
* [HDLC Analyzer](https://www.github.com/saleae/hdlc-analyzer) 
* [HDMI-CEC Analyzer](https://www.github.com/saleae/hdmi-cec-analyzer) 
* [I2C Analyzer](https://www.github.com/saleae/i2c-analyzer) 
* [I2S Analyzer](https://www.github.com/saleae/i2s-analyzer) 
* [JTAG Analyzer](https://www.github.com/saleae/jtag-analyzer) 
* [LIN Analyzer](https://www.github.com/saleae/lin-analyzer)
* [Manchester Analyzer](https://www.github.com/saleae/manchester-analyzer) 
* [MDIO Analyzer](https://www.github.com/saleae/mdio-analyzer) 
* [MIDI Analyzer](https://www.github.com/saleae/midi-analyzer) 
* [Modbus Analyzer](https://www.github.com/saleae/modbus-analyzer) 
* [PS2 Keyboard Analyzer](https://www.github.com/saleae/ps2-keyboard-analyzer) 
* [Simple Parallel Analyzer](https://www.github.com/saleae/simple-parallel-analyzer) 
* [SMBus Analyzer](https://www.github.com/saleae/smbus-analyzer) 
* [SPI Analyzer](https://www.github.com/saleae/spi-analyzer) 
* [SWD Analyzer](https://www.github.com/saleae/swd-analyzer) 
* [USB Analyzer](https://www.github.com/saleae/usb-analyzer)

### **Older 1.1.14 Release**

* [Saleae Analyzer SDK 1.1.14](http://downloads.saleae.com/SDK/SaleaeAnalyzerSdk-1.1.14.zip) \(includes User's Guide\)
* [Saleae Analyzer Source Code 1.1.14](http://downloads.saleae.com/SDK/Saleae%20Analyzer%20Source%201.1.14.zip) \(the source code for all our analyzers\)

