# Using the I2S / PCM Analyzer

## Using the I2S / PCM Analyzer

The Saleae Logic software includes a software protocol analyzer for the I2S digital audio protocol.

The specification for the I2S audio protocol can be found from Sparkfun's website \(document by Philips Semiconductors\) below:

[I2S bus specification](https://www.sparkfun.com/datasheets/BreakoutBoards/I2SBUS.pdf)

### **Decoding More Than Two Audio Channels at Once**

The Saleae analyzer is designed to decode two-channel audio in the I2S format. It is possible to decode additional channels by using more than one instance of the I2S analyzer at the same time and by sharing the clock and frame signal between analyzers. Each instance of the analyzers can decode two channels of audio.

### **Mono Mode**

The Saleae I2S analyzer does not support any Mono formats.

### **Common Problems**

* Unable to display results in a signed decimal format, even when the I2S settings have signed number selected. Unsigned numbers are always shown.

![unsigned problem](https://trello-attachments.s3.amazonaws.com/563bcc5548813a99d37d24c3/290x91/dab45355226161740fa4c5f30c74abd4/unsigned_issue.PNG)

* This issue is solved by changing the display radix from ascii to decimal. Although a decimal number is shown, the single quotes indicate that the ascii display mode is active, but the number is considered a non-displayable character \(in this case, outside of the low ascii range completely\) so the text string defaults to unsigned decimal. Changing the display radix to decimal will show the signed number.

{% page-ref page="../../faq/technical-faq/changing-the-display-radix.md" %}

* Decoder displays "Error: bits don't divide evenly between subframes" or decoder does not display the data correctly as shown below.

![i2s error](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/563bcc5548813a99d37d24c3/90d5f3fbdeed46908d3221dd647fcf17/I2S-error.png)

* In the figure above, the data bits are transitioning during the clock falling edge, but the I2S/PCM Analyzer is also set to read on the clock falling edge. That means the bits are being decoded at the exact moment the bits are changing. That will cause errors and will be very sensitive to changes in the sample rate. Change the I2S/PCM Analyzer setting to "Data is valid and should be read on the CLOCK rising edge."

