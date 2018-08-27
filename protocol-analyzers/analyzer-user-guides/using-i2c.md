# Using the I2C Analyzer

## Using the I2C Analyzer

The Saleae software includes a protocol analyzer for the I2C protocol.

The I2C protocol is a synchronous serial interface that uses one clock channel \(SCL\) and one data channel \(SDA\).

The analyzer will parse the address, direction \(read/write\) data, and ACK/NAK frame from I2C transactions. It will also use markers to indicate the start and stop conditions.

To use the I2C analyzer, first add it using the add analyzer menu on the right side.

In the settings, specify which input channels are used for the I2C signals SDA and SCL.

Then choose which display mode you prefer. When developing I2C firmware, your microcontroller may have a I2C peripheral, in which case we recommend 7-bit addressing. If you're working on a device where you do not write the firmware, we also recommend using the 7-bit address display.

However, when working on firmware without a I2C specific peripheral, either by bit-banging the interface or using a more generic synchronous serial module, the 8-bit address display mode may be more useful as the address data will accurately reflect the values used in your firmware.

The 8-bit mode displays the address left shifted one bit, as it is reflected on the bus. The 7-bit mode shows the actual 7-bit address, which takes the data from the bus and right shifts it one bit.

### **Issues with Noise Around Clock Edges**

You may notice where the analyzer seems to decode less than 9 bits per frame, or incorrect results. If you notice this, carefully zoom in around each clock edge in the problem frame and check to see if there is a "glitch" or narrow pulse present next to the clock transition that is causing a clock edge to be detected as two edges.

This can happen for several reasons, and we've added a software feature to allow these "glitches" to be filtered out. See this article for instructions.

{% page-ref page="../../user-guide/using-logic/software-glitch-filter.md" %}

You may want to try reducing the sample rate of the capture using a different IO voltage option, if supported by your logic analyzer, or filtering the electrical signal.

I2C is particularly vulnerable to this issue due to the slow rise times caused by the open drain bus topology. The relatively slow signal rise time through the threshold region of the logic analyzer input buffer can sometimes cause these glitches to occur.

### **Common Issues**

* Why does every read transaction get preceded by a write transaction?

  If you're new to I2C, you may notice that a read operation may be preceded by a write transaction when one was not expected. That is most likely because the I2C slave you are using first expects the master to write the desired address that should be read back later. Since a read transaction is only unidirectional, the read transaction can't be used to inform the slave of the read address. In many cases, this is done by the master first starting with a write transaction where the target read address is sent to the slave, followed by a I2C "re-start" condition, which then allows the master to begin a read transaction. Now that the slave device is aware of the desired read address, it can transmit this data back to the master.

### **Other Notes**

* The I2C protocol analyzer does not support a 10-bit address mode and can only display data as 8-bit words.
* The I2C analyzer does not support viewing data transfers in any other format than 8-bit words. If you are looking to display I2C data in larger word sizes, we suggest exporting the I2C results and combining 8-bit words into N-bit words in Excel.

