# Error Message: Capture Stopped

Currently, there are 2 categories of error messages under which the capture may end prematurely due to running out of memory.

### Capture stopped due to insufficient memory

The first category is caused by a normal memory limit as per the error message below.

> Capture stopped due to insufficient memory. Increase memory buffer in device setting sidebar if possible. Analyzer data might not appear.

Specifically, your buffer length simply wasn't large enough to hold the entire capture length selected. This error affects timer mode and trigger mode. To solve this, you will need to increase the memory buffer size from within the Capture Settings panel.

### Capture stopped because backlogged data exceeded capture buffer size

The second category is caused by backlogged data consuming more than 90% of the buffer size. This error affects looping mode, or trigger mode before the trigger is found.

> Capture stopped because backlogged data exceeded 90% of the capture buffer size. Try reducing the sample rate or disable unused channels to avoid backlogging. Analyzer data might not appear.

To solve this, you will need to increase the memory buffer size from within the Capture Settings panel.
