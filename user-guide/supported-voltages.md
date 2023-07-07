# Supported Voltages

There are two important specifications to keep in mind when determining what signals can be recorded with the Saleae products and what signals could potentially damage the device.

The first is the supported IO thresholds. These define the voltage thresholds that determine what is recorded as a digital 0 and a digital 1.

The second is the over-voltage protection. It determines the maximum input voltage that can be applied without risking damage to the device.

For all Saleae products, all inputs share the same IO threshold. For products with selectable thresholds, there is no way to assign different IO thresholds to different pins at the same time. All pins share the same threshold setting.

### A Note on Input Threshold Variation

There might be some small variation in the precise threshold voltage channel to channel. That is most notable in the Saleae Logic Pro devices because comparators with low hysteresis are used.

### **Logic 8**

Logic 8 has a fixed input voltage threshold for its digital channels.

* Voltage input low: 0.6V
* Voltage input high: 1.2V
* Over-voltage protection provides safety to +/- 25V

Notes:

* The 1.2V input voltage high spec allows Logic 8 to be used directly with the CAN low channel of 3.3V CAN.
* Recommended IO standards: 5.0V, 3.3V, 2.5V, 1.8V
* For Logic 8's digital channels, the range between 0.6V and 1.2V results in undefined behavior. For signals that might cross this range slowly (e.g. I2C signals due to its relatively slow rise/fall times caused by its open drain topology), you may want to ensure that the software glitch filter is enabled to filter out any potential glitches that might cause decoding errors.

{% content-ref url="using-logic/software-glitch-filter.md" %}
[software-glitch-filter.md](using-logic/software-glitch-filter.md)
{% endcontent-ref %}

### **Logic Pro 8 and Logic Pro 16**

Logic Pro devices have three selectable voltage threshold options. This setting applies to all the input channels simultaneously.

![Logic Pro 8/16 - Voltage Threshold Setting in the Logic 2 software](<../.gitbook/assets/screen-shot-2020-09-03-at-3.58.18-pm (1) (1) (1).png>)

The inputs are also implemented with comparators instead of standard CMOS buffers found on Logic 4 and Logic 8. This makes the input-low and input-high voltages very close to each other. The exact behavior of these comparators is not defined here.

*   1.2V Voltage Option

    * Voltage threshold: 0.6V


*   1.8V Voltage Option

    * Voltage threshold: 0.9V


*   \+3.3V Voltage Option

    * Voltage threshold: 1.65V
    * Use this option for all IO standards 3.3 volts or above.


* Over-voltage protection provides safety to +/- 25V

Notes:

* Recommended IO standards: 5.0V, 3.3V, 2.5V, 1.8V, 1.2V
* The precise threshold voltage is not calibrated and may vary as much as +/- 15%. That is more than accurate enough to record standard IO families.

### **Logic 4**

Logic 4 has a simple, fixed input voltage threshold.

* Voltage input low: 0.8V
* Voltage input high: 2.0V
* Over-voltage protection provides safety to +/- 25V

Notes:

* Over-voltage protection is sufficient to use this product safely with RS-232, RS-485, 12V TTL, and other larger swing signals inside the +/- 25 V range. No adapter or additional protection is required.
* Because of the voltage input high threshold of 2.0 volts, this device cannot be used with 1.8V or 1.2V logic. It also cannot be directly connected to 3.3V CAN signals. Please see our article about recording CAN for more details.
* Recommended IO standards: 5.0V, 3.3V, 2.5V

### **First-Generation Logic**

The original Logic also has a fixed input voltage threshold.

* Voltage input low: 0.8V
* Voltage input high: 2.0V
* Over-voltage protection provides safety to +/- 15V

Note: Over-voltage protection is not meant for continuous operation outside of -0.5V to 5.25V. That makes the device unsuitable for safe, direct recording of RS-232 and similar standards.

The original Logic is the only Saleae device to have internally pulled up inputs. All other Saleae devices had an internal resistance to ground. The original Logic's inputs float at about 2.4 volts, with over 100 K ohms of pull-up resistance, producing a very small pull-up effect.

### **First-Generation Logic16**

The original Logic16 had two selectable threshold settings. There is approximately a 5 second delay when setting this threshold for Logic16.

*   1.8V to 3.6V Setting

    * Voltage input low: 0.7V
    * Voltage input high: 1.5V&#x20;


*   3.6V to 5.0V Setting

    * Voltage input low: 1.4V
    * Voltage input high: 3.6V


* Over-voltage protection provides safety to +/- 50V
  * Note: Over-voltage protection not meant for continuous operation outside of -0.9V to 6V. That makes the device unsuitable for safe, direct recording of RS-232 and similar standards.
