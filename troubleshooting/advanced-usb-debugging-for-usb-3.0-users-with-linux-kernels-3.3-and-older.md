# Advanced USB Debugging for USB 3.0 Users with Linux Kernels 3.3 and Older

This article discusses how to control the maximum USB transfer size to troubleshoot two very specific issues that affect certain hardware/driver combinations.

The most common case to use this guide is if you are using the Linux kernel version 3.3 or older. To check what version of the kernel you are using, just run:

uname –r

This guide may also be used in a few other very specific cases on Linux, OSX, and Windows, usually at the request of a Saleae support agent.

This guide requires software version 1.2.2+.

**Background**

When running a capture, the Saleae Logic analyzer device streams capture data over USB in real time. The data are streamed by simply repeating a read operation from the PC over and over. Because the data are being captured at a fixed rate, the PC has to be able to read the data at a very constant speed. If the PC momentarily stops reading, the device’s buffer might overflow, ending the capture early.

In order to reduce the likelihood of this from happening, the PC keeps a certain amount of read requests in the queue at all times. As reads complete, more read requests are queued. By default, at any time there are about one-third of a second’s worth of read requests queued at any given moment.

In order to queue a read request, its read buffer needs to be allocated before it can be queued. That means that at all times, there is about one-third of a second's worth of USB transfer buffers pre-allocated.

At the highest throughput, that’s about 83 MB of RAM—not that much, really.

**The Problem on Older Linux Kernels**

In the Linux Kernel 3.3 or older, in the xhci\_hcd kernel module there is an important restriction on queueing requests. The xhci\_hcd module is the eXtensible Host Controller Interface Host Controller Driver. It’s the driver for the USB 3.0 ports on your Linux PC. Note that all USB 3.0 host controllers on Linux use the same kernel module, and the kernel module is part of the Linux kernel.

In the xhci\_hcd module, in older versions of the kernels, there is a limit to the number of USB requests that can be in queued at once. On Linux, USB requests are called URBS \(USB request block\) and have a maximum transfer size of 116,384 bytes. Since we’re trying to keep 83 MB of buffers in the queue, that’s a TON of URBs. That’s over 5,000 URBs.

In these older kernels, we’ve discovered experimentally that the limit is about 61 URBs. There is even a neat comment in the kernel module source code that says “FIXME allocate more room.”

[http://lxr.free-electrons.com/source/drivers/usb/host/xhci-ring.c?v=3.3](http://lxr.free-electrons.com/source/drivers/usb/host/xhci-ring.c?v=3.3)

In more recent kernels, the kernel module then allocates more room for URBs and continues as normal.

Keep in mind that this issue only affects USB 3.0 ports. USB 2.0 ports use a different kernel module entirely.

So to solve this, we simply reduce the total number of queued URBs from 5,000 to 62. You might ask, is this bad? And if not, why do we allocate 5,000 URBs?

Originally we chose to keep one-third of a second of transferred queued at all times for two reasons.

First, our original product, Logic, had extremely limited device side buffer space, making it more vulnerable to USB transfer latency issues than the newer products.

Second, we had no idea how reliable we would be at keeping URBs in queue at all times. We only have a few PCs for testing and a handful of USB host controllers. We had no way to predict the performance variation out in the field, so we chose to overcompensate. It turns out we super-overcompensated.

The solution for older Linux kernels with USB 3.0 ports:

Set the maximum transfer size to about 60 URBs worth, 16_1024_60 bytes = 983040 bytes.

To do so, open the preferences dialog from the main options menu and navigate to the developer tab. Check the box to limit the max transfer size and then enter the new maximum transfer size in bytes.

![](https://trello-attachments.s3.amazonaws.com/57215db1061255edf9ba9040/419x547/43b217a308a7ad1926a29e686a24562d/set_transfer_size.PNG)

Then perform a series of test captures at different sample rates, digital only. Please test a good spread between 1 channel at 1 MSPS to all 4 channels at 500 MSPS. Make sure to include testing 1 channel at 500 MSPS, then 2 channels, and then 3 channels.

While performing these tests you may want to run the software from the command line so you can observe the output.

**Windows and OSX Users**

You may be directed to this page to test different transfer sizes. This is most likely to debug potentially a host controller specific issue or an issue where higher-speed captures are failing for unusual reasons. \(Normally, high-speed captures will fail due to USB latency issues, which are not related to the maximum transfer size.\)

If you were instructed to set the transfer size to a specific number, you can do so by opening the preferences dialog from the main options menu and navigating to the developer tab. Then check the box to limit the max transfer size and enter the specified size into the text box.

