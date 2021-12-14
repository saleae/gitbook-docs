# Protocol Analyzer SDK

{% hint style="info" %}
Instructions for loading existing custom analyzers into the Logic software can be found here: [Import Custom Low Level Analyzer](../../faq/technical-faq/setting-up-developer-directory.md)
{% endhint %}

The Saleae Protocol Analyzer SDK lets you make your own custom protocol analyzers. The framework is very flexible. You can do everything we can do (we use the same SDK). You'll be creating a shared library (.dll, .so, or .dylib) that will be loaded by the Logic software as a plugin.

While there are many advantages to providing the SDK in this format, implementation of a custom protocol will probably take an experienced C++ developer at least a full day, and possibly up to a week, to complete. You will probably want to have had considerable programming experience, probably significant C++ experience, before taking it on.

That said, you can get away with implementing only a small part of the full capability of the analyzer. For example, you could have only one setting (the input channel(s) to use), and you could skip creating simulated data to test against, not bothering to provide for data export or tabular display.

Further, by default, you will start out with a fully featured and maximally simple analyzer—SimpleSerialAnalyzer. The documentation will walk you through how to modify it to suit your needs, as well as what parts can be left empty.

### **Latest Analyzer SDK Release**

* [Sample Analyzer on GitHub](https://github.com/saleae/SampleAnalyzer)
* [Analyzer SDK on GitHub](https://github.com/saleae/AnalyzerSDK)

### **Documentation and Getting Started**

To get started, please first read the Setup guide below. We will be working with the provided Sample Analyzer above.

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

{% content-ref url="build.md" %}
[build.md](build.md)
{% endcontent-ref %}

{% content-ref url="debug.md" %}
[debug.md](debug.md)
{% endcontent-ref %}

The complete Build documentation is below.

* [SDK Project Build & Install](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Analyzer%20SDK%20Setup.md)

The documentation for the Analyzer SDK can be found in the pdf and on GitHub. This document still needs to be updated and migrated to markdown, but the documentation for the C++ SDK is largely up-to-date, although it is missing details on the Protocol Search system. Please do not use the first section of this for the setup instructions since they are outdated.

* [Protocol Analyzer SDK Documentation](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Saleae%20Analyzer%20SDK%20\(older\).pdf)

### Installing your Custom Analyzers

{% content-ref url="../../faq/technical-faq/setting-up-developer-directory.md" %}
[setting-up-developer-directory.md](../../faq/technical-faq/setting-up-developer-directory.md)
{% endcontent-ref %}

### Protocol Analyzers Source Code

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

### **Legacy 1.1.14 Release**

* [Saleae Analyzer SDK 1.1.14](http://downloads.saleae.com/SDK/SaleaeAnalyzerSdk-1.1.14.zip) (includes User's Guide)
* [Saleae Analyzer Source Code 1.1.14](http://downloads.saleae.com/SDK/Saleae%20Analyzer%20Source%201.1.14.zip) (the source code for all our analyzers)
