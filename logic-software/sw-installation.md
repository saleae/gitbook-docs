# Installation

Before installing the software, please review the supported operating systems in the link below.

{% content-ref url="supported-operating-systems.md" %}
[supported-operating-systems.md](supported-operating-systems.md)
{% endcontent-ref %}

The software is available free of charge, and can be installed on as many machines as you like. The latest release of the Logic 2 software can be downloaded [here](https://www.saleae.com/downloads/)!

## **Ubuntu Instructions**

The Logic 2 software is provided in an AppImage format, which contains all the files needed for the software to run. In Linux, you may need to allow executing the file as a program. To do this:

1\. Right-click the AppImage file and click Properties\
2\. Check the box that says "Allow executing file as program" as shown in the image below.

![Enabling the AppImage file to be executable](<../.gitbook/assets/Screen Shot 2021-01-25 at 9.12.32 PM.png>)

3\. Alternatively, you can run the following command to allow exectuing the file as a program.

`chmod +x Logic-2.x.xx-master.AppImage`

4\. Once the file is allowed to execute as a program, simply double-click the AppImage file to launch the software, or run it from the command line.

`./Logic-2.x.xx-master.AppImage`

### Issues with Running the AppImage File

#### Workaround Using `--no-sandbox` Argument

Starting Ubuntu 24.04, you may need to run our app with the `--no-sandbox` argument like so. Otherwise, the app may fail to launch.

`./Logic-2.x.xx-master.AppImage --no-sandbox`

In other error cases (not common), you can attempt to extract the Logic binary from the AppImage file with the following command.

`./Logic-2.x.xx-master.AppImage --appimage-extract`

This will dump the contents to a new directory called squashfs. You can then try to run the Logic binary directly from there.

#### Workaround via AppArmor

Starting in Ubuntu 24.04, many apps now need an AppArmor profile to run properly. As such, an AppArmor profile may need to be created manually for our software. This workaround was documented in the [forum thread here](https://discuss.saleae.com/t/linux-version-does-not-launch-on-just-released-ubuntu-24-04-lts/2866/4). In addition, our instructions can be found below.

1. `sudo apt install libfuse2`
2. /etc/apparmor.d$ `sudo touch home.ubuntu.applications.logic`
3.  Add the following text to the file and replace "username" with your username

    ```
    abi <abi/4.0>,
    include <tunables/global>
    profile logic /home/username/Applications/Logic-2* flags=(unconfined) {
      userns,
      include if exists <local/logic>
    }
    ```
4. /etc/apparmor.d$ `sudo cat home.ubuntu.applications.logic`&#x20;
   1. Note: This is to confirm the contents of the file
5. `sudo apparmor_parser /etc/apparmor.d/home.ubuntu.applications.logic`&#x20;
   1. Note: This is to add the new file as an AppArmor profile
6. `/home/ubuntu/Applications/Logic-x.x.xx-linux-x64.AppImage` &#x20;
   1. Note: This will launch the software
   2. Replace `x.x.xx` with your Logic software version

## MacOS Instructions

First, double-click the Logic 2 .zip file available on our [download page](https://www.saleae.com/downloads/). This will extract the Logic 2 application file. From here, you can double click the Logic2 app to run it.

![Logic 2 app file extracted from .zip](<../.gitbook/assets/Screen Shot 2021-08-06 at 6.22.46 PM.png>)

Alternatively, you can also drag the Logic2 app file into your Applications folder in case you would like to have the app appear in Launchpad.

## Windows Instructions

Simply download and run the installer available on our [download page](https://www.saleae.com/downloads/). We install a driver for the Logic hardware as part of the installation process, so you will be prompted to trust software from Saleae.

### Windows Install Errors

![Logic 2 Installation Error](<../.gitbook/assets/image (10).png>)

In case you run into any installation issues, please refer to the support article below.

{% content-ref url="../troubleshooting/will-not-install.md" %}
[will-not-install.md](../troubleshooting/will-not-install.md)
{% endcontent-ref %}



