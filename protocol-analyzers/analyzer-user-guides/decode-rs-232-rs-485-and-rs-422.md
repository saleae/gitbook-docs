# Decode RS-232, RS-485, & RS-422

The new Saleae Logic products \(Logic 4, Logic 8, Logic Pro 8, Logic Pro 16\) can be used to read and decode RS-232, RS-485, and RS-422 data up to +/- 25V.

Our older Logic products \(Original Logic, Logic16\) have a 0V to 5V absolute maximum range. Therefore, neither product can be used to measure signals outside of this range. That limits its usage for directly recording RS-232, RS-485, and RS-422, which exceed this range in many cases.

### **Precautions to Avoid Damage to Saleae Logic**

These protocols typically operate at higher voltages, sometimes up to +/- 25V. For this reason, there are several precautions and setup requirements to consider beforehand, which you can read more about below.

{% page-ref page="decode-differential-and-high-voltage-data.md" %}

### **Use the Async Serial Analyzer**

RS-232, RS-485, and RS-422 transmit data via asynchronous serial communication. For this reason, you can use our Async Serial Analyzer to decode the data. You can view our setup guide below.

{% page-ref page="using-async-serial.md" %}

