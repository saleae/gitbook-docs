# Installation

Before installing the software, please review the supported operating systems in the link below.

{% content-ref url="supported-operating-systems.md" %}
[supported-operating-systems.md](supported-operating-systems.md)
{% endcontent-ref %}

The software is available free of charge, and can be installed on as many machines as you like. The latest release of the Logic 2 software can be downloaded [here](https://www.saleae.com/downloads/)!

### **Ubuntu Instructions**

The Logic 2 software is provided in an AppImage format, which contains all the files needed for the software to run. In Linux, you may need to allow executing the file as a program. To do this:

1. Right-click the AppImage file and click Properties
2. Check the box that says "Allow executing file as program"

![Enabling the AppImage file to be executable](<../.gitbook/assets/Screen Shot 2021-01-25 at 9.12.32 PM.png>)

#### Extracting the AppImage

You can extract the AppImage with `./Logic-2.x.xx-master.AppImage --appimage-extract`, which will dump the contents to a new directory called squashfs. You can then run the Logic binary directly from there.

### MacOS Instructions

First, double-click the Logic 2 .zip file available on our [download page](https://www.saleae.com/downloads/). This will extract the Logic 2 application file. From here, you can double click the Logic 2 app to run it.

![Logic 2 app file extracted from .zip](<../.gitbook/assets/Screen Shot 2021-08-06 at 6.22.46 PM.png>)

### Windows Instructions

Simply download and run the installer available on our [download page](https://www.saleae.com/downloads/). We install a driver for the Logic hardware as part of the installation process, so you will be prompted to trust software from Saleae.

### Install Errors

![Logic 2 Installation Error](<../.gitbook/assets/image (10).png>)

In case you run into any installation issues, please refer to the support article below.

{% content-ref url="../troubleshooting/will-not-install.md" %}
[will-not-install.md](../troubleshooting/will-not-install.md)
{% endcontent-ref %}



## Logic 1.x Software

If you plan on using the older Logic 1.x software, you can follow the instructions below.

![](<../.gitbook/assets/Screen Shot 2020-09-03 at 7.00.12 PM.png>)

The older Logic 1.x software can be downloaded below. Version 1.2.29 is the last version of Logic 1.x.

{% content-ref url="legacy-software/older-software-releases.md" %}
[older-software-releases.md](legacy-software/older-software-releases.md)
{% endcontent-ref %}

### **Installing for Windows**

Simply download and run the installer. We install a driver for the Logic hardware as part of the installation process, so you will be prompted to trust software from Saleae.

### **If the Installer fails with an Error on Windows**

You can try running the standalone version of the software, which does not need to be installed. Simply extract it and run Logic.exe. Since the installer normally handles driver installation, you may need to manually install the driver if you use the standalone version. The driver files are included with the standalone download. The standalone version can be downloaded from the Logic 1.x Download link provided above.

### **Installing for Mac**

Simply download, double-click, and drag the Logic software into the Application folder. It is the same as other Mac software you have installed in the past.

![](https://trello-attachments.s3.amazonaws.com/57215c9156830ea18c233b08/598x252/840af37d70fab6d86f4fff3db5136566/osx\_install.png)

### **Installing for Linux**

Download the zip file and extract it. The software will run from this folder. You can leave this folder on your desktop or move it anywhere that has write permissions. Launch the Logic software by opening the folder and double-clicking the Logic executable. You may want to make a shortcut to this executable for more convenient access.

In addition, The Logic 1.2.18 (and prior) software on Linux requires write permissions to several directories in order to run. More information on this below.

{% content-ref url="../troubleshooting/linux-permission-requirements-for-logic-software.md" %}
[linux-permission-requirements-for-logic-software.md](../troubleshooting/linux-permission-requirements-for-logic-software.md)
{% endcontent-ref %}

### **Installing for Linux – Driver**

Before using the software with Logic hardware, you'll need to give the application permission to access the device (otherwise you'll have to launch the application with sudo). To do this, unplug any attached Logic device(s). From the command line, navigate to the _Driver_ folder and run the script _installdriver.sh_.
