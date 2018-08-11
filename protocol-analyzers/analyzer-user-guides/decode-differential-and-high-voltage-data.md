# Decode Differential and High Voltage Data

First, review the supported IO thresholds of the product you are using as well as its over-voltage protection. These details for each product can be found here: [https://trello.com/c/QJAYu6SN](https://trello.com/c/QJAYu6SN)

**12V and 24V TTL Logic**

* Connecting to higher voltage signals with the new Logic 4, Logic 8, Logic Pro 8, or the Logic Pro 16.

  All four of the new Saleae devices include over-voltage protection to +/- 25 volts. It’s perfectly safe to connect any signal up to this range directly to its inputs.

  This may work for most applications. However, keep in mind that the logic threshold \(the trip-point voltage that determines if the input is a logic 0 or a logic 1\) is very low compared to a 12-volt signal. If your signal does not swing all the way to ground or has a very slow transition speed, it may skew the results or simply not read correctly. In these cases, you may want to use a resistor divider to reduce the voltage level, so the trip point will appear to be higher relative to your signal. Keep the bandwidth requirements and Logic’s input capacity in mind when creating a resistor divider.

* Connecting to higher voltage signals with the original Logic or Logic16.

  Logic's and Logic16's inputs operate up to 5 volts and have over-voltage protection to protect against short transients up to higher voltages. However, neither product can be directly connected to signals outside the 0V to 5V range.

  To connect Logic to a higher voltage signal, you have several options. In the general case, the best solution is to use a level shifting IC or adapter to convert to a lower voltage.

  You may also be able to use a resistor divider. However, this will either reduce the input bandwidth of Logic or consume extra power from your circuit, depending on the resistor values.

**Controller Area Network**

* Generally, we recommend converting CAN to a single-ended TTL signal before connecting it to Logic. However, in most cases, you can connect the CAN low signal directly to the Logic analyzer. CAN low is electrically similar to single-ended CAN and can be interpreted by our CAN analyzer.
* Note: If you are using the original Logic16, make sure you have selected the lower voltage setting for 1.8V to 3.3V logic.
* Also note: If you are using 3.3 Volt CAN, you might not be able to record it directly with Logic 4. Please consult the threshold voltages for each of our products here: [https://trello.com/c/QJAYu6SN](https://trello.com/c/QJAYu6SN)
* Our products are most likely to work with recording CAN low. It is very unlikely that they will be able to record CAN high. Logic 4 requires CAN low to swing below 0.8 volts and above 2.0 volts. Logic 8 requires CAN low to swing below 0.6 volts and above 1.2 volts. Logic Pro 8 and Logic Pro 16 have comparator inputs instead of CMOS inputs, with selectable thresholds. For use with CAN low at 5 volts, the highest threshold setting is suggested. In the software, it is labeled as 3.3v+, and the threshold voltage itself is about 1.65 volts.
* We recommend verifying that CAN low does swing below the required voltage before making a purchase. Otherwise, a voltage divider or a CAN adapter may be required.
* The Saleae devices and CAN analyzer were designed with single-ended CAN in mind, for development of CAN devices that contain a CAN transceiver IC. The recommended way to record CAN data is to probe the single-ended signal between the CAN transceiver IC and the application processor.

**RS-232, RS-485, and RS-422**

* All four of the new Saleae devices include over-voltage protection to +/- 25 volts. It’s perfectly safe to connect any signal up to this range directly to its inputs.
* The original Logic and Logic16 cannot be directly connected to these signals. They also have over-voltage protection, but it was not designed to be used with these signals continuously. Either use a voltage divider or a dedicated line transceiver/receiver to convert these signals to CMOS/TTL levels.
* When recording any of these signals, it is important to properly connect the ground from the logic analyzer to either the ground of the transmitter or the receiver. Do not connect ground to one of the signal wires, as this could damage your equipment. Neither RS-232, RS-485, nor RS-422 are isolated, which means that all transmitters and receivers on the bus must share the same ground to operate. In most cases, a ground wire is included in the bus wiring, which could be tapped with Logic. Otherwise, you will need to find another ground connection nearby to connect to.
* For RS-422 and RS-485, it's generally not necessary to record both the + and - signals. In most cases, recording only one-half of the differential pair is sufficient. However, it's usually a good idea to record both sides, at least at first, to evaluate the differences in the recording quality of the two signals. Because the threshold voltage of the logic analyzer is not matched properly for differential signals, it's likely that one side of the differential pair will have a cleaner recording than the other.

**ECL \(Emitter Coupled Logic\)**

ECL logic swings between -1.75 volts \(logic low\) and -0.9 volts \(logic high\). Because none of the Saleae products offer threshold options below ground, ECL cannot be directly recorded with digital inputs. The Logic Pro devices can record these signals in analog, but only at very low bandwidths, and the recorded signal can only be viewed in analog—protocol analyzers and digital measurements can't be applied.

**PECL \(Positive Emitter Coupled Logic\)**

PECL swings from +3.4 volts \(logic low\) to +4.2 volts \(logic high\).

The highest threshold option for a Saleae product is only 1.65 volts on the Logic Pro devices, which is not high enough to properly record the PECL signals using the digital inputs. You may want to consider level shifting the signal down or recording it with the analog inputs at a much lower bandwidth.

**LVDS \(Low Voltage Differential Signaling\)**

As mentioned before, none of the Saleae products have differential inputs. They are single-ended only. Ideally, LVDS signals should be recorded downstream of an LVDS line receiver or transceiver.

Recording directly with single-ended inputs: In situations with programmable drive strength or termination resistors, you may need to first check the signal voltages using the analog recording mode of the new Saleae products. Then check the recorded signals against the voltage threshold\(s\) for the product you are using.

**Ethernet**

It is not possible to directly record Ethernet signals with Saleae devices. However, it may be possible to record 10BASE-T data with some input circuitry.

10BASE-T Ethernet is a differential signal using Manchester encoding. Ethernet cable has an impedance of 100 ohms, and the signals swing between +1V and -1V, producing a peak-to-peak voltage of +/- 2 volts. Saleae devices do not directly support recording differential signals, so a differential to a single-ended receiver is recommended. Once the signal has been converted to single-ended, it can be recorded, and physical layer decoding can be performed using the Manchester protocol analyzer built into the Saleae software. Since Ethernet devices will not communicate unless a device is connected to receive data, you will most likely need to tap the signals on an existing Ethernet transceiver.

10 Mbit data with Manchester encoding has a bandwidth of 20 MHz. To record this with a Saleae device, a minimum sample rate of 80 MHz is required. For this, Logic 8, Logic Pro 8, Logic Pro 16, and the original Logic 16 would be suitable. Be sure to verify the IO standards of the device you will use before implementing the necessary single-ended conversion.

100BASE-T Ethernet and faster cannot be recorded because the signal is tri-state. \(+1V, -1V, and 0V\). No Saleae device is capable of recording digital signals with 3 states, and the analog inputs do not have the required bandwidth to record 100BASE-T signals. Also, protocol decoders cannot be used on analog signals.

