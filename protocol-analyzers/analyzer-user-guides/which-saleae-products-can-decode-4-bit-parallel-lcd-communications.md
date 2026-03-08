# Which Saleae Products Can Decode 4-Bit Parallel LCD Communications?

The 4-bit parallel LCD protocol uses 7 digital signals—4 data channels, an enable signal, a register select signal, and a read/write control signal.

Any Saleae product with 7 or more digital channels can record 4-bit parallel LCD data, which the software can then decode.

Note: To use the LCD analyzer in 4-bit mode, you will need to set signals DB0 to DB3 to "none" and then assign the upper 4 bits to your 4-bit bus.

The following products have enough channels for this:

* Logic 8
* Logic Pro 8
* Logic Pro 16
* The original Logic (8 channel, digital only)
* The original Logic 16 (16 channels, digital only)
