# Supported Operating Systems

## Logic 2 Software

[**Logic 2 Software Download**](https://ideas.saleae.com/f/changelog/)\*\*\*\*

* Windows 8 & 10 \(64 bit\)
* MacOS 10.14+ 
* Ubuntu 16.04+ LTS

Please note that 32 bit operating systems are not supported by Logic 2.x. For 32 bit support, please refer to Logic 1.x below.



## Logic Software 1.x

{% page-ref page="latest-beta-release.md" %}

### **Microsoft Windows**

* Windows XP \(32 bit\)
  * Service Pack 3 required
* Windows Vista \(32/64 bit\)
* Windows 7 \(32/64 bit\)
  * 64 bit software requires Service Pack 1
* Windows 8 & 8.1 \(32/64 bit\)
* Windows 10 \(32/64 bit\)

Windows 2008 server \(and newer\) is not officially supported or tested but may work.

Older Windows releases do not have support for the Microsoft WinUSB driver and cannot work with our products.

Windows XP 64-bit is also not supported.

**Windows 10 Insider Program**

For several months, we have received reports that all recent versions of the Logic software failed to launch on Windows 10 insider builds. However, we have recently received a report that this issue is no longer present in the latest insider build. If you experience problems running the Logic software on the latest insider build, please contact support. Saleae does not officially support pre-release versions of Windows, but we will still provide support when possible.

### **OSX**

OS X 10.8+ is supported.

### **Ubuntu Linux**

We build and test on Ubuntu 14.04, and we will periodically update our build systems.

The library dependencies are primarily determined by the version of GCC used here.

We officially support Ubuntu 12.04.2 and newer versions of Ubuntu, and we officially support the default window manager provided with Ubuntu.

Unfortunately, we are unable to offer official support for other Linux distros, versions, or window managers.

If you encounter an issue with the Linux software on a different distro or window manager, please still report it to support. Unfortunately, though, we can not commit to investigating issues specific to distros or window managers we do not support. There are simply too many variants with too many nuances for us to realistically support them all.

Glibc &gt;= 2.15 is required. We provide a compatibility release that includes glibc and several other libraries. You can find it in the betas section. This compatibility release should work on most Linux installs that use older versions of glibc.

For use with any of our products \(old or new, USB 2.0 or USB 3.0\), when connected to a USB 3.0 port, even if only to operate at USB 2.0 speeds, we recommend kernel 3.4 or newer. That is because USB 3.0 ports use the xHCI kernel module, which has an issue with queueing large transfers in order kernels. That does not affect eHCI host controllers \(USB 2.0 ports\); however, the eHCI kernel module cannot be used with a USB 3.0 port, even if a USB 2.0 device is attached. We are working on a workaround, which will be included in the next release. We will publish an article with instructions to use it once it's released.

