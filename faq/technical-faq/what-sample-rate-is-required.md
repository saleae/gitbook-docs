# What Sample Rate Is Required for a Given Signal?

## What Sample Rate Is Required for a Given Signal?

As a rule of thumb, you will need to sample digital signals at least 4 times faster than their bandwidth. There is generally no harm in sampling significantly faster than this, and sampling faster improves timing resolution.

Analog signals must be sampled at least 10 times faster than their bandwidth. Sampling faster than this is not recommended for longer captures \(over 100 million analog samples\) due to the higher memory and CPU consumption of faster sample rates.

First, determine the bandwidths of the signal\(s\) you will record. Signals like Serial and I2C are usually very low speed, under 1 MHz. SPI usually falls in the range of less than 1 MHz to 25 MHz, and even faster. USB full speed runs at about 12 MHz. CAN commonly runs at 1 MHz.

Audio signals have a minimum bandwidth of 22 kHz. When measuring things like battery voltage over time, usually very low bandwidths are required \(less than 1 Hz\). Switching power supplies usually lie in the 10s of kHz to 1 MHz range.

Once you have identified the bandwidth requirements, multiply them by the above factors to determine the minimum sample rates. Then understand which product is capable of these sample rates. Don't forget to take into account the number of signals you will need to record at once. Most of the Saleae devices have a trade-off for higher sample rates on fewer channels, so if you need to record a large number of signals at once, make sure you verify the sample rate options with that channel count below.

{% page-ref page="what-is-the-maximum-bandwidth.md" %}

Also, don't forget to check the digital IO voltage levels and the analog input voltage range of each product below.

{% page-ref page="../../user-guide/supported-voltages.md" %}

Finally, if you need to record for more than 30 seconds at a time, consult this article regarding maximum buffer size below.

{% page-ref page="how-long-can-i-record-data.md" %}

**Examples**

* 100 kHz I2C \(standard speed\)

  Recommended minimum sample rate: 1+ MSPS

* 1 MHz SPI

  Recommended minimum sample rate: 4+ MSPS

  Always record SPI at least 4x faster than the clock channel.

* USB full speed

  Recommended minimum sample rate: 100 MSPS

* PWM

  Recommended minimum sample rate: as fast as possible. Preferably 256x or more faster than the clock speed.

* 9600 baud serial

  Recommended minimum sample rate: any

**Can Logic Record This?**

* ESPI at 66 MHz with 4 data channels

  No. Logic Pro 8 and Logic Pro 16 can only record signals that fast on 4 channels, and 4-channel ESPI uses 8 channels \(reset, CS, clock, alert, 4xdata\).

  Both Pro 8 and Pro 16 could record single I/O mode at that speed by ignoring either the alert or reset channel.

* 25 MHz SPI \(flash memory, SDIO\)

  Requires 4 channels at 100 MSPS or faster. Pro 8 or Pro 16 required over USB 3.0

* 100 MHz 8-bit parallel data bus with clock

  Not possible with any Saleae device currently.

* 25 MHz 8-bit parallel bus with clock

  Requires Pro 16 sampling on 9+ channels at 100 MSPS.

* 512 KHz clocked PCM digital audio \(4 channels\)

  Any unit can record this, including Logic 4.

