# Installation Errors

### The Logic Setup Wizard ended prematurely

When installing the Logic 2 software, you may come across the following installation error message.

![Logic 2 Installer Error](<../.gitbook/assets/image (11).png>)

In case you run into any installation issues like shown above, please try installing the software with the following command line argument to generate a log file (replacing the "x"s with the particular version you are installing).&#x20;

For example, if your installer is located inside of your Downloads folder, you can run the following commands in Command Prompt.

```
cd C:\Users\Username\Downloads
"Logic Setup 2.x.xx-master.exe" /L*V installog.txt
```

Afterwards, [contact us](https://contact.saleae.com/hc/en-us/requests/new) and attach your `installog.txt` file (it will be generated in the same location as your installer) and we can take a look at what could be causing the install error.

### Windows Driver Signature Validation Issue

When reviewing user submitted installog.txt files, a common error we see is the following:

`ERROR: InstallDriverPackages failed with error 0xE0000242`

This is typically solved by performing a Windows Update.

### Known Issues with Windows 11 Insider Preview Builds

Installation issues on Windows 11 are typically caused when you are running on an Insider Preview build of Windows 11. We're currently tracking issue reports of this in the [bug report here](https://ideas.saleae.com/b/feature-requests/issues-on-windows-11/).

Based on user reports, we believe there may be issues with Windows 11 Insider Preview buils that prevent our driver's signature from being validated, similar to the Windows issue we share above. We haven't figured out why this happens exactly, but the following workarounds might solve this for you.

#### Solutions

* Opting out of the Insider Preview build and reverting back to a normal, stable build of Windows 11 seems to have solved this issue for most users. Microsoft has provided instructions on how to leave their Insider program [here](https://insider.windows.com/en-us/leave-program). As of the writing on this support article section, it doesn't look like there is an immediate method for unenrolling your PC from an Insider Preview build besides completing a clean installation of Windows.
* Another user seems to have solved this issue by starting Windows with the option to load unsigned drivers. You can refer to their [forum post here](https://discuss.saleae.com/t/logic-2-3-37-failed-to-install-on-windows-11/1191/12).

### Reaching out to your IT Deparment

For PCs managed by an IT deparment, either through a corporate network or corporate security plan, you may need to reach out to them for further assistance. We've discovered in the past that some installation issues had been solved by modifying an IT policy, particularly ones that affect what root certificates are trusted on the PC.

We would be happy to chat with them directly as well! In this case, feel free to have them [contact us](https://contact.saleae.com/hc/en-us/requests/new).&#x20;

## Logic 1.x Software

If you plan on using the older Logic 1.x software, the following information applies.

Below is a list of all known reasons and corresponding solutions or next steps that can cause this particular issue. Please check each one, skipping any items that are not relevant (such as issues specific to an operating system you are not using).

For each item, first perform the test. If the test result is positive (the test condition was met), then attempt the corrective action.

### **Old Software**

* Test: Make sure the version of Logic you have downloaded and installed is the [latest version](https://www.saleae.com/downloads).
* Corrective Action: Download the latest version for your operating system.

### **Proper OS Used**

* Test: Are you using an unsupported operating system?
* Corrective Action: Use a supported operating system.

{% content-ref url="../logic-software/supported-operating-systems.md" %}
[supported-operating-systems.md](../logic-software/supported-operating-systems.md)
{% endcontent-ref %}

### **Wrong Installer Downloaded**

* Test: Verify that you downloaded the correct installer for your operating system. Note that on Linux, you must download the correct variant (32 bit or 64 bit).
* Corrective Action: Download the correct version.

### **Anti-Virus False Positive**

* Test: Does your anti-virus detect the logic software or installer as a virus and prevent you from running it?
*   Corrective Action: First, verify that this is actually a false positive and not an actual issue. Make sure you downloaded the Logic software directly from the [saleae website](https://www.saleae.com/downloads).&#x20;

    &#x20; You can also test the download against other anti-virus programs using the online service [Virus Total](https://www.virustotal.com/).

    &#x20; If this is just a false positive, you can either manually ignore the file if your anti-virus allows it, or you can disable your anti-virus.&#x20;

    &#x20; We typically see false positives with AVG. You can find the [1.2.2 virus total results here](https://www.virustotal.com/en/file/9b9fc726f45a206a52aef9695d309bc0ee7ce583e4c06577f0b4875fe81207ee/analysis/1435262948/).

### **Logic Software Installer Fails with Error on Windows**

* Test: Attempt to install the Logic software using the downloaded installer for your platform.
*   Corrective Action: Try using the "standalone" version of the software. The download link can be found below the normal installer downloads.

    &#x20; The "standalone" version of the software does not need to be installed. Simply extract it and run Logic.exe.

    &#x20; Please note that the installer normally handles driver installation. You may need to manually install the driver if you use the standalone version. The driver files are included with the standalone download.

    &#x20; You can find all the download links for the latest beta, including the standalone releases below.

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

### **The Saleae Drivers Are Preventing the Software from Installing**

* Test: Attempt to install the Logic software. If the installation fails with an error message related to the driver installation, that indicates a driver-related problem.
* Corrective Action: Download the standalone version of the software as described above. Then attempt a manual driver install using the new hardware/update driver wizard.
* If the same error persists during the manual driver install, please check the driver install help found below.

{% content-ref url="../logic-software/driver-install.md" %}
[driver-install.md](../logic-software/driver-install.md)
{% endcontent-ref %}

### **The Software Will Not Launch (All Platforms)**

* Test: When trying to run the software, nothing happens. The software does not appear. No error message is displayed.
* Corrective Action: Try deleting the settings file called settings.xml, which may have become corrupt.

{% hint style="info" %}
Before you can find and delete settings.xml...

* On Windows - Showing hidden files and folders should be enabled. [Instructions Here](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files)
* On OSX - Showing the Library folder should be enabled. [Instructions Here](https://discussions.apple.com/thread/8137224?answerId=8137224021#8137224021)
{% endhint %}

*   It can be located here:\
    On Vista/7/8/10:

    > C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\settings.xml

    On XP:

    > C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\settings.xml

    On OSX:

    > /Users/YourUserName/Library/Preferences/Saleae/settings.xml

    On Linux:

    > Inside the folder with the Logic executable in the Settings folder.
