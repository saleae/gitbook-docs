# Older Linux glibc Support

## Older Linux glibc Support

Our latest beta software for Linux has some dependencies that are not present on all Linux releases.

To accommodate these releases, we’re providing a compatibility release that includes the missing dependencies from a recent release of Ubuntu. We’ve also modified the included version of our application to link against these libraries instead of the libraries installed on your system.

We have tested this release here on Ubuntu 10.04 32-bit and 64-bit, as well as CentOS 6.6 64-bit. We’ve also heard reports from customers that this release works on Debian as well.

Note: The 1.1.34 compatibility release did work properly on CentOS; however, 1.2.0+ releases have an unknown issue that makes the application unresponsive. That follows a large QT update, and we haven't been able to fix the issue yet. The 1.1.34 release can be found with the rest of the older releases.

If you have any issues with this release, please let us know.

This solution was based on the instructions found here:

[http://forums.debian.net/viewtopic.php?p=546372\#p546372](http://forums.debian.net/viewtopic.php?p=546372#p546372)

I would like to thank Dmitriy for sending this our way.

We used patchelf to modify the binary to use the included copy of ld and the other standard libraries, instead of the libraries installed on the computer.

We will continue to update and test this as we release new versions of the software.

The compatibility release download links are included with the main beta download links below.

{% page-ref page="../latest-beta-release.md" %}



