# Universal Serial Bus (USB) 2.0

USB 1.1/2.0 uses a single differential serial bus to communicate between a computer and peripheral device. Note that Saleae devices can currently only decode low-speed (1.5Mbps) and full-speed (12Mbps) USB traffic.

**Top Resources**

* [Wikipedia](http://en.wikipedia.org/wiki/USB#USB_1.x)
* [USB Tutorial](http://www.maximintegrated.com/app-notes/index.mvp/id/1822)
* [USB Brief Tutorial](http://www.computer-solutions.co.uk/info/Embedded_tutorials/usb_tutorial.htm)

**Example USB 1.1 Parts**

* [FTDI Breakout](https://www.sparkfun.com/products/9716)
* [USB Bit Whacker](https://www.sparkfun.com/products/762)
* [Pinguino 18F2550 Dev Board](http://anceop.com/?action=page\&param=viewProduct\&id=16278)

**What Logic Decodes**

<figure><img src="../../../.gitbook/assets/USB1.png" alt=""><figcaption></figcaption></figure>

* Sync
* Setup
* Address
* CRC
* Data Byte(s)
* ACK Bit
