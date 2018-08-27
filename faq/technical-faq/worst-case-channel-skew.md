# What Is the Worst Case Channel to Channel Skew?

## What Is the Worst Case Channel to Channel Skew?

Relative to a reference signal, channel-to-channel skew is the variation in time of the position of the rising edge between the two signals. Here is [National Instrument's definition](http://zone.ni.com/reference/en-XX/help/370520K-01/hsdio/fpin_skew/).

It is also important to understand the concept below.

{% page-ref page="what-is-asynchronous-sampling.md" %}

For Saleae Logic products, the worst case channel to channel skew is 1 sample.

If recording the same signal with two different channels, the reason they may be off by 1 sample is due to small differences in the propagation delay, both inside and outside of the logic analyzer, and differences in the threshold voltage between the two channels.

