# How to Trigger the End of a Capture Instead of the Start

Unfortunately, the Logic software does not support the ability to trigger both the beginning of a capture and the end of the capture at the same time.

However, if you are looking for an event but only can trigger on a pattern that occurs after that event, there is a system for handling this.

First, you need to know the worst case time that can elapse between the event you are looking for and the pattern you will be able to trigger with later. This worst case time can now be used as the "pre-trigger buffer." It is a circular buffer that keeps data around before the trigger event occurs in case you need to look at what happened before the trigger. You can specify the length of the pre-trigger buffer in the software's preferences.

If you want to record everything between when you press Start and when the trigger occurs, that's fine—just enter a huge pre-trigger buffer such as 86400 seconds (24 hours).

Now, set the capture length to the minimum time (1 ms) and start your capture. The larger pre-trigger buffer will be able to hold the event you're looking for, and the capture will end promptly after the trigger pattern is found.

Ultimately, we would like to support triggering the start and end of the capture. In the meantime, keep in mind that you can always manually end a capture early that has already been triggered.
