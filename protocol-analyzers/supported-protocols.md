# Supported Protocols

## Supported Protocols

The Saleae Logic software includes the following protocol analyzers:

* Asynchronous Serial
* I2C 
* SPI \(Serial Peripheral Interface\)
* CAN \(Controller Area Network\)
* DMX512
* I2S Audio / PCM
* Manchester, Differential Manchester, Bi-Phase Space, and Bi-Phase Mark
* 1-Wire
* Synchronous Parallel
* JTAG
* PS2 Keyboard & Mouse
* Atmel SWI \(Single Wire Interface\)
* LIN \(Local Interconnect Network\)
* BISS-C
* MDIO \(Management Data Input/Output\)
* USB Low Speed and Full Speed
* HDMI-CEC
* SMBus \(includes PMBus and Smart Battery\)
* HDLC \(High-Level Data Link Control\)
* Modbus RTU & ASCII
* MIDI
* HD44780 Parallel LCD
* SWD \(ARM Serial Wire Debug\)

### Analyzer User Guides

We provide user guides for a handful of our protocol analyzers, which we have listed in the link below.

{% page-ref page="analyzer-user-guides/" %}

### **More Protocol Analyzers**

Some Logic users have created their own protocol analyzers. The following list of analyzers are available but not officially supported by Saleae.

{% page-ref page="unofficially-supported-protocols.md" %}

### **Do all Saleae logic analyzer models support these protocols?**

Yes. However, you will need to use a device with sufficient bandwidth to record the original signal. For instance, Logic 4 simply does not have the bandwidth required to capture and decode USB full speed. Logic 4 has a maximum digital bandwidth of 3 MHz, and USB full speed requires a digital bandwidth of at least 12.5 MHz.

### What Happened to the UNI/O Analyzer?

Unfortunately, we have not yet ported the UNI/O analyzer from Logic v1 into the newer Logic v2 software. Specifically, it requires separate API functions that we simply haven't had the chance to implement yet. It's not on the roadmap at the moment, though we would like to gauge user interest in this before we commit to it, as porting this analyzer into Logic v2 would require quite a bit of work as compared to porting our other analyzers. 

You can vote for this idea [here](https://ideas.saleae.com/b/feature-requests/port-the-uni-o-analyzer-into-logic-2).

