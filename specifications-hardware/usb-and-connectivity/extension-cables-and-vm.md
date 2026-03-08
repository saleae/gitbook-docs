# Using the Hardware with USB Extension Cables, Through Virtual Machines, or Ethernet Extenders

The Saleae Logic devices have unique USB requirements that can make them hard to use in situations more complex than a basic USB cable connecting the device to the PC.

Unfortunately, that means you might not be able to accomplish the connection topology you would like. Also, Saleae does not officially guarantee that the products will work under all or any of these less traditional connection types.

**Really Long USB Cables**

Generally, extra-long USB 2.0 cables will probably work. We haven't extensively tested this, but the few tests we have run worked out just fine. The USB 2.0 specification maximum cable length is 5 meters (16.4 ft).

The USB 3.0 spec does not limit cable length explicitly, and we suspect that the practical limiting factor might not be the cable length but the quality of the USB host card. See notes in the section for USB 3.0 extension cables about host difficulties.

We have not tested this cable yet, but we would recommend the [9 feet AmazonBasics USB 3.0 cable](http://amzn.com/B00NH13BI2).

**USB Extension Cables**

For operation over USB 2.0, this should generally work well. We recommend buying a very heavy duty USB 2.0 high-speed extension cable and make sure you are only using one extension. If possible, just buy one very long, heavy-duty USB 2.0 cable and don't bother with a separate extension.

For USB 3.0 connectivity, signal integrity plays a very important role. The USB 3.0 specification makes few claims about how far USB 3.0 can run. You may want to take a look at special "active" USB 3.0 extension cables that contain signal repeaters for this purpose. In our testing, we found that some host controllers worked better than others at running the products with a USB 3.0 extension cable. We suspect that it's not actually the host controller IC but rather the PCB layout and power supply design that really determine what will work and what won't work.

We did perform a quick test with the host controllers we had already set up for testing with Windows 8.1. Keep in mind that we're not sure if it reflects the quality of the host controller or just the PCB layout of the final vendor.

*   [Renesas from optimal shop](http://www.amazon.com/gp/product/B008IPXOWU)

    &#x20; This did not work with an extension.

    &#x20; Otherwise, it's the best choice due to good driver and cross-platform reliability.
*   [ASMedia 3.1 from ASUS](http://www.amazon.com/gp/product/B00Y7UXJJI)

    &#x20; This did work with an extension.
*   [Via from ORICO](http://www.amazon.com/gp/product/B00A20KIXW)

    &#x20; this did not work with an extension.
*   [ETRON from syba](http://www.amazon.com/gp/product/B005VAOT2E)

    &#x20; This did work with an extension.
*   [Texas Instruments from SIIG](http://www.siig.com/it-products/usb/adapters/pcie/dp-usb-3-0-4-port-pcie-i-e.html)

    &#x20; This did work with an extension.

    &#x20; It's recommended if you need to use an extension cable, second-best after Renesas.
*   [Integrated Intel 9 series host on ASRock Motherboard](http://www.newegg.com/Product/Product.aspx?Item=N82E16813157564)

    &#x20; This did work with an extension.

A test was performed with a [6.5-foot AmazonBasics USB 3.0 extension cable](http://amzn.com/B00NH134L6) and the USB 3.0 cable included with Saleae Logic Pro devices.

**Virtual Machines**

Our software is cross-platform, so you should be able to run our software on the native operating system in most cases. Because of that, we don't officially support operating the software in VM. That said, we do know that in some configurations, it can work.

We have had good success running the software in a Windows guest on a Windows host. However, in the past, we have seen data corruption issues caused by the improper clearing of USB buffers. Since we were unable to reproduce the issue on any native OS, we suspect the issue lies in the USB virtualization system.

We have had much less luck running the software in a Linux guest on a Linux host. We've managed to capture in this case a few times, but in many cases, we were unable to get the software to detect the hardware. See the section at the bottom for more information about how the software connects to the device.

**Ethernet Extensions**

We've never tested one of these products, so we're not sure what it would take, if it's even possible, to get them to work with our product. The Saleae devices have specific latency requirements. However, as long as the read requests queued from the host are properly queued on the USB connection end and there are not significant delays between the issued read requests, the device might operate properly. We suggest starting with the slowest sample rate and then test faster and faster rates. The latency sensitivity is proportional to the sample rate.

For initial connectivity issues, see the description section.

**Wireless Options**

There are no wireless solutions available for USB 2.0. The only way to record data with a Saleae device wirelessly would require an x86 battery-powered PC running a supported OS with USB 2.0 high-speed ports and a wireless network connection. Then, either remote desktop or the Saleae socket API could be used from a remote computer to capture data.

**Software/Hardware Connection Description**

Unlike most USB products, the Saleae devices do not contain their own firmware. Instead, they use a hardware boot loader to download the firmware on a connection with the PC. That guarantees that the device will always run the correct version of firmware for any given software release. It also prevents accidental bricking of the device during a firmware update.

However, that complicates the initial connection process. When the device is first attached to the PC, it appears with our USB identification VID & PID, but you may see it show up as "Westbridge," depending on the OS you are using and what drivers are installed.

When our software detects the device as connected, it will download our firmware using the built-in boot loader. Then the device resets, causing it to disconnect and reconnect to the PC as it starts loading our firmware. This is a very important step with regard to remote USB access for both virtual machines and Ethernet extensions. You need to make sure that your USB forwarding solution automatically reconnects the device back to the PC. The device VID and PID will not change, so in the case of VMWare, the device should auto-reconnect since it was already configured to share that particular device with the host PC. However, if the forwarding system does not automatically reconnect the device to the operating system, you may be able to manually reconnect it after it is disconnected. The firmware is now idle, waiting for the software to start communicating with it. There is no time-out in the desktop software for this operation.

However, the device cannot be force re-enumerated after it automatically resets, and it can't lose power. If either of those events occurs, it will go back to the boot loader, and our software will download the firmware again. It's a very annoying, endless cycle.

As stated at the top of this page, we don't officially support anything more complicated than connecting the device directly to the PC through a USB cable, but we're more than happy to help troubleshoot a connectivity problem by providing advice and suggesting ideas to test.
