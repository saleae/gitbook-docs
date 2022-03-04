# Error Function: Device2::SetupDevice

This error only affects the older Logic 1.x software. Specifically, the logic software will run fine while a logic analyzer is not connected, but the moment a logic analyzer is connected, the Logic software will crash.

### Troubleshooting Steps

1. Please open the crash log file that pertains to the crashes you are experiencing and take a look at the header of that crash log file (please refer below for the location of the crash log files).&#x20;
2. Check to see if the line `Function: Device2::SetupDevice, Line: 118` is present, as shown below.

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

### Known Solutions

Please try the following versions of the software to obtain the fix:

* [Logic v2.x](https://ideas.saleae.com/f/changelog/)
* The below versions will soon be obsolete, but still contains the fix (for Logic 8, please use Logic v2.x above as the below versions may have compatibility issues).
  * Windows: [Logic-1.2.35](https://downloads.saleae.com/betas/1.2.35/Logic-1.2.35-win64.zip)
  * MacOS: [Logic-1.2.33](https://downloads.saleae.com/betas/1.2.33/Logic-1.2.33-MacOS.dmg)

In case you have any trouble with the solutions above, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and we can help towards a resolution.

### Background Information

We discovered this to be a bug with our logic analyzers in combination with the following processors, OSes, and PC models.

* Intel N4200
* Intel N5000
* Intel Celeron
* Intel® Core i5-1035G4 (specifically found in Surface Pro 7)
* MacOS Mojave
* Microsoft Surface Book
* Microsoft Surface Pro
