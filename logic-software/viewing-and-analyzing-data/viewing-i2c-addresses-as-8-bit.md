# Viewing I2C Addresses as 8-bit

Our built-in I2C analyzer displays I2C addresses as a 7-bit value + ACK/NAK bit by default.

![I2C decoded with 7-bit addresses](<../../../.gitbook/assets/Screen Shot 2021-01-29 at 4.20.11 PM (1).png>)

In certain scenarios, it may be preferred to view the address field as an 8-bit value (incorporating the R/W bit). We've added a high level analyzer (HLA) extension that allows for this feature.

1\. Navigate to the Extensions panel of the software on the right\
2\. Find the "I2C 8-Bit Address Display extension" and click Install

![](<../../../.gitbook/assets/Screen Shot 2021-01-29 at 4.22.46 PM (1).png>)

3\. Once installed, navigate to the Analyzers panel on the right and add it as an analyzer by clicking the "+" button.

![](<../../../.gitbook/assets/Screen Shot 2021-01-29 at 4.25.54 PM (1).png>)

4\. When the setup window appears, select your I2C analyzer\
5\. Afterwards, your I2C addresses should appear as an 8-bit value as shown below.

![](<../../../.gitbook/assets/Screen Shot 2021-01-29 at 4.27.28 PM (1).png>)
