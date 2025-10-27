# System Requirements

Operating system requirements can be found below:

{% content-ref url="../logic-software/supported-operating-systems.md" %}
[supported-operating-systems.md](../logic-software/supported-operating-systems.md)
{% endcontent-ref %}

The Saleae logic analyzers do not have specific hardware requirements. The software is able to run on low-end equipment. However, the PC's performance and memory will limit the maximum recording length. Details about that can be found below:

{% content-ref url="../../getting-help/troubleshooting/technical-faq/how-long-can-i-record-data.md" %}
[how-long-can-i-record-data.md](../../getting-help/troubleshooting/technical-faq/how-long-can-i-record-data.md)
{% endcontent-ref %}

All products require at least USB 2.0 to operate. The Saleae Logic Pro 8 and Saleae Logic Pro 16 both are USB 3.0 devices and require USB 3.0 to operate at their advertised speeds. Both devices can operate over USB 2.0 with reduced performance. Logic Pro 16 requires more current than a USB 2.0 port can provide, so it can only be used with 8 inputs when connected over USB 2.0 without additional power.

The software also requires SSE2 support. SSE2 is a feature of the CPU and has been included in almost all processors since 2001. However, that prevents the software from running on the following CPUs:

* Pentium 3 or older
* AMD Athlon XP or older

**Recommended Hardware**

For most applications, high-performance PC hardware is not required. However, long duration analog and digital captures can be very memory-intensive. For applications where analog data need to be recorded for more than 30 seconds or for high-speed digital captures, we recommend as much RAM as possible.

The software will estimate the memory usage on the device settings popover.

We do not recommend taking captures that will exceed the installed RAM. However, the OS may be able to cache in real time for lower-speed captures. For best results, a fast SSD and lots of free disk space are recommended.
