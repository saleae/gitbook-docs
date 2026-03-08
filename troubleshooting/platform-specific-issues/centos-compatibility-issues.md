# CentOS Compatibility Issues

### CentOS 7

First off, we want to apologize for any trouble you have with running our software on CentOS. Starting with CentOS 7, we've received reports of compatibility issues with our products and software. Our latest Logic 2 software is built using Electron, which is built on Ubuntu. More information on Electron's compatibility with Linux distributions can be found on their website below:

[https://www.electronjs.org/docs/tutorial/support](https://www.electronjs.org/docs/tutorial/support)

In addition, we don't have the resources to significantly expand the operating systems we officially support. Please see the list of our officially supported operating systems below.

{% content-ref url="../../product/logic-software/supported-operating-systems.md" %}
[supported-operating-systems.md](../../product/logic-software/supported-operating-systems.md)
{% endcontent-ref %}

To help us track interest in CentOS support, we would appreciate it if you add your votes and comments here:\
[https://ideas.saleae.com/b/feature-requests/support-redhat-7-and-or-centos-7-linux](https://ideas.saleae.com/b/feature-requests/support-redhat-7-and-or-centos-7-linux)

### CentOS 6 (Linux glibc Support)

Our older Logic 1.x software for Linux has some dependencies that are not present on some Linux releases. To accommodate these Linux releases, we provide a compatibility release that includes the missing dependencies. We’ve also modified the included version of our application to link against these libraries instead of the libraries installed on your system. The **compatibility release** download links are included with the main download page below for our older Logic 1.x software.

{% content-ref url="../../product/logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../../product/logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

We have tested this release here on Ubuntu 10.04 32-bit and 64-bit, as well as CentOS 6.6 64-bit. We’ve also heard reports from customers that this release works on Debian as well. This solution was based on the instructions found [here](http://forums.debian.net/viewtopic.php?p=546372#p546372).

### Issues with v1.2.0+

The 1.2.0+ releases have an unknown issue that makes the application unresponsive. That follows a large QT update, and we haven't been able to fix the issue. The 1.1.34 compatibility release did work properly on CentOS 6 and can be found with the rest of the older releases below.
