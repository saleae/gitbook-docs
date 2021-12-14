# Logic Interferes with My Circuit Operation

All test equipment will have some effect on the signal that it's recording. This effect is usually referred to as loading.

In addition to probe loading, certain types of device failure or partial device failure can cause significantly higher than normal loading. This type of failure is usually limited to only one channel on the device and is covered under the Saleae 3-year warranty.

**Capacitive and resistive loading**

The effect of an electrical probe on a circuit is usually measured by its equivalent shunt capacitance and resistance. All four of the new products have a capacitive loading of 10 pF and a resistive loading between 1 and 2 Meg Ohms.

This loading is small enough to avoid issues on most signals within the bandwidth of the analyzer (up to 100 MHz digital bandwidth, 5 MHz analog bandwidth). However, these could pose a problem when recording high output impedance signals. It will also cause impedance discontinuities in the signal being recorded.

If you are recording an open drain bus or another bus topology other than CMOS or TTL, then check to see if the bus or IO specification is tolerant of extra pull-down resistance or bus capacitance.

**Checking for Issues**

If you notice negative effects on your application when a logic analyzer is applied, first check for ground loops. If the problem is caused by a common mode ground voltage, then the issue will appear the moment a ground pin from Logic is attached to your circuit and not when an input probe is connected. The issue will also only be present when the logic analyzer is attached to the host PC and when the device under test is powered. For more information on ground loops, see this article below.

{% content-ref url="../user-guide/safety-and-warranty.md" %}
[safety-and-warranty.md](../user-guide/safety-and-warranty.md)
{% endcontent-ref %}

In the absence of a ground loop problem, there could be a problem with one or a few of the inputs on the device. Try using different input channels on the logic analyzer. Also try measuring the resistance between the input pin and the ground pin on the logic analyzer using a multi-meter. If you see a lower resistance than specified for that device, let us know, and we can replace it under warranty.

Please also perform the basic channel functional test described in this article.

{% content-ref url="captured-data-looks-incorrect.md" %}
[captured-data-looks-incorrect.md](captured-data-looks-incorrect.md)
{% endcontent-ref %}

**Original Logic Input States**

The original Saleae Logic (8 channel, digital only) has different input loading when it is not connected to the PC and configured. This loading is significant enough to interrupt some types of signals, including open-drain signals such as I2C.

When using the original Logic, it is recommended to not connect Logic to your device under test until the Logic unit is connected to the PC and the software is running. It is also recommended to disconnect Logic from the device under test before disconnecting it from the PC.

The easiest way to connect and disconnect Logic from your device under test is to simply connect and disconnect the 1x9 wire harness from the unit.

The other Saleae devices do not have significantly different loading when unpowered.

The original Logic is also the only Saleae device to use pulled up inputs. All other Saleae devices have inputs that are pulled to ground. This could cause issues with a circuit that relies on very weak pull-down resistors or when the circuit needs to correctly detect a high-Z state. In these cases, modifications to the circuit may be required. For instance, an extra pull-down resistor could be added to counteract the original Logic's pull-ups.

More information on the inputs of the original Logic can be found below.

{% content-ref url="../user-guide/supported-voltages.md" %}
[supported-voltages.md](../user-guide/supported-voltages.md)
{% endcontent-ref %}

**Still Unable to Identify the Problem**

If the device does not seem to have a problem, there is no ground loop or no common mode ground voltage, but the device is still causing problems with your circuit, please let us know. Also let us know what signals you are recording and what components are connected to that signal. You may want to try recording the signal in analog if you have a Saleae device that supports analog recording or easy access to an oscilloscope. Any information you can submit to support will help.
