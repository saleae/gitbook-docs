# Using the Async Serial Analyzer

## Using the Async Serial Analyzer

The Saleae software includes a protocol analyzer for serial communication.

Serial communication is a very generic term that means any data that is transmitted serially \(i.e., one bit at a time\). The serial analyzer in the Saleae software is flexible, but it's ultimately designed to only decode serial data that uses the standard start bit and stop bit format. Many other features of the serial analyzer are flexible, though.

Using the serial analyzer is fairly easy, but it does have a lot of settings. Below is a description of each setting and what it does.

### **Serial Channel**

* Select which channel in your capture you would like to decode. 
* Looking to decode more than one channel? Just add a second serial analyzer.

### **Bit Rate \(Bits/s\)**

* This is the baud rate. If you don't know the baud rate, you can either measure it or use the autobaud feature.
* To measure the bit rate directly, see the section at the bottom of this article.

### **Autobaud**

* Autobaud attempts to automatically determine the bit rate used in your recording.
* Autobaud accomplishes this by simply running the analyzer twice when you save the settings. First, it runs the analyzer using the baud rate set in the analyzer settings \(default 9600\). While it's running, it keeps track of the narrowest pulse in the entire capture. Then, it sets the baud rate accordingly, assuming that the narrowest pulse is exactly 1 bit wide. 
* If the narrowest pulse width is only 1 sample wide, the autobaud system will fail and not attempt to adjust the baud rate. That can happen when not sampling fast enough or when there is noise in the capture.
* If the narrowest pulse is within 5% of the user-entered baud rate, it will not attempt to adjust the baud rate.
* If neither condition is true, the software will automatically change the baud rate to the new setting and re-run the analyzer.
* To see if autobaud worked, re-open the analyzer settings. If the baud rate didn't change, then one of the above two conditions must have prevented it from working.

### **Bits per Transfer**

This is the number of bits per word \(default 8\). Note that this number is just the data payload and does not include the start, stop, or parity bits.

### **Number of Stop Bits**

The serial analyzer lets you select 1 stop bit, 1.5 stop bits, or 2 stop bits. I've never seen the latter two options in practice.

### **Parity**

Parity is a feature where the serial transmitter includes an extra bit of information after transmitting the data word but before the stop bit that helps the receiver detect possible bit errors caused by line noise. In Logic software, the parity bit is signified by the bolded dot, as shown in the figure below.

![parity bit](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/56131d271c503cac73630f28/8f2d94bd54ba7ce037e5d69aadfd3101/parity_bit.png)

* No parity means no extra bit is transmitted.
* Even parity means that the total number of binary ones in the data word, including the parity bit, is an even number. For instance, 0b10110101 would have an even parity bit of one because there is an odd number of ones in the data word. An extra one will make the total an even 6 ones.
* Odd parity is similar to even parity, but the parity bit is used to make the total number of ones in the data word + parity bit and odd number.

### **Most Significant Bit / Least Significant Bit First**

This simply states the order of bits on the bus, just like reading from left to right or right to left.

### **Non-Inverted / Inverted**

This is an important setting. Usually, TTL/CMOS level serial is active low, meaning that the bus idles high. Binary zeros are transmitted by pulling the line low, and binary ones are transmitted by pulling the line high. That is pretty common.

However, in some cases, such as recording RS-232 serial directly, the states are reversed. In RS-232, the line is idle low, and zeros are transmitted by pulling the line high. When recording RS-232 level signals directly, or in any other case where the channel is inverted, use this option.

### **Special Modes**

* MP Mode \(also called multiprocessor mode, multi-drop, or 9-bit serial\) is a version of serial where the most significant data bit \(almost always the last bit\) indicates if the preceding 8 bits is data or an address.
* MDB Mode, also called multidrop bus, is basically the same as MP mode, but the address indicator bit is inverted.

In either mode, the normal serial word \(usually 8 bits\) is proceeded with an extra bit to distinguish address from data. In MP mode, the extra bit is set to indicate data and clear to indicate an address. The bit state is the inverse for MDB mode.

### **Measuring the Baud Rate Directly**

It is fairly easy to measure the bit rate of serial traffic directly. There are several ways to do this, with varying levels of accuracy. In all cases, it's best to perform the measurement in several different spots and average the results.

* Fastest way: Measure the width of 1 bit, and then take the inverse. Find a single bit \(one or zero\) surrounded on both sides by bits in the opposite state so you can measure the distance between the two transitions. Bit rate is 1 over bit width.
* Better way: Find a byte where the last bit before the stop condition is a 0. Measure the distance from the falling edge of the start bit to the rising edge of the stop bit using a timing marker pair, and then divide by 9 \(8 data bits + 1 start bit; the stop bit is not included\).

The measurement feature also lets you find the narrowest pulse width over a range.

### **Common Issues**

* How do I decode more than one channel of serial at once, such as RX and TX signals? To do this, add two instances of the Async Serial analyzer. More information on using multiple analyzers can be found below.

{% page-ref page="../../faq/technical-faq/recording-multiple-protocols.md" %}

* How can I set the Async Serial analyzer to decode the parity and stop bits separately from the data bits? To do this, you will need to use our Protocol Analyzer SDK to modify the behavior of the Async Serial analyzer. Currently, the software will decode an entire serial word as a single frame. The SDK can be downloaded below.

{% page-ref page="../../saleae-api-and-sdk/protocol-analyzer-sdk.md" %}

### **Common Causes for Decoding/Framing Errors**

1. The data bus is idling low and the Async signal is inverted, causing the data to be decoded improperly. In this case, make sure the Async Serial analyzer settings are set to Inverted.
2. Auto baud might cause errors and may not be the most accurate method to decode data correctly. It is generally preferred to manually set the baud rate properly.
3. Check your data to see if parity should be enabled or disabled, and if the parity bit is even or odd. If selected incorrectly, the data will show parity errors. In the figure below, the Async Analyzer parity setting is set to odd parity, while the recorded data show an even parity.

![parity error](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/56131d271c503cac73630f28/f581fa8b595a6b6dfd5f570e58d87569/parity_error.png)

If you're still facing decoding errors, you can compare your signal with a simulated signal generated by our Logic software. You can read more about simulating data below.

{% page-ref page="../../user-guide/using-logic/simulation-mode.md" %}



