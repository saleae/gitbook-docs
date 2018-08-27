# Capture Settings Configuration Guide

## Capture Settings Configuration Guide

The new Saleae devices are considerably more capable than the first generation \(Logic and Logic16\). The new products have inputs that can be used to record analog, digital, or both. On all but Logic 4, this is applicable to every channel on the device. That leads to many more sample rate options, which can be confusing. In some cases, it makes it harder to decide the optimal capture configuration for your application.

Because if this, we get a fair number of customer support questions about how to choose the optimal capture configuration for an application. To help users determine the best setup for them, we're creating this guide. The guide also contains a number of tips for recording with more complex requirements.

Before moving on with this configuration guide, please first review the article below on device settings:

{% page-ref page="collecting-data-and-device-settings.md" %}

Generally, when starting a capture, make sure you record all the channels you have connected in the correct mode \(analog or digital\). You also need to make sure you record sufficiently fast in order to accurately record the signal and record long enough to locate the event\(s\) you are interested in.

However, meeting all of these requirements at the same time might not be easy or even possible in all situations.

The devices are designed to stream the recorded data over USB in real time, to be recorded and processed on a PC. That means that no matter what, the USB bandwidth limits the maximum sample rate of the capture. However, you can make compromises. You can trade unused channels for faster sample rates on the remaining channels, and you can sacrifice higher analog sample rates for faster digital sample rates. Optimizing these trade-offs is required whenever you need to push the limits of the device.

Over USB 2.0, the maximum possible bandwidth for most of our products is 300 Mbps. For our USB 3.0 products, it's 2 Gbps. Each digital sample for each channel consumes 1 bit. The analog samples are either 8 bit for Logic 4 or 12 bit for the new Logic 8, Logic Pro 8, and Logic Pro 16. \(Although Logic 8 is advertised as a 10-bit product, we maintain 12-bit samples through the entire process. The effective number of bits, however, is closer to 10\).

In addition to the limit of USB throughput, the installed RAM in the host PC is a limiting factor for how long our software can record. To optimize for a long recording length, it's important to reduce the number of active analog channels and reduce the sample rate to the minimum required for the remaining active channels.

In general, there is no benefit to sampling with lower digital sample rates. Our software run length encodes the data as it arrives so that memory usage is directly proportional to data density and unrelated to the sample rate.

Here are several factors to keep in mind when selecting the device capture settings:

* When recording for long durations, minimize the number of analog channels and reduce analog sample rates to the minimum to conserve RAM. Analog samples consume considerably more memory than digital samples and can reduce maximum recording times from hours to mere seconds. One channel of 50 MSPS analog data will consume 750 MB.
* You can save memory while recording analog data by disabling the up-sampled pipeline in the software preferences. That will reduce the memory usage of analog data by about 50%.
* The "performance" setting in the capture settings limits the maximum USB bandwidth by the device. It can be used on systems with poor USB performance to increase reliability by sampling at lower speeds \(i.e., reduce the number of "can't keep up" errors\). It can also be used to select lower sample rates.
* Digital channels only consume memory when their state changes. That makes the memory consumption of digital channels proportional to the number of transitions and not the sample rate or number of samples recorded. It makes it possible to record low-speed signals like I2C or serial for hours, where 10 MHz SPI can only record for several minutes.
* The memory usage estimator on the capture settings popover shows the estimated memory usage for a capture as a range. The range covers no digital activity to the maximum digital activity.
* A capture will consume memory until its tab is closed. When working with long captures, we recommend keeping only one capture open in the software at a time. Save the capture, move it to a new tab if it is not already, and then use the tab's menu to close it. That will free up memory for the next capture.
* Analyzers will also consume memory directly proportional to the number of generated results. The software uses about 40 bytes per result. Keep this in mind when recording high-speed parallel, SPI, or I2S traffic. This memory usage is not reported in our software. We recommend tracking the software's memory usage in task manager or equivalent.
* The capture progress dialog, which is displayed when a capture is in progress, can show several statistics. It will show the number of samples collected as well as the processing backlog and memory used. That is just the memory used by the analog and digital channels exclusively and does not include the overhead of the software or the memory used by Analyzers or other tabs.
* When using a trigger, the capture progress dialog will also show the trigger processing backlog. For correct operation, it's important that the processing backlog and the trigger search backlog stay as close to 0 as possible. If either of these numbers steadily increases during a capture, it may cause the memory usage to increase dramatically, and it also may result in a much longer capture than requested. That can be solved by lowering the digital sampling rate or removing unused channels. There is also an issue with version 1.1.34 and older that prevents the trigger from operating properly when one or more analog channels are used. Until 1.1.35/1.2.0 is released, please disable the trigger while using analog channels.
* The current software does not safely handle running out of memory. If the software fails to allocate additional memory, the current version will crash. We are working on a solution that will be introduced in a future version. In the meantime, try to keep the memory usage below the installed RAM amount. Some systems with high-performance hard drives may be able to page RAM in real time for some period of time after RAM is exhausted.
* Keep in mind that in order to successfully capture a signal, you must sample faster than that signal. That is due to the nature of asynchronous sampling and is described by the Nyquist-Shannon sampling theorem. With our products, in order to accurately sample a digital signal, you must sample at least 4 times faster than that signal.
* To accurately record an analog signal, you must sample at least 10 times faster than that signal. That is due to the filter response of our down-sampling filter as well as the hardware anti-aliasing filter that defines the maximum analog bandwidth of the device.
* Captures can always be ended early. If you are watching memory usage during a capture and decide that it's not safe to allow the capture to complete, or if you are sure that the event of interest has already been captured, you can end the capture by pressing the Stop button.
* The software does not have an automatic trigger and re-arm feature like an oscilloscope with real-time display. Our software requires each trace to be started manually with the Start button.
* If you are not able to record long enough for your application due to memory limits, you may want to take a look at the socket API. Several customers have used it to automatically start, save, and restart captures to allow much longer recordings with only small \(&lt;1 second\) gaps between very long captures.
* Some devices, including Logic Pro 8, Logic Pro 16, and the original Logic16, support multiple selectable voltage thresholds. In addition to being required to correctly record digital data at different IO threshold standards, voltage thresholds are important for rejecting noise near ground and avoiding double edge hits.
* You may be recording at too slow of a digital sample rate or using the wrong voltage standard if you find one or more pulses in the digital data that are only 1 sample wide \(1/sample rate\). In these cases, you may want to review your sample rate settings, review this guide, or contact support.

