Our built-in I2C analyzer displays I2C addresses as a 7-bit value + ACK/NAK bit by default.

![I2C decoded with 7-bit addresses](/support-assets/Screen%20Shot%202021-01-29%20at%204.20.11%20PM%20(1).png)

In certain scenarios, it may be preferred to view the address field as an 8-bit value (incorporating the R/W bit). We’ve added a high level analyzer (HLA) extension that allows for this feature.

1\. Navigate to the Extensions panel of the software on the right\
2\. Find the "I2C 8-Bit Address Display extension" and click Install

![](/support-assets/Screen%20Shot%202021-01-29%20at%204.22.46%20PM%20(1).png)

3\. Once installed, navigate to the Analyzers panel on the right and add it as an analyzer by clicking the "+" button.

![](/support-assets/Screen%20Shot%202021-01-29%20at%204.25.54%20PM%20(1).png)

4\. When the setup window appears, select your I2C analyzer\
5\. Afterwards, your I2C addresses should appear as an 8-bit value as shown below.

![](/support-assets/Screen%20Shot%202021-01-29%20at%204.27.28%20PM%20(1).png)
