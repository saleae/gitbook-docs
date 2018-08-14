# Suggestions for Electrical Isolation

None of the Saleae devices electrically isolate the ground of the device under test from the host PC’s USB ports. For most applications, this merely requires extra care from the user to prevent accidental ground loop short circuits. However, there are applications where electrical isolation between the device under test and the host PC is absolutely required.

In these cases, we recommend using some kind of electrical isolator. The seemingly easiest way to isolate the product is to isolate the USB connection. Unfortunately, almost all of the USB isolators currently on the market only support low-speed USB and full-speed USB. Our products require high-speed USB to operate. That is especially confusing because they are advertised as “USB 2.0 isolators”; however, USB high speed is not required to be considered USB 2.0.

There is one USB 2.0 high-speed isolator on the market:

[http://intona.eu/en/products](http://intona.eu/en/products)

We've tested it here, and it works very well. Unfortunately, there is one limitation. It can only provide 300mA of current to the downstream port, which is less than the standard 500mA from USB 2.0 ports. This is not a problem for Logic 4 or Logic 8; however, Logic Pro 8 and Logic Pro 16 will have problems. Logic Pro 8 may work with the LED turned off; however, Logic Pro 16 will not be able to function properly.

It may be possible to power the logic analyzer using a powered USB hub that is properly isolated. Most hubs include a 2-prong power supply that will provide some minimal isolation from MAINs earth ground, but they are generally not rated for isolation.

Our second recommendation is to simply isolate the digital inputs before they reach Logic. You may want to consider using this SI Labs digital isolator evaluation kit. Additional work will be required to get it running, and it won’t work in all scenarios, but it’s a good starting point.

[http://www.digikey.com/product-detail/en/SI84XXISO-KIT/336-1765-ND/2170672](http://www.digikey.com/product-detail/en/SI84XXISO-KIT/336-1765-ND/2170672)

Unfortunately, we don’t currently have any suggestions for analog input isolation. However, there is one other option you can consider.

You can also fully isolate the host PC and all other attached peripherals from other ground references. This is done most easily with a laptop running from battery power or by using a modified isolation transformer with its MAINS ground wire disconnected. Please note that we only mention this as a possibility and do not recommend it since it can put the operator in danger under some circumstances. If the operator becomes the ground short between the device under test and the MAINS ground \(or another ground reference\), serious injury may occur.

