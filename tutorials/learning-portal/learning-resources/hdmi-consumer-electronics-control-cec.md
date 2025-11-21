# HDMI Consumer Electronics Control (CEC)

CEC (Consumer Electronics Control) is a one-wire serial bus connected via HDMI and used to perform remote control functions across multiple devices.

**Top Resources**

* [Wikipedia](http://en.wikipedia.org/wiki/Consumer_Electronics_Control#CEC)
* [CEC White Paper](http://www.quantumdata.com/pdf/CEC_White_Paper.pdf)
* [XBMC Wiki](http://wiki.xbmc.org/index.php?title=CEC)
* [Respberry Pi Forum](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=35\&t=15749)

**Example HDMI CEC Parts**

* [USB CEC Adapter](http://www.pulse-eight.com/store/products/104-usb-hdmi-cec-adapter.aspx)
* [RCAware PC-CEC Remote](http://shop.rcaware.com/RCAware-PC-CEC-Universal-Remote-PC-CEC-BNDL.htm)

**What Logic Decodes**

<figure><img src="../../../.gitbook/assets/HDMI.png" alt=""><figcaption></figcaption></figure>

* Start Sequence
* 10-bit Header Blocks
* 10-bit Data Blocks
* EOM bits
* ACK bits
