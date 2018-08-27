# Missing Files: api-ms-win-crt-runtime-l1-1-0.dll or msvcp140.dll

## Missing Files: api-ms-win-crt-runtime-l1-1-0.dll or msvcp140.dll

Versions of the Saleae Logic Windows software starting with 1.2.11 require the Microsoft Visual Studio 2015 runtime to be installed in order to work. This is installed automatically when the software is installed. If you are using the standalone version of the software on Windows, it needs to be installed manually.

Details for the standalone installation can be found here:

{% page-ref page="../faq/technical-faq/standalone-software-info.md" %}

If you see either of the below errors, it is possible that the runtime is not installed properly.

* "The program can't start because api-ms-win-crt-runtime-l1-1-0.dll is missing from your computer."
* "The program can’t start because vcruntime140.dll is missing from your computer."

**Troubleshooting Steps**

1. Uninstall and re-install the Logic software.
2. Manually install the Microsoft Visual Studio 2015 runtime, which you can download here:

   [https://www.microsoft.com/en-us/download/details.aspx?id=48145](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

   Be sure to select the x64 version if you are using a 64-bit version of Windows.

   After you have installed the runtime, try restarting the computer and running Logic again.

3. If the above steps don't solve the issue, please try installing and running version 1.2.10 of our software. You can find it below.

{% page-ref page="../logic-software/legacy-software/older-software-releases.md" %}

**Contacting Support for Additional Help**

If the software still does not launch after trying the troubleshooting steps, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) with the following information:

1. The version of Windows you are using and if it is 32-bit or 64-bit.
2. A screenshot of the error message you are seeing
3. A list of the Microsoft runtimes already installed on your system \(instructions below\)
4. Let us know if the computer is connected to the Internet and updated regularly or if Microsoft updates either can’t be installed or haven’t been installed for a long time. If updates are available, we recommend you install them.

**Instructions for Listing All Installed Microsoft Runtimes**

1. Open “Programs and Features” from the control panel or by searching for it on the Start menu.
2. Scroll down to find one or more items labeled “Microsoft Visual C++ 20XX Redistributable.” Take a screenshot of all the items listed with this name and send it to support.

Example:

![all msvc versions installed](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5a7908b0d5066be3af960718/e679644cb7b9edf8d23253829f167af8/all_msvcs.png)

