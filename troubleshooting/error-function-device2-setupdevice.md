# Error Function: Device2::SetupDevice

This error only affects Logic software versions 1.2.29 and older and has since been fixed in 1.2.40. Specifically, the logic software will run fine while a logic analyzer is not connected, but the moment a logic analyzer is connected, the Logic software will crash.

To solve this issue, we recommend using the following version of the software.

* [Logic 2](https://www.saleae.com/downloads/)
* Logic 1.2.40 (Download link provided below)

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

In case you have any trouble with the solutions above, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and we can help towards a resolution.

### Background Information

When observing your crash logs files, you may notice the header line `Function: Device2::SetupDevice, Line: 118` is present, as shown below.

```
Logic Assert Information
Version: 1.2.29
System: Windows 6.2
64-Bit Operating System
File: C:\Users\Username\Software\Logic\Source\Device2.cpp
Function: Device2::SetupDevice, Line: 118
```

The location of the generated crash logs can be found in the support article below.

{% content-ref url="sharing-crash-logs.md" %}
[sharing-crash-logs.md](sharing-crash-logs.md)
{% endcontent-ref %}

We discovered this to be a bug with our logic analyzers in combination with the following processors, OSes, and PC models.

* Intel N4200
* Intel N5000
* Intel Celeron
* Intel® Core i5-1035G4 (specifically found in Surface Pro 7)
* MacOS Mojave
* Microsoft Surface Book
* Microsoft Surface Pro
