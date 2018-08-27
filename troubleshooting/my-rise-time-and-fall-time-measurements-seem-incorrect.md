# My Rise Time and Fall Time Measurements Seem Incorrect

## My Rise Time and Fall Time Measurements Seem Incorrect

When measuring rise times and fall times, we recommend using your device's highest advertised sample rate.

Inside Logic 8, Logic Pro 8, and Logic Pro 16, there is a digital analog filter that engages for sample rates lower than the advertised sample rate. It is called the decimation filter and will filter the data further before down sampling so data sampled at lower rates does not suffer from aliasing from frequency components that made it through our high-order, anti-aliasing filter from the previous stage.

You can read more about Logic's filter stages below.

{% page-ref page="digital-and-analog-appear-different.md" %}

This means that when measuring at lower sample rates, the rise and fall times may appear longer than they actually are due to our decimation filter. Because of this, rise and fall times should be measured at your device's highest advertised sample rate.

