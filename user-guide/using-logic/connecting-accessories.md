# Connecting Accessories

## Connecting Accessories

### **Wire Harness**

There are two types of wire harnesses. A 1x9 wire harness is used by Logic and Logic 16 \(1st-generation products\). A 2x4 wire harness is used by Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16 \(2nd-generation products\).

![](https://trello-attachments.s3.amazonaws.com/57215c90531737cce422992f/400x231/79023c1e979c03d8db6b3103c30927e8/11_small.jpg)

Generation 2: 2x4 Wire Harness

![](https://trello-attachments.s3.amazonaws.com/57215c90531737cce422992f/400x231/b03f9a1030ab24689cd4d4c51cbba700/15_small.jpg)

Generation 1: 1x9 Wire Harness

### **Connecting the 2x4 Harness**

If you have Logic 4, Logic 8, or Logic Pro 8/16, then you have one or more 2x4 wire harnesses. The four black leads are ground and should be on the bottom. The four colored leads are the signal inputs and should be on the top. There is an indication of this orientation on the back of the device.

![](https://trello-attachments.s3.amazonaws.com/57215c90531737cce422992f/400x286/2bed434b565a948eda840a10a1d6477a/Logic_Gen_2_Wire_Harness_Connection.jpg)

Note that the test lead color matches the channels in the software. The colors reflect the resistor color code for numbers 0–7. The numerical channel number is on the white heat shrink at the ends of the leads. The lead ends are terminated with a Molex 0016020086 crimp connector for connection to typical .100-inch spaced headers/pins. The 2x4 plastic housing is Molex 0022552081.

### **Signal Integrity with the 2x4 Harness**

The 2x4 harness has a ground lead for each signal. When signal integrity is a concern \(e.g., working with high-speed digital or analog in the presence of cross-talk sources\), connect a ground for each signal. Connect noisy digital inputs to leads as far as possible from leads connected to sensitive analog measurements.

### **Connecting the 1x9 Harness**

If you have the original Logic or Logic 16, then you have one or more 1x9 wire harnesses. These harnesses are colored according to the resistor color code for 0–7. The colors match the channel colors in the software. The ground wire is grey and has a GROUND label on the white heat shrink. Turn the device over for a ground symbol, and make sure the grey test lead aligns with this symbol.

![](https://trello-attachments.s3.amazonaws.com/57215c90531737cce422992f/400x300/3cbff1eee93b43855110b62a4b837e14/Generation_1_Wire_Harnness_Connection.jpg)

### **Signal Integrity with the 1x9 Harness**

When using Logic16 with more than 8 inputs, we recommend connecting the second ground line—especially if using higher voltages \(5V\). That will help reduce cross-talk during any simultaneous switching events.

### **Test Clips**

All Logic products come with enough test clips for every test lead. These test clips have two metal pins that can be inserted into the connector at the end of each test lead. Only one of the metal pins needs to be connected to a single test lead connector.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c90531737cce422992f/30ee8a4c58cd97cde782a7f01b247895/test-clip-connection.png)

### **Connecting to Headers**

If your PCB has .100-inch headers that break out signals you need to examine, you can connect the test leads directly to these pins.

### **Ultra-Fine Pitch and Other Difficulties**

In many situations, it may be difficult to connect Logic directly to your signal. Generally, in these situations, you'll want to solder a wire \(typically wire-wrap wire\) to an exposed pin, trace, or via, and then use Logic's test clip to connect to that wire. Alternately, you can invest in some extremely small pitch test clips such as these: [Test clips - Grabbers, Hooks](https://www.digikey.com/products/en/test-and-measurement/test-clips-grabbers-hooks/620?k=micro%20gripper)

