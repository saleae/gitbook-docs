# How Long Can I Record Data?

That depends on the capture settings you are using, the amount of memory in your computer, and the nature of the data you are recording.

All our products stream data over USB to the PC in real time. That way, your installed memory acts as the sample buffer.

We also pseudo-compress the digital data as it arrives. Samples with little digital activity use very little memory, and high-speed, high-utilization signals will consume more memory. Specifically, we use a format somewhat similar to run-length encoding.

Analog samples consume the most memory. When recording one or more analog signals, be careful to disable all channels that you aren't working.

The best way to see how long the software can record is to use the online performance calculator:

[https://www.saleae.com/performancecalculator](https://www.saleae.com/performancecalculator)

Enter the settings you want to use, select the kind of data you expect to record, and select the amount of memory in your computer. It will estimate how long you will be able to record.

