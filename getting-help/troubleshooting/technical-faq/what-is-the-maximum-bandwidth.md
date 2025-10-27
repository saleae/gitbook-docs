# What Is the Maximum Bandwidth of Logic?

The maximum bandwidth of a signal you can record with our Logic analyzers can be found in their respective datasheets linked below.

{% content-ref url="../../../product/datasheets-and-specifications/datasheets.md" %}
[datasheets.md](../../../product/datasheets-and-specifications/datasheets.md)
{% endcontent-ref %}

Please note that the maximum digital and analog bandwidths listed in our datasheets assumes that the maximum sampling rate available for that device is used.

Additionally, we provide some general rules below:

* When recording signals using Logic's digital channels, you should select a sampling rate that is at least 4 times faster than the recorded signal's bandwidth.
* When recording signals using Logic's analog channels, you should select a sampling rate that is at least 10 times faster than the recorded signal's bandwidth.
* There is an exception however. Specifically, for Logic Pro 8 and Logic Pro 16, when a digital channel is configured with a sampling rate of 500 MSPS, the maximum bandwidth is 100 MHz digital (not 125 MHz) due to hardware limitations.

**About Maximum Sampling Rates**

The maximum sampling rate available depends on the number of active channels.

Additionally, enabling both digital and analog channels in the same capture complicates this further since it is possible to swing priority from digital to analog, or vice versa.

To check the available sampling rates for your particular Logic model, and for a particular channel configuration, you can use our [Logic 2 software](https://www.saleae.com/downloads/) in Demo Mode to simulate a connected Logic device and to test the various channel and sampling rate combinations available to you for that particular Logic model.
