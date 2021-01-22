# Error Connecting to Socket

Upon launching the Logic 2 software, you may be greeted with a blank canvas with an error message that displays `Error Connecting to Socket`.

We've received reports of this for some specific operating systems. This error usually means that the front-end of the application is launching just fine, but the backend \(a C++ library loaded by electron\), is not working properly.

### Solution for Linux

If you are attempting to run our Logic 2 software on Linux, the issue we have seen is as follows:

`libnsl.so.1 => not found`

It seems that some Linux distributions may have removed libnsl, and that reinstalling it solves this issue. The command to install it will depend on the package repository for your specific OS. For example, for the yum package manager:

`yum install libnsl`

### Solution for Windows 10

For Windows, manually installing the Microsoft Visual Studio 2019 runtime seemed to help, which you can download below:

* [https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

Be sure to select the x64 version if you are using a 64-bit version of Windows. After you have installed the runtime, try restarting the computer and running the Logic 2 software again.





