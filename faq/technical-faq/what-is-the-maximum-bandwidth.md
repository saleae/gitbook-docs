# What Is the Maximum Bandwidth?

The maximum bandwidth of a signal you can record with a logic analyzer depends on the sample rate.

* For digital signals, you must sample 4 times faster than the bandwidth. That means the bandwidth is one-quarter of the sample rate.
* For analog signals, you must sample 10 times faster than the bandwidth. That means the bandwidth is one-tenth of the sample rate.

For any sample rate with one exception, that is the case.

_For Logic Pro 8 and Logic Pro 16, when sampling at 500 MSPS, the maximum bandwidth is 100 MHz digital, not 125 MHz digital due to hardware limitations._

**Maximum Sample Rates**

For devices that have selectable channels, the maximum sample rate depends on the number of active channels.

The presence of both digital and analog channels in the same capture complicates this further since it is possible to swing priority from digital to analog, or vice versa.

You can find a brief overview of the maximum sample rates in the device technical specifications here: [https://www.saleae.com/\#DatasheetTile](https://www.saleae.com/#DatasheetTile)

You can use our fully featured device setting simulator to find different sample rate and active channel combinations: [https://www.saleae.com/performancecalculator](https://www.saleae.com/performancecalculator)

The original products, Logic and Logic16, are not listed in those areas; they only contain the latest products.

Original Logic \(discontinued September 2014\):

* Maximum digital sample rate: 24 MSPS
* Maximum digital bandwidth: 6 MHz

Original Logic 16 \(discontinued September 2014\):

* Maximum digital sample rate: 100 MSPS \(3 channels\)
* Maximum digital bandwidth: 25 MHz \(3 channels\)
* Maximum digital sample rate: 16 MSPS \(16 channels\)
* Maximum digital bandwidth: 4 MHz \(16 channels\)
* Other intermediate combinations available.

