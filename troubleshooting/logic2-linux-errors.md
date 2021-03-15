# Errors when Running Logic 2 on Linux

Upon launching the Logic 2 software on Linux, you may experience the following:

* A blank canvas with an error message that displays `Error Connecting to Socket`
* An immediate software crash

{% hint style="info" %}
Note: You might see the following message when running Logic 2 from the terminal. This is normal and is not associated with the issues noted above.

`(electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false". It will change to be "true" in Electron 9.`
{% endhint %}

### Solutions for Linux

#### 1. Install linsnl

If you are attempting to run our Logic 2 software on Linux, the issue we have seen is as follows:

`libnsl.so.1 => not found`

It seems that some Linux distributions may have removed libnsl, and that reinstalling it solves this issue. The command to install it will depend on the package repository for your specific OS. For example, for the yum package manager:

`yum install libnsl`

In case the solution above doesn't help, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) as we may need to take a look at the output of the following commands to debug this further.

* `./Logic-2.x.xx-master.AppImage --appimage-extract` **\(replace "x.xx" with the specific version of Logic 2\)**
* `cd squashfs-root/resources/linux` 
* `ldd libgraph_server_shared.so` 
* `ldd -v libgraph_server_shared.so`

#### 2. Try running a previous version of Logic 2 first

Starting version v2.3.20, you might experience an immediate software crash upon opening the software. We're working on a fix for this bug. In the meantime, you will need to download an older version of the Logic 2 software first \([v2.3.19](https://ideas.saleae.com/f/changelog/2319/) for example\), then install v2.3.20 afterwards.

### Solution for Windows 10

For Windows, manually installing the Microsoft Visual Studio 2019 runtime seemed to help, which you can download below:

* [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

Be sure to select the x64 version if you are using a 64-bit version of Windows. After you have installed the runtime, try restarting the computer and running the Logic 2 software again.





