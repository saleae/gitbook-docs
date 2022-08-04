# Supported Protocols

The Saleae Logic software includes the following protocol analyzers:

* 1-Wire
* Asynchronous Serial&#x20;
* Atmel SWI (Single Wire Interface)&#x20;
* BISS-C&#x20;
* CAN (Controller Area Network)&#x20;
* DMX512&#x20;
* HD44780 Parallel LCD&#x20;
* HDLC (High-Level Data Link Control)&#x20;
* HDMI-CEC&#x20;
* I2C&#x20;
* I2S Audio / PCM&#x20;
* I3C (see section below)&#x20;
* JTAG&#x20;
* LIN (Local Interconnect Network)&#x20;
* MDIO (Management Data Input/Output)&#x20;
* MIDI&#x20;
* Manchester (Differential, Bi-Phase Space, and Bi-Phase Mark)&#x20;
* Modbus RTU & ASCII&#x20;
* PS2 Keyboard & Mouse&#x20;
* SMBus (includes PMBus and Smart Battery)&#x20;
* SPI (Serial Peripheral Interface)&#x20;
* SWD (ARM Serial Wire Debug)&#x20;
* Synchronous Parallel&#x20;
* USB Low Speed and Full Speed

### I3C Protocol Support

We plan on officially bringing I3C protocol support to Saleae Logic, and we currently have a working solution! If you're interested in more details, [please contact us](https://contact.saleae.com/hc/en-us/requests/new).

![I3C Analyzer running on Logic 2](../.gitbook/assets/i3c-analyzer-in-action.gif)

The I3C analyzer will be released as our first "premium" analyzer, meaning that it will require a paid license to use it within our software (we're currently working out the details behind how this might work). We believe that we can provide an amazing developer experience at a price point that is a great deal for customers who are already using new protocols, and at the same time, helps us generate enough revenue to continue working on new features. We welcome any and all feedback!

### Analyzer User Guides

We provide user guides for a handful of our protocol analyzers, which we have listed in the link below.

{% content-ref url="analyzer-user-guides/" %}
[analyzer-user-guides](analyzer-user-guides/)
{% endcontent-ref %}

### **More Protocol Analyzers**

Some Logic users have created their own protocol analyzers. The following list of analyzers are available but not officially supported by Saleae.

{% content-ref url="../community/community-shared-protocols.md" %}
[community-shared-protocols.md](../community/community-shared-protocols.md)
{% endcontent-ref %}

### **Do all Saleae logic analyzer models support these protocols?**

Yes. However, you will need to use a device with sufficient bandwidth to record the original signal. For instance, Logic 4 simply does not have the bandwidth required to capture and decode USB full speed. Logic 4 has a maximum digital bandwidth of 3 MHz, and USB full speed requires a digital bandwidth of at least 12.5 MHz.

### What Happened to the UNI/O Analyzer?

Unfortunately, we have not yet ported the UNI/O analyzer from Logic v1 into the newer Logic v2 software. Specifically, it requires separate API functions that we simply haven't had the chance to implement yet. It's not on the roadmap at the moment, though we would like to gauge user interest in this before we commit to it, as porting this analyzer into Logic v2 would require quite a bit of work as compared to porting our other analyzers.&#x20;

You can vote for this idea [here](https://ideas.saleae.com/b/feature-requests/port-the-uni-o-analyzer-into-logic-2).
