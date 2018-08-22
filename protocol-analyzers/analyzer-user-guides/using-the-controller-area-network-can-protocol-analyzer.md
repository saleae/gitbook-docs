# Using the Controller Area Network \(CAN\) Protocol Analyzer

The Saleae Logic software includes a software protocol analyzer for the CAN protocol.

The Saleae CAN protocol analyzer supports standard and extended CAN identifiers.

Since the Saleae devices only have single-ended inputs and not differential inputs, the ideal way to record a CAN signal is after it has been converted to single-ended. If your design already includes CAN transceivers, you might be able to simply attach the probe on the single-ended side.

If you are unable to convert the CAN bus to single-ended, you may still be able to record one side of the CAN pair directly. See below.

{% page-ref page="decode-differential-and-high-voltage-data.md" %}

Once you have recorded the CAN signal and have added the CAN analyzer, there are three settings to select.

The first is the CAN channel. It just needs to be set to the input channel that you're using to record CAN.

Second is the bit rate. If you already know the bit rate your CAN bus is using, enter it here. If not, then there are several easy ways to measure this. Since the bit rate is the inverse \(reciprocal\) of the bit period, you simply need to measure a single bit period in the capture and take its inverse. You need to find a single bit by itself to do this, such as the pattern 010 or 101, where the center bit will have edges on each side. You can also place a measurement over an entire CAN transaction and turn on the measurement for the narrowest pulse width.

The last setting for CAN is the inverted option. If you are recording the single-ended version of CAN, you will not need this. If you are recording CAN Low, you will not need this. If you are recording CAN High or if for some other reason the CAN signal is inverted \(nominally idle high, inverted would be idle low\), then check this box.

Once these settings are correct, save the settings and check the results. You should see the following fields decoded: CAN identifier \(standard or extended\) Control field Data field\(s\) CRC value ACK or NAK

If you zoom in, you should see white dots in the center of each bit frame. These are added by the analyzer so you can see where an ideal CAN receiver set to the specified bit rate would sample the bus. It's most helpful when debugging baud rate error related issues.

The red X marks indicate stuffed bits. They are supposed to be there. The X simply lets you know that the bit is not included in the data and is only added for bit stuffing.

