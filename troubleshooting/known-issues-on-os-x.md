# Known Issues on OS X

## Known Issues on OS X

{% hint style="info" %}
While testing these issues during the development between 1.2.3 and 1.2.5, we noticed that some of these issues dissipated after updating to OS X 10.10.5 and 10.11. The software release 1.2.5 also goes a long way to improve the reliability of the new products. The OS X update had the biggest impact on the original Logic's maximum sample rate, allowing us to reliably capture for more than 10 seconds on the original Logic at 24 MSPS. Some captures for 60 seconds did fail early, but most completed, which is the expected performance.
{% endhint %}

We've recently noticed a spike in crashes or sampling errors on our OSX software, which we are working on fixing now.

1. Occasional crashes with the new products when pressing "Start," usually after a number of previous captures.

    Usually, after one or more successful capture, the user might see an error when starting a capture that states there was an error issuing the Start command, queuing the read requests, or configuring the device. 

    The very next capture after that error crashes the software. 

    After restarting the software, the software asks you to reconnect the device.

    That is caused by a communication synchronization issue. It looks like an edge case that actually affects other platforms and host controllers as well but appears most frequently on OSX over USB 3.0.

    We are working on a software and firmware update right now that will eliminate this problem. It will be released in the next update.

2. Crashes when connecting the original Logic to the software on OS X.

    We've recently seen a new crash in our USB connection code on a number of OS X computers. This crash is platform-specific and will not appear on other platforms.

    We suspect an update to OS X has caused one of the IOKit USB functions we call during the connection process to return an error, which our software does not currently handle.

    We will fix this by handling the returned error properly in the next release.

3. The original Logic cannot keep up reliably at 24 MSPS on recent Apple hardware.

    After testing on the same hardware under windows, it appears that the issue is either software- or driver-related. We are investigating if we can restore the maximum sample rate with a software update now.

