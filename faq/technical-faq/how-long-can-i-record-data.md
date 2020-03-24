# How Long Can I Record Data?

## How Long Can I Record Data?

That depends on the capture settings you are using, the amount of memory in your computer, and the nature of the data you are recording.

All our products stream data over USB to the PC in real time. That way, your installed memory acts as the sample buffer.

We also pseudo-compress the digital data as it arrives. Samples with little digital activity use very little memory, and high-speed, high-utilization signals will consume more memory. Specifically, we use a format somewhat similar to run-length encoding.

Analog samples consume the most memory. When recording one or more analog signals, be careful to disable all channels that you aren't using.

The software will estimate the memory usage on the device settings popover.

