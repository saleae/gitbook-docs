# Error Message: Out of Memory Exception Was Thrown

## Error Message: Out of Memory Exception Was Thrown

The Logic devices and software use your computer's memory as the main sample buffer when recording. Because of this, the software can use large amounts of memory, especially while recording high-speed signals or analog data.

The software will estimate the memory usage on the device settings popover.

The software consumes memory as it needs to during the capture. Sometimes, the software may need to continue to process data after the capture, such as rendering analog data, so it could continue to consume more memory for a short time after the capture finishes.

If the software is unable to allocate more memory, it should display a warning dialog and stop any in-process capture or background processing. The warning will indicate that an out of memory exception has occurred, and it will recommend that you save your work.

It is highly recommended that you save your work and restart the software. Alternatively, you could save your work and then try to free up memory by closing unused tabs or removing protocol analyzers that you are not using. However, it's important to take note that although the software is likely to detect this issue when a large allocation failure event occurs, if small allocations start to fail, the software WILL CRASH without any warning. Unfortunately, we have not yet been able to reliably prevent every out-of-memory-caused crash, although this is our goal.

**But I Still Have Free Memory**

If it appears that you have large amounts of free memory when this crash happens, first make sure that you're not using the 32-bit version of the software or a 32-bit OS. On Windows, the installer will only install the correct version of the software for your OS, so the only way to run the 32-bit software on 64-bit Windows is by using the standalone version.

Our OSX software is 64-bit only, so that isn't a concern. We've also noticed that on OSX, rather than display our warning or crash, the software is more likely to suddenly slow down for several seconds before returning to normal. If you see this happen, we recommend canceling any capture you're running early and closing or saving other open captures.

We've seen different releases of Linux handle this issue differently. It's possible that other applications on your computer running under Linux could experience out-of-memory errors before the Logic software does. If this occurs, we recommend saving your work, closing Logic, and then re-opening it.

