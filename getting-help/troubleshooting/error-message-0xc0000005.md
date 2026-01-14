# Error Message: The application was unable to start correctly (0xc0000005)

This article addresses a specific issue that affects a small number of Windows users. Specifically, the software will crash on launch, generating an "APPCRASH" error message. On launch, a Windows error report window will appear with the heading "Saleae Logic Software has stopped working." This window has an option to expand problem details. There, the "Problem Event Name" will be set to "APPCRASH," and the "Exception Code" will likely be 0xc0000005.

The problem is most likely caused by a compatibility issue with another installed program, possibly one of the following:

* Anti-virus software
* Disk encryption software
* Debugging tools
* Custom IT policy settings that affect or attach to running programs
* Any application that attaches or modifies other running programs.

Specifically, our software will crash on launch with APPCRASH if a debugger is attached, if the binary has been modified since its original compilation, or if its memory image is modified by another process after starting to launch.

This affects all releases of our software after and including version 1.1.21. Releases up to and including 1.1.20 are not affected.

Version 1.1.20 is very old and does not support the current hardware products (Logic 4, Logic 8, Logic Pro 8, Logic Pro 16). Older versions of our software can be downloaded below.

{% content-ref url="../../product/logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../../product/logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

**Steps to Verify That a Compatability Issue Is Preventing the Software to Launch**

1. Download and run the 1.1.20 standalone version of the software from the above download link and test it. Check to see if the program runs or crashes on launch. (Note, if it runs, it will not detect any of the current Saleae products as connected.)
2. Download and run the 1.1.34 standalone version of the software from the above download link and test it. Check if it runs or not. This version does support the current products.

If the 1.1.20 software runs but the 1.1.34 software does not, that indicates that the problem is caused by some sort of application incompatibility.

**Steps to Fix the Problem**

1. Try disabling anti-virus programs and then relaunch the software.
2. If you are using disk encryption software, see if there is a way to exclude the Saleae Logic software folder from encryption. (Note: Microsoft's integrated disk encryption is not likely to cause this problem; only 3rd-party tools have been known to cause these issues.)
3. Check for any running debuggers (visual studio, etc.) and close them. Try again.
4. Try running the software as the administrator.
5. Download the "Windows 32 bit standalone" version of the latest software here and test it. Before running Logic.exe, you will need to install the included Microsoft visual studio runtime.

{% content-ref url="/broken/pages/-LJVJwNqt3HkI7n8CFy9" %}
[Broken link](/broken/pages/-LJVJwNqt3HkI7n8CFy9)
{% endcontent-ref %}

**Contacting Support for Additional Help**

If none of the above steps are able to resolve the issue, please contact support and include the following information:

1. The version of Windows you are using (XP/Vista 7/8/10) and if it is 32-bit or 64-bit.
2. Indicate if this is a personal computer or a work computer managed by an IT department.
3. List any anti-virus or disk encryption products installed on the computer.
4. List any debugging software installed.
5.  What version(s) of the Saleae Logic software you have tested. Please test the following.

    The latest Saleae Logic software

    The 32-bit standalone version of the latest Saleae Logic software

    The standalone version of the 1.1.34 software

    The standalone version of the 1.1.20 software
6.  Any other information, such as:

    Did the software work before and recently stop working?
