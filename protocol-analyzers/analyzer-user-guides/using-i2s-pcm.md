# I2S / PCM Analyzer - User Guide

The Saleae Logic software includes a software protocol analyzer for the I2S digital audio protocol.

The specification for the I2S audio protocol can be found from Sparkfun's website (document by Philips Semiconductors) below:

[I2S bus specification](https://www.sparkfun.com/datasheets/BreakoutBoards/I2SBUS.pdf)

### **Decoding More Than Two Audio Channels at Once**

The Saleae analyzer is designed to decode two-channel audio in the I2S format. It is possible to decode additional channels by using more than one instance of the I2S analyzer at the same time and by sharing the clock and frame signal between analyzers. Each instance of the analyzers can decode two channels of audio.

### **Mono Mode**

The Saleae I2S analyzer does not support any Mono formats.

### **Common Problems**

#### Unable to display results in a signed decimal format

Even when the I2S settings have signed number selected, unsigned numbers may always be shown.

<figure><img src="../../../../.gitbook/assets/unsigned_issue.png" alt=""><figcaption></figcaption></figure>

This issue is solved by changing the display radix from ascii to decimal. Although a decimal number is shown, the single quotes indicate that the ascii display mode is active, but the number is considered a non-displayable character (in this case, outside of the low ascii range completely) so the text string defaults to unsigned decimal. Changing the display radix to decimal will show the signed number.

{% content-ref url="../../../../getting-help/troubleshooting/technical-faq/changing-the-display-radix.md" %}
[changing-the-display-radix.md](../../../../getting-help/troubleshooting/technical-faq/changing-the-display-radix.md)
{% endcontent-ref %}

#### Analyer Result displays "Error: bits don't divide evenly between subframes"

The analyzer result may also not display the data correctly. An image of the error is provided below.

<figure><img src="../../../../.gitbook/assets/I2S-error.png" alt=""><figcaption></figcaption></figure>

In the image above, the data bits are transitioning during the clock falling edge, but the I2S/PCM Analyzer is also set to read on the clock falling edge as shown by the "down" arrows on the clock signal.&#x20;

That means the bits are being decoded at the exact moment the bits are changing, which will cause errors and will be very sensitive to changes in the sample rate. Change the I2S/PCM Analyzer setting for CLOCK State to either Rising edge or Falling edge depending on the correct clock edge that your data requires.

<figure><img src="../../../../.gitbook/assets/Screen Shot 2023-01-30 at 4.55.55 PM.png" alt=""><figcaption><p>CLOCK State Rising Edge and Falling Edge setting</p></figcaption></figure>

### Converting I2S/PCM Captures into WAV Files

For more information on this, please see the link below.

{% content-ref url="../../../../getting-help/troubleshooting/technical-faq/convert-i2s-pcm-to-audio.md" %}
[convert-i2s-pcm-to-audio.md](../../../../getting-help/troubleshooting/technical-faq/convert-i2s-pcm-to-audio.md)
{% endcontent-ref %}
