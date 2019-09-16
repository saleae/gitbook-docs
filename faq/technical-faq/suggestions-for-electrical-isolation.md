# Electrical Isolation Suggestions

None of the Saleae devices electrically isolate the ground of the device under test from the host PC’s USB ports. For most applications, this merely requires extra care from the user to prevent accidental ground loop short circuits. However, there are applications where electrical isolation between the device under test and the host PC is absolutely required.

### USB 3.0 Isolator

[Saleae Accessories - USB 3.0 Super-Speed 1kV Isolator](https://usd.saleae.com/collections/accessories/products/usb-3-0-superspeed-isolator)

* 1 kV continuous isolation \(data and power\)
* SuperSpeed ​​USB 3.0 - 5 Gbps
* Backward compatible with USB 2.0 / 1.1 / 1.0.
* Provides 900mA when used with included power supply.
* Includes Power Supply for US, CN, AU, EU and UK.
* Compatible with all Saleae Logic Analyzers
* Rugged aluminum housing with rubber bumpers

Please contact us if you have any specific questions regarding this USB isolator.

### Isolating the Inputs Before They Reach Logic

Another recommendation is to simply isolate the digital inputs before they reach Logic. You may want to consider using this [SI Labs digital isolator evaluation kit](https://www.digikey.com/product-detail/en/SI84XXISO-KIT/336-1765-ND/2170672). Additional work will be required to get it running, and it won’t work in all scenarios, but it’s a good starting point.

Unfortunately, we don’t currently have any suggestions for analog input isolation. However, there is one other option you can consider.

You can also fully isolate the host PC and all other attached peripherals from other ground references. This is done most easily with a laptop running from battery power or by using a modified isolation transformer with its MAINS ground wire disconnected. Please note that we only mention this as a possibility and do not recommend it since it can put the operator in danger under some circumstances. If the operator becomes the ground short between the device under test and the MAINS ground \(or another ground reference\), serious injury may occur.

### USB 2.0 Isolator

There is one USB 2.0 high-speed isolator on the market:  
[http://intona.eu/en/products](http://intona.eu/en/products)

We've tested it here, and it works very well. Unfortunately, there is one limitation. It can only provide 300mA of current to the downstream port, which is less than the standard 500mA from USB 2.0 ports. This is not a problem for Logic 4 or Logic 8. However, Logic Pro 8 and Logic Pro 16 will require the USB 3.0 Super-Speed Isolator mentioned above.

### Channel to Channel Isolation

No. All inputs on every product share a common ground internally, and that ground is also shared with the USB connection, and thus the host PC.

For digital channel-to-channel isolation, we suggest considering this [eval kit from SI Labs](http://www.digikey.com/product-detail/en/SI84XXISO-KIT/336-1765-ND/2170672).

