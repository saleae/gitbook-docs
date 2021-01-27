# Installation

Before downloading and installing the software, please review the supported operating systems in the link below.

{% page-ref page="supported-operating-systems.md" %}

## **Logic 2 Software**

The software is available free of charge, and can be installed on as many machines as you like.

![](../.gitbook/assets/screen-shot-2020-09-03-at-6.52.16-pm%20%286%29%20%282%29%20%286%29.png)

The latest release of the Logic 2 software can be downloaded below:

* [**Logic 2 Software Download**](https://ideas.saleae.com/f/changelog/)\*\*\*\*

### **Running Logic 2 on Linux**

The Logic 2 software is provided in an AppImage format, which contains all the files needed for the software to run. In Linux, you may need to allow executing the file as a program. To do this:

1. Right-click the AppImage file and click Properties
2. Check the box that says "Allow executing file as program"

![Enabling the AppImage file to be executable](../.gitbook/assets/screen-shot-2021-01-25-at-9.12.32-pm.png)



## Logic 1.x Software

If you plan on using the older Logic 1.x software, you can follow the instructions below.

![](../.gitbook/assets/screen-shot-2020-09-03-at-7.00.12-pm%20%281%29%20%281%29%20%281%29%20%281%29.png)

The latest Saleae Logic 1.x Beta software can be downloaded below. This is the version of Logic 1.x that we recommend.

{% page-ref page="legacy-software/latest-beta-release.md" %}

### **Installing for Windows**

Simply download and run the installer. We install a driver for the Logic hardware as part of the installation process, so you will be prompted to trust software from Saleae.

### **If the Installer fails with an Error on Windows**

You can try running the standalone version of the software, which does not need to be installed. Simply extract it and run Logic.exe. Since the installer normally handles driver installation, you may need to manually install the driver if you use the standalone version. The driver files are included with the standalone download. The standalone version can be downloaded from the software release links above.

### **Installing for Mac**

Simply download, double-click, and drag the Logic software into the Application folder. It is the same as other Mac software you have installed in the past.

![](https://trello-attachments.s3.amazonaws.com/57215c9156830ea18c233b08/598x252/840af37d70fab6d86f4fff3db5136566/osx_install.png)

### **Installing for Linux**

Download the zip file and extract it. The software will run from this folder. You can leave this folder on your desktop or move it anywhere that has write permissions. Launch the Logic software by opening the folder and double-clicking the Logic executable. You may want to make a shortcut to this executable for more convenient access.

In addition, The Logic 1.2.18 \(and prior\) software on Linux requires write permissions to several directories in order to run. More information on this below.

{% page-ref page="../troubleshooting/linux-permission-requirements-for-logic-software.md" %}

### **Installing for Linux – Driver**

Before using the software with Logic hardware, you'll need to give the application permission to access the device \(otherwise you'll have to launch the application with sudo\). To do this, unplug any attached Logic device\(s\). From the command line, navigate to the _Driver_ folder and run the script _installdriver.sh_.

