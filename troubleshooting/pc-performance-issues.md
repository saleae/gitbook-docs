# PC Performance Issues with Logic

## PC Performance Issues with Logic

Under normal operation, the Logic software and device should not interfere with other applications or devices on the system, with a few exceptions:

* The software can consume a lot of memory after recording for long captures or at high sample rates. When a computer runs low on memory, all applications may respond slower since the system needs to constantly swap memory to and from the page file.

    Watch the memory usage of the software to see when this happens.

    On machines with slower disk access, the OS's caching process may make other applications appear completely unresponsive, sometimes including the OS and even the mouse cursor. If you notice this, monitor the memory consumption during the next capture and end the capture early with the stop button before the Logic software consumes more than 90% of the installed RAM. Also, make sure you are using the lowest analog sample rate appropriate for your application.

* When sampling, the device can use between 0% and 100% of effective USB bandwidth.

    However, Logic uses a low-priority USB transfer mode called "bulk." Devices such as USB mice or sound cards use a higher priority transfer mode called "isochronous." These devices should not be affected by Logic. USB flash drives, hard drives, or other devices, however, will be negatively impacted, but only when Logic is actively sampling.

* When sampling analog channels or high-density digital channels, the Logic software may consume much or most of the CPU. This may cause other applications to respond more slowly. That should only be temporary, and the CPU usage should return to normal once the capture and data processing are complete.

**Recommended Solutions to PC Slowdown**

If the PC is slowing down due to high memory consumption and caching, try the following:

* If you are recording analog, make sure you are using the lowest sample rate acceptable for your signal.
* Disable all channels you're not using.
* If you're using one or more analyzers, remove them during the capture. Once the capture is complete, save the capture and then apply the analyzer.
* If you're using more than one analyzer, try using only one at a time. Saving Logic setups is an easy way to change analyzers and settings.
* Record for shorter time spans.
* If you're recording analog, turn off the up-sample option in the software preferences. This causes a very minor visual downgrade in the analog data but reduces analog memory usage by 3x.
* Break up long captures into a series of short captures.
* Buy more RAM—a LOT more RAM.

**More Serious Issues**

Under normal operation, you should not experience any more issues. However, if you notice a correlation between issues with either software performance or other USB devices while the Logic software is running or the logic analyzer is connected, check the following:

* In task manager, watch the CPU usage and memory usage of the Logic software. Is it abnormally high?
* Remove Logic from the USB port. Did the problem go away? Test logic on other USB ports and on other USB hubs. There could be an issue with interference from other USB devices if these devices do not properly handle USB traffic.
* Close the software and re-open it. Did the performance of other applications return to normal?

