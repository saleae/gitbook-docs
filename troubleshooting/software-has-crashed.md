# The Logic Software Crashes

## Logic 1.x

The following information pertains to the older Logic 1.x software.

First, please help us by uploading the crash reports! This article covers common solutions and how you can contact support for additional help.

### Does the Software Fail to Start?

If the software simply fails to start, please follow the solutions listed in the article below.

{% content-ref url="will-not-install.md" %}
[will-not-install.md](will-not-install.md)
{% endcontent-ref %}

{% content-ref url="linux-shared-memory-crash.md" %}
[linux-shared-memory-crash.md](linux-shared-memory-crash.md)
{% endcontent-ref %}

Otherwise, if the software can start properly, but crashes during operation, this article can offer some potential solutions below.

### **Common Solutions**

Please try the following solutions first before contacting support.

* Test the [latest version of the Saleae software](https://www.saleae.com/downloads)
* Remove all active protocol analyzers
  * This solution may help when the software crashes immediately after the Start button is clicked, and might indicate a buggy protocol analyzer.
* Remove unused channels
* Disable 'Decoded Protocol Search' (Options -> Preferences -> Capture Tab)
* Run the Logic software as administrator
* Delete the settings.xml file. It may be corrupt. See instructions below.

{% hint style="info" %}
Before you can find and delete settings.xml, make the file visible first.

* On Windows - Showing hidden files and folders should be enabled. [Instructions Here](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files)
* On OSX - Showing the Library folder should be enabled. [Instructions Here](https://discussions.apple.com/thread/8137224?answerId=8137224021#8137224021)
{% endhint %}

The settings.xml file can be located below.

```
On Vista/7/8/10:
    C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\settings.xml
On XP:
    C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\settings.xml
On OSX:
    /Users/YourUserName/Library/Preferences/Saleae/settings.xml
On Linux:
    Inside the folder with the Logic executable in the Settings folder.
```

### **Contacting Support**

When [contacting support](https://contact.saleae.com/hc/en-us/requests/new), please include the following information.

* Results of the tests under 'Common Solutions' above
* Saleae Logic software version (found in the software title bar)
*   The operating system used, the version of OS, and if it is 32-bit or 64-bit.

    &#x20; On Linux, also include the kernel version "uname -r" and the name of the window manager if it's not stock.
* Which product(s) you were using when the software crashed
*   The USB host controllers installed in your computer

    &#x20; On Windows, open Device Manager and expand the section "Universal Serial Bus Controllers." Send a screenshot of the contained items or a listing of all host controllers found in the list.

    &#x20; On Linux, pipe the output of "lspci" to a file.

    &#x20; This can be skipped on OSX, which exclusively uses Intel series host controllers.
* If you are unable to capture with a device, please test the device on another computer.
* Indicate if this is a new problem or if you have always experienced this problem when using the Logic software.
*   Describe what you were doing when the crash/bug occurred.

    &#x20; Did it occur at the beginning / during / after a capture?

    &#x20; Is the crash/bug repeatable? If so, what are the steps leading up to the crash?
* Include a zipped copy of the error reports on your computer. They can be found below.

```
On Vista 7/8/10:
    C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\Errors\
On XP:
    C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\Errors\
On OSX: 
    /Users/YourUserName/Library/Preferences/Saleae/Errors/
On Linux:
    Inside the folder with the Logic executable in the Errors folder.
```

* Include any other relevant information not listed above that might help us uncover the bug.
* We may ask you to provide the console output from the application. In this case, here are the steps in the link below.

{% content-ref url="console-output.md" %}
[console-output.md](console-output.md)
{% endcontent-ref %}



