# Async Serial Analyzer - User Guide

The Saleae software includes a protocol analyzer for asynchronous serial communication.

![Async Serial Decoding in the Logic 2 Software](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 3.51.21 PM.png>)

Async serial communication is a very generic term that means any data that is transmitted serially (i.e., one bit at a time). The serial analyzer in the Saleae software is flexible, but it's ultimately designed to only decode serial data that uses the standard start bit and stop bit format. Many other features of the serial analyzer are flexible, though.

### Analyzer Settings

Below is a description of each setting and what it does.

![](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 3.53.02 PM.png>)

#### **Input Channel**

* Select which channel in your capture you would like to decode.&#x20;
* Looking to decode more than one channel? Just add a second serial analyzer!

#### **Bit Rate (Bits/s)**

* This is the bit rate, or baud rate. If you don't know the bit rate, you can measure it manually. More information on this is described below.

#### **Bits per Frame**

This is the number of bits per word (default is "8 Bits per Transfer"). Note that this number is just the data payload and does not include the start, stop, or parity bits.

#### **Stop Bits**

The async serial analyzer lets you select 1 stop bit, 1.5 stop bits, or 2 stop bits. The most commonly used setting is 1 stop bit.

#### **Parity Bit**

Parity is a feature where the serial transmitter includes an extra bit of information after transmitting the data word but before the stop bit that helps the receiver detect possible bit errors caused by line noise. In Logic software, the parity bit is signified by the bolded square dot, as shown in the figure below.

![Example of Even Parity bit, signified by the bolded square dot](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 3.59.02 PM.png>)

* No parity means no extra bit is transmitted.
* Even parity means that the total number of binary ones in the data word, including the parity bit, is an even number. For instance, 0b10110101 would have an even parity bit of one because there is an odd number of ones in the data word. An extra one will make the total an even 6 ones.
* Odd parity is similar to even parity, but the parity bit is used to make the total number of ones in the data word + parity bit and odd number.

**Significant Bit**

This simply states the order of bits on the bus, just like reading from left to right or right to left.

#### **Signal Inversion**

This is an important setting. Usually, TTL/CMOS level serial is active low, meaning that the bus idles high. Binary zeros are transmitted by pulling the line low, and binary ones are transmitted by pulling the line high. That is pretty common.

However, in some cases, such as recording RS-232 serial directly, the states are reversed. In RS-232, the line is idle low, and zeros are transmitted by pulling the line high. When recording RS-232 level signals directly, or in any other case where the channel is inverted, use this option.

#### **Mode**

* MP Mode (also called multiprocessor mode, multi-drop, or 9-bit serial) is a version of serial where the most significant data bit (almost always the last bit) indicates if the preceding 8 bits is data or an address.
* MDB Mode, also called multidrop bus, is basically the same as MP mode, but the address indicator bit is inverted.

In either mode, the normal serial word (usually 8 bits) is proceeded with an extra bit to distinguish address from data. In MP mode, the extra bit is set to indicate data and clear to indicate an address. The bit state is the inverse for MDB mode.

### **Determining the Proper Bit Rate (Baud Rate)**

Hover your mouse over the fastest 2-bits, and then take the inverse. One way to do this is to find a 2 bits of data that are opposite in state so you can measure the distance between the two transitions and take the inverse of that measurement to get its bit rate.&#x20;

#### Method 1: Manual Measurement

The software will show auto-measurements like shown in the image below. In this case, the inverse measurement is shown to be 114.943 kHz, which is close to the bit rate of 115.200 kBits/s that the DUT was communicating at.

![Measuring the bit rate from your signal via inverse width measurement](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 4.02.35 PM.png>)

It's best to perform the measurement in several different spots and average the results.

#### Method 2: Baud Rate Estimate Extension

As an alternative, you may also use a Baud Rate Estimate extension that was developed and kindly shared by a community user. The extension is available on our Extensions Marketplace.

![Baud Rate Estimate Extension](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 4.11.24 PM.png>)

![Baud Rate Estimate metrics as shown by a measurement box](<../../../.gitbook/assets/Screen Shot 2021-07-02 at 4.12.58 PM.png>)

In case you are unfamiliar with extensions and measurements, you may refer to the below support articles for more details on these features.

{% content-ref url="../../../extensions/installing-extensions.md" %}
[installing-extensions.md](../../../extensions/installing-extensions.md)
{% endcontent-ref %}

{% content-ref url="../../../user-guide/using-logic/measurements-timing-markers.md" %}
[measurements-timing-markers.md](../../../user-guide/using-logic/measurements-timing-markers.md)
{% endcontent-ref %}

### **Common Issues**

* Decoded data may be offset if there are no gaps between data transactions. An example of this issue is shown in the image below. This is especially apparent when the Logic capture is started in the middle of data transmission. The workarounds would be as follows:
  * Make sure to start your capture before serial data transmission has begun.
  * Ensure that your transmitted data contains idle periods of at least 1 transaction wide. Our Async Serial will always resync on the next set of data after the idle period of 1 transaction wide.

![Decoded Data is Offset](<../../../.gitbook/assets/Screen Shot 2022-03-03 at 8.23.35 PM.png>)

* How do I decode more than one channel of serial at once, such as RX and TX signals? To do this, add two instances of the Async Serial analyzer. More information on using multiple analyzers can be found below.

{% content-ref url="../../../faq/technical-faq/recording-multiple-protocols.md" %}
[recording-multiple-protocols.md](../../../faq/technical-faq/recording-multiple-protocols.md)
{% endcontent-ref %}

* How can I set the Async Serial analyzer to decode the parity and stop bits separately from the data bits? To do this, you will need to use our Protocol Analyzer SDK to modify the behavior of the Async Serial analyzer. Currently, the software will decode an entire serial word as a single frame. The SDK can be downloaded below.

{% content-ref url="../../../saleae-api-and-sdk/protocol-analyzer-sdk/" %}
[protocol-analyzer-sdk](../../../saleae-api-and-sdk/protocol-analyzer-sdk/)
{% endcontent-ref %}

### **Common Causes for Decoding/Framing Errors**

1. The data bus is idling low and the Async signal is inverted, causing the data to be decoded improperly. In this case, make sure the Async Serial analyzer settings are set to Inverted.
2. Auto baud might cause errors and may not be the most accurate method to decode data correctly. It is generally preferred to manually set the baud rate properly.
3. Check your data to see if parity should be enabled or disabled, and if the parity bit is even or odd. If selected incorrectly, the data will show parity errors. In the figure below, the Async Analyzer parity setting is set to odd parity, while the recorded data show an even parity.

![parity error](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/56131d271c503cac73630f28/f581fa8b595a6b6dfd5f570e58d87569/parity\_error.png)

If you're still facing decoding errors, you can compare your signal with a simulated signal generated by our Logic software. You can read more about simulating data below.

{% content-ref url="../../../user-guide/using-logic/demo-mode.md" %}
[demo-mode.md](../../../user-guide/using-logic/demo-mode.md)
{% endcontent-ref %}

## Logic 1.x

If you are using the older Logic 1.x software, there are a couple differences as described below.

### Analyzer Settings

#### **Autobaud**

* Autobaud attempts to automatically determine the bit rate used in your recording.
* Autobaud accomplishes this by simply running the analyzer twice when you save the settings. First, it runs the analyzer using the baud rate set in the analyzer settings (default 9600). While it's running, it keeps track of the narrowest pulse in the entire capture. Then, it sets the baud rate accordingly, assuming that the narrowest pulse is exactly 1 bit wide.&#x20;
* If the narrowest pulse width is only 1 sample wide, the autobaud system will fail and not attempt to adjust the baud rate. That can happen when not sampling fast enough or when there is noise in the capture.
* If the narrowest pulse is within 5% of the user-entered baud rate, it will not attempt to adjust the baud rate.
* If neither condition is true, the software will automatically change the baud rate to the new setting and re-run the analyzer.
* To see if autobaud worked, re-open the analyzer settings. If the baud rate didn't change, then one of the above two conditions must have prevented it from working.
