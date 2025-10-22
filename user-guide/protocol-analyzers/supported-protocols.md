# Supported Protocols

The Saleae Logic software includes the following protocol analyzers:

* 1-Wire
* Asynchronous Serial
* Atmel SWI (Single Wire Interface)
* BISS-C
* CAN (Controller Area Network)
* DMX512
* HD44780 Parallel LCD
* HDLC (High-Level Data Link Control)
* HDMI-CEC
* I2C
* I2S Audio / PCM
* I3C (see section below)
* JTAG
* LIN (Local Interconnect Network)
* MDIO (Management Data Input/Output)
* MIDI
* Manchester (Differential, Bi-Phase Space, and Bi-Phase Mark)
* Modbus RTU & ASCII
* PS2 Keyboard & Mouse
* SMBus (includes PMBus and Smart Battery)
* SPI (Serial Peripheral Interface)
* SWD (ARM Serial Wire Debug)
* Synchronous Parallel
* USB Low Speed and Full Speed
* [+50 More Commmunity Shared Protocols](https://support.saleae.com/community/community-shared-protocols)

### I3C Protocol Analyzer (3rd Party)

We've worked closely with the team at Binho LLC to develop a 3rd party I3C Protocol Analyzer plugin for our Saleae Logic software! This plugin is developed by Binho LLC and will require a paid license to use it within our software. If you're interested in more details, [please contact us here](https://contact.saleae.com/hc/en-us/requests/new)!

![I3C Analyzer running on Logic 2](../../.gitbook/assets/i3c-analyzer-in-action.gif)

### Analyzer User Guides

We provide user guides for a handful of our protocol analyzers, which we have listed in the link below.

{% content-ref url="analyzer-user-guides/" %}
[analyzer-user-guides](analyzer-user-guides/)
{% endcontent-ref %}

### **More Protocol Analyzers**

Some Logic users have created their own protocol analyzers. The following list of analyzers are available but not officially supported by Saleae.

{% content-ref url="../../community/community-shared-protocols.md" %}
[community-shared-protocols.md](../../community/community-shared-protocols.md)
{% endcontent-ref %}

### **Do all Saleae logic analyzer models support these protocols?**

Yes. However, you will need to use a device with sufficient bandwidth to record the original signal. For instance, Logic 4 simply does not have the bandwidth required to capture and decode USB full speed. Logic 4 has a maximum digital bandwidth of 3 MHz, and USB full speed requires a digital bandwidth of at least 12.5 MHz.

### What Happened to the UNI/O Analyzer?

Unfortunately, we have not yet ported the UNI/O analyzer from Logic v1 into the newer Logic v2 software. Specifically, it requires separate API functions that we simply haven't had the chance to implement yet. It's not on the roadmap at the moment, though we would like to gauge user interest in this before we commit to it, as porting this analyzer into Logic v2 would require quite a bit of work as compared to porting our other analyzers.

You can vote for this idea [here](https://ideas.saleae.com/b/feature-requests/port-the-uni-o-analyzer-into-logic-2).
