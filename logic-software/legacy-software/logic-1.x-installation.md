# Logic 1.x Installation

## Logic 1.x Software

If you plan on using the older Logic 1.x software, you can follow the instructions below.

![](../../.gitbook/assets/logic1.png)

The older Logic 1.x software can be downloaded below. Version 1.2.29 is the last version of Logic 1.x.

{% content-ref url="older-software-releases.md" %}
[older-software-releases.md](older-software-releases.md)
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

{% content-ref url="../../troubleshooting/linux-permission-requirements-for-logic-software.md" %}
[linux-permission-requirements-for-logic-software.md](../../troubleshooting/linux-permission-requirements-for-logic-software.md)
{% endcontent-ref %}

#### Extracting the AppImage (Linux)

You can extract the AppImage with `./Logic-1.2.40-Linux.AppImage --appimage-extract`, which will dump the contents to a new directory called squashfs. You can then run the Logic binary directly from there.

On Linux, please keep in mind that we no longer store the settings.xml file, calibration downloads, and other temporary files in the same directory structure as the application. Those are now stored in standard directories such as the following:

`~/.config/Logic`

or

`~/.local/share/Logic`

### **Installing for Linux – Driver**

Before using the software with Logic hardware, you'll need to give the application permission to access the device (otherwise you'll have to launch the application with sudo). To do this, unplug any attached Logic device(s). From the command line, navigate to the _Driver_ folder and run the script _installdriver.sh_.
