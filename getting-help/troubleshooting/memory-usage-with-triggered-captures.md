# Memory Usage with Triggered Captures

This article describes how the software buffers data and uses memory when taking captures that have a trigger enabled.

**Background**

The current and previous Saleae devices do not have trigger features implemented in the hardware. In order to accomplish a triggered capture, the devices simply stream the data to the computer as soon as the Start button is pressed. The software then searches that data stream as it arrives for the trigger condition. Once the trigger condition is found, the device continues to capture data until the capture duration has been recorded.

In addition to searching the data as it arrives from the device, the software also discards data as it falls out of the pre-trigger buffer.

The pre-trigger buffer is used to hold a specified amount of the capture before the trigger condition. That way, the user can view events that occurred before the trigger event as well as after the trigger event.

As the analyzer searches the data for the trigger event, it also continues to buffer data that have already been searched in the pre-trigger buffer. As new data enters the pre-trigger buffer, old data are deleted so only a fixed length of the most recent data is kept.

That all works normally as long as the software is able to search the recorded data as fast as it is streamed to the PC, which is called running in real time.

However, in some cases, usually on slower PCs or on fast PCs when the sample rate is high and the recorded data density is very high, the trigger search system can't keep up with how fast data are arriving from the device. The trigger search system keeps working, but it gets behind, creating a backlog of data.

This backlog of data is data that has been recorded from the logic analyzer and streamed from the PC but hasn't been searched yet for the trigger condition. If this backlog continues to linearly grow as more time passes, which is usually the case when the software isn't able to search fast enough, the memory usage on the PC will also linearly grow.

There is no limit on this. The longer the software continues to search for the trigger, the more the backlog will grow and the more the memory usage will increase until the computer runs out of memory and the disk is no longer able to swap fast enough. In this case, our software tries to detect that the system is out of memory and stop the capture with the "out of memory exception was thrown" and automatically end the capture.

{% content-ref url="error-out-of-memory-exception.md" %}
[error-out-of-memory-exception.md](error-out-of-memory-exception.md)
{% endcontent-ref %}

However, not all computers and operating systems behave the same way. In the worst case, the software will become unresponsive and will need to be manually halted.

This is a particular concern when taking a capture with a trigger that does not occur frequently. It's important to note that even if the trigger search can't run in real time, as long as the trigger event occurs quickly after starting the capture (within a few seconds), everything will be fine. However, if the trigger backlog is rapidly growing, then the system may run out of memory before the trigger condition can be found.

**How to Monitor the Backlog Status**

During the capture, press the "More Detail" link on the capture progress dialog. This will show the state of the capture and processing backlog.

![Progress Dialog](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/58f268b2b1ed5dd58e181477/3d67bd143c740b2b3f7296774bf37f03/backlog.PNG)

* "Waiting for trigger..." indicates that the software has not yet detected the trigger condition. Once the trigger has been detected, the dialog information changes.
* Digital Samples Collected: This is the total number of digital samples that have been recorded by the device since the start of the capture.
* Sample Processing Backlog: Before the recorded digital data can be searched for the trigger, it first needs to be transformed into the data format used by the Saleae software. This backlog indicates if the sample processing system is or is not able to keep up with the capture in real time.
* Trigger Search Backlog: This is the trigger search backlog and indicates if the trigger search system is able to keep up or not.
* Memory Used: This represents just the memory used by the digital and analog data storage. It does not include protocol results or any other part of the software.

If the trigger is able to keep up in real time, the Sample Processing Backlog and the Trigger Search Backlog will stay at or near zero samples, possibly occasionally rising to as high as 10 million samples.

If either of the backlog indicators is steadily increasing, that indicates that the trigger is not able to keep up in real time and that memory usage is expected to grow rapidly.

**Recommendations for Getting the Software to Run in Real Time**

First, be sure to disable channels you are not using and reduce sample rates, if possible. (Be sure to sample at least 4 times faster than the speed of your signal.)

If you are using a pulse width trigger, you might want to try changing to an edge trigger to see if the performance is better.

If you are using a pulse trigger, please note that if you set the maximum pulse width to "n/a," more memory will be used due to the way the pre-trigger buffer works in this situation. The "n/a" maximum pulse width was designed to help detect an edge followed by a period of inactivity. We plan to improve the performance of this kind of trigger in the future.

If possible, consider disabling the trigger. In certain capture situations, your computer might not be able to keep up with data processing. If you disable the capture, the memory usage will not be different between when the data processing system gets backlogged and if it is able to run in real time.

**Contacting Support**

If you are having trouble getting the trigger system to reliably run in real time, please contact support and include the following information:

1. The specific capture settings used (sample rate, number of digital and analog channels enabled).
2. The trigger settings used.
3. A description of the signal being recorded (complexity of the signal being recorded affects performance).
4. A description of how quickly the backlog or memory usage grows.
5. An estimation of the typical amount of time that passes between when you click the Start button and when the trigger event physically occurs.

With this information, we can recommend solutions to the issue as well as attempt to reproduce the trigger situation here to see if we can improve the performance for that case through software updates.
