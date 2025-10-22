# Protocol Analyzer SDK

{% hint style="info" %}
Instructions for loading existing custom analyzers into the Logic software can be found here: [Import Custom Low Level Analyzer](../../../../troubleshooting/technical-faq/setting-up-developer-directory.md)
{% endhint %}

The Saleae Protocol Analyzer SDK lets you make your own custom protocol analyzers. The framework is very flexible. You can do everything we can do (we use the same SDK). You'll be creating a shared library (.dll for Windows, .so for Linux, or .dylib for MacOS) that will be loaded by the Logic software as a plugin.

While there are many advantages to providing the SDK in this format, implementation of a custom protocol will probably take an experienced C++ developer at least a full day, and possibly up to a week, to complete. You will want to have had considerable programming experience, probably significant C++ experience, before taking it on.

That said, you can get away with implementing only a small part of the full capability of the analyzer. For example, you could have only one setting (the input channel(s) to use), and you could skip creating simulated data to test against, not bothering to provide for data export or tabular display.

### Documentation and Getting Started

In most cases, you will want to start out with our fully featured, and maximally simple, [SampleAnalyzer](https://github.com/saleae/SampleAnalyzer). In this Github repository, we provide two helpful documents.

1. [Readme](https://github.com/saleae/SampleAnalyzer/blob/master/readme.md) - This document will walk you through how to modify the SampleAnalyzer to suit your needs, including steps to rename, setup, build, and debug your analyzer.
2. [Analyzer\_API](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Analyzer_API.md) - This is the documentation for the Saleae C++ Analyzer API.

As an alternative, you may also get started with any of our pre-installed protocol analyzers or one of many community shared protocol analyzers. Source code for both are provided in a section below in this support article.

### **Latest Analyzer SDK Release**

Our SampleAnalyzer automatically fetches the latest library files located on our Analyzer SDK GitHub repository located below.

* [Analyzer SDK on GitHub](https://github.com/saleae/AnalyzerSDK)

### Installing your Custom Analyzers

{% content-ref url="../../../../troubleshooting/technical-faq/setting-up-developer-directory.md" %}
[setting-up-developer-directory.md](../../../../troubleshooting/technical-faq/setting-up-developer-directory.md)
{% endcontent-ref %}

### Pre-Installed Analyzers Source Code

* [1-Wire Analyzer](https://www.github.com/saleae/one-wire-analyzer)
* [Async Serial Analyzer](https://www.github.com/saleae/serial-analyzer)&#x20;
* [Addressable LEDs Analyzer](https://www.github.com/saleae/async-rgb-led-analyzer)
* [Atmel SWI Analyzer](https://www.github.com/saleae/atmel-swi-analyzer)
* [BISS Analyzer](https://www.github.com/saleae/biss-analyzer)
* [CAN Analyzer](https://www.github.com/saleae/can-analyzer)
* [DMX-512 Analyzer](https://www.github.com/saleae/dmx-512-analyzer)
* [HD44780 Analyzer](https://www.github.com/saleae/hd44780-analyzer)&#x20;
* [HDLC Analyzer](https://www.github.com/saleae/hdlc-analyzer)&#x20;
* [HDMI-CEC Analyzer](https://www.github.com/saleae/hdmi-cec-analyzer)&#x20;
* [I2C Analyzer](https://www.github.com/saleae/i2c-analyzer)&#x20;
* [I2S Analyzer](https://www.github.com/saleae/i2s-analyzer)&#x20;
* [JTAG Analyzer](https://www.github.com/saleae/jtag-analyzer)&#x20;
* [LIN Analyzer](https://www.github.com/saleae/lin-analyzer)
* [Manchester Analyzer](https://www.github.com/saleae/manchester-analyzer)&#x20;
* [MDIO Analyzer](https://www.github.com/saleae/mdio-analyzer)&#x20;
* [MIDI Analyzer](https://www.github.com/saleae/midi-analyzer)&#x20;
* [Modbus Analyzer](https://www.github.com/saleae/modbus-analyzer)&#x20;
* [PS2 Keyboard Analyzer](https://www.github.com/saleae/ps2-keyboard-analyzer)&#x20;
* [Simple Parallel Analyzer](https://www.github.com/saleae/simple-parallel-analyzer)&#x20;
* [SMBus Analyzer](https://www.github.com/saleae/smbus-analyzer)&#x20;
* [SPI Analyzer](https://www.github.com/saleae/spi-analyzer)&#x20;
* [SWD Analyzer](https://www.github.com/saleae/swd-analyzer)&#x20;
* [USB Analyzer](https://www.github.com/saleae/usb-analyzer)

### Community Shared Analyzers

{% content-ref url="../../../../community/community-shared-protocols.md" %}
[community-shared-protocols.md](../../../../community/community-shared-protocols.md)
{% endcontent-ref %}

### **Legacy 1.1.14 Release**

* [Saleae Analyzer SDK 1.1.14](http://downloads.saleae.com/SDK/SaleaeAnalyzerSdk-1.1.14.zip) (includes User's Guide)
* [Saleae Analyzer Source Code 1.1.14](http://downloads.saleae.com/SDK/Saleae%20Analyzer%20Source%201.1.14.zip) (the source code for all our analyzers)
