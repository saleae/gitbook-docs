# SMBus Analyzer - User Guide

The Saleae Logic software includes the ability to decode SMBus data. The SMBus Analyzer allows you to decode the SMBDAT and SMBCLK lines with some configuration settings which can change how the data can be viewed.

### Setting up the SMBus Analyzer

The SMBus Analyzer has the following settings.

<figure><img src="../../../../.gitbook/assets/Screenshot 2023-07-25 at 6.11.11 PM.png" alt=""><figcaption><p>SMBus Analyzer Settings</p></figcaption></figure>

First, select the channels for the SMBDAT and SMBCLK lines.

Then, select the SMBus decode level. This will change the way the decoded captured data is displayed on the Logic software.

<figure><img src="../../../../.gitbook/assets/Screenshot 2023-07-25 at 6.12.23 PM.png" alt=""><figcaption><p>SMBus Decode Level Setting</p></figcaption></figure>

### **SMBus Decode Level Setting**

**Signals:** This will show the data in single-bit format.

{% hint style="info" %}
Changing the Display Radix setting in the Logic software will not change the way the SMBus data is displayed. Instead, you must change the display format using the SMBus decode level setting.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/Screenshot 2023-07-25 at 6.14.41 PM.png" alt=""><figcaption><p>Signals Decode Level Setting</p></figcaption></figure>

**Bytes:** This will show the data in hex format, decode it as a read or write operation, and will display the bytes as an ACK or NACK. If PEC on packets need to be calculated and shown on screen, then SMBus, PMBus, or Smart Battery should be selected.

<figure><img src="../../../../.gitbook/assets/Screenshot 2023-07-25 at 6.15.20 PM.png" alt=""><figcaption><p>Bytes Decode Level Setting</p></figcaption></figure>

**SMBus, PMBus, & Smart Battery:** Set this to the appropriate protocol you will be decoding. When enabling the "Calculate PEC on packets" setting, the PEC will be shown when the data is decoded.

<figure><img src="../../../../.gitbook/assets/Screenshot 2023-07-25 at 6.16.09 PM.png" alt=""><figcaption><p>SMBus, PMBus, &#x26; Smart Battery Setting</p></figcaption></figure>

### SMBus Symbol Definitions

Here is a quick summary of the symbol definitions in the waveform in order of them appearing in a single SMBus transaction. Note that a transaction can be made up of multiple 8-bit words.

* Green circle = Start condition for the entire transaction
* Circle matching color of waveform = Stop bit for an 8-bit word (except the last one)
* Red circle = Stop bit for the last 8-bit word
* Orange square = Stop condition for the entire transaction

I also wanted to add that it’s normal for the SDA line to go high briefly when the component driving the SDA line low switches between the master and the slave device. For example, when the master device finishes transmitting data, it will then release the SDA line, allowing the slave to pull it low to signal the ACK. There is sometimes a brief time during the switch where neither component is pulling the line low, which can produce short positive pulse. This is usually before or after a ACK/NAK bit.

