# The Software Fails to Launch

Upon launching the Logic 2 software, you may experience the following:

* An immediate software crash
* A blank canvas with an error message that displays `Error Connecting to Socket`
* The terminal displays  `The display compositor is frequently crashing. Goodbye.`

You might also see the following message when running Logic 2 from the terminal. This is normal and is not associated with the issues noted above.

* `(electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false". It will change to be "true" in Electron 9.`

We've highlighted some potential causes and solutions below.

### Unsupported Graphics Cards

We've received reports of some graphics cards causing immediate crashes when launching the Logic 2 software. We're currently logging a list of graphics cards that have been reported to crash the app in the [forum post here](https://ideas.saleae.com/b/feature-requests/support-older-graphics-cards/). Based on the list of graphics cards we have gathered, it seems that graphics cards released more than 8 years ago has some issues with running our software, but we don't have conclusive evidence yet.

For now, if you feel your graphics card may be the culprit, you may try the troubleshooting steps in the support article below.

{% content-ref url="error-message-unable-to-detect-webgl.md" %}
[error-message-unable-to-detect-webgl.md](error-message-unable-to-detect-webgl.md)
{% endcontent-ref %}

### Linux Solutions

#### 1. Ensure you are running a supported version of Ubuntu

Our list of supported operating systems can be found in the link below. You'll want to ensure you are running a supported version of Ubuntu.

{% content-ref url="../../product/logic-software/supported-operating-systems.md" %}
[supported-operating-systems.md](../../product/logic-software/supported-operating-systems.md)
{% endcontent-ref %}

#### 2. Try running the latest version of Logic 2

Starting version v2.3.22, we fixed an issue with the software immediately crashing upon opening on Linux. You can download the latest version of the software [here](https://www.saleae.com/downloads/).

#### 3. Launch the app with `--no-sandbox`

When launching the software from the terminal normally, you may see the following error message.

`The display compositor is frequently crashing. Goodbye.`

If you see this error message, try launching the software with the `--no-sandbox` argument as per below.

* `./Logic --no-sandbox`

#### **4. Launch the app with `--disable-gpu` or `--in-process-gpu`**

Try each one of these command line arguments one at time. We've seen a handful of launch crashes where the Chromium GPU process repeatedly fails to start, causing the app to give up and exit. If you see a console message like "GPU process isn't usable. Goodbye.", this might fix it.

* `./Logic-2.*-master.AppImage --disable-gpu`
* `./Logic-2.*-master.AppImage --in-process-gpu`

#### 5. Install missing libraries

If you are attempting to run our Logic 2 software on Linux, take a look at the output of the following commands.

* `./Logic-2.x.xx-master.AppImage --appimage-extract` **(replace "x.xx" with the specific version of Logic 2)**
* `cd squashfs-root/resources/linux`&#x20;
* `ldd libgraph_server_shared.so`&#x20;
* `ldd -v libgraph_server_shared.so`

Open the generated output file and search for a line similar to the following:

`libnsl.so.1 => not found`

It seems that some Linux distributions may have removed libnsl, and that reinstalling it solves this issue. The command to install it will depend on the package repository for your specific OS. For example, for the yum package manager:

`yum install libnsl`

Depending on your Linux distro, other libraries may be missing which you may need to install, as a user mentioned that `libcrypt.so.1` was missing on their Linux installation.

#### 6. Avoid launching the software with root permissions

Instead, you'll want to install the udev rules file to allow the non-elevated application to work with devices. Instructions for installing the udev rules file can be found in the support article below.

{% content-ref url="../../product/logic-software/driver-install.md" %}
[driver-install.md](../../product/logic-software/driver-install.md)
{% endcontent-ref %}

We've seen GPU issues on Linux where the application will crash on launch due to the GPU process repeatedly crashing on launch.

**7. On Fedora, try installing `libxcrypt-compat`**

Although Fedora is not an operating system that we officially support, [a user on our forums](https://discuss.saleae.com/t/analyser-software-stops-with-error-connecting-to-socket/2503/5?u=timreyes) suggested that running the following command solved the "Error Connecting to Socket" error on Fedora 39.

`sudo dnf install libxcrypt-compat`

**8. FUSE issues with Logic 2 on Ubuntu 22.04**

We package the Logic 2 software using AppImage, which depends on FUSE 2.x. Ubuntu 22.04 and other recent distributions have removed FUSE 2.x by default, replacing it with FUSE 3.x, which is not compatible with AppImages. We're looking into a simple long term solution, but in the meantime, simply installing FUSE 2.x should solve the problem. For more details and distro-specific instructions, please check the AppImage FUSE install documentation linked below:

* [https://docs.appimage.org/user-guide/troubleshooting/fuse.html](https://docs.appimage.org/user-guide/troubleshooting/fuse.html)

**9. Contacting Support**

In case the solutions above don't help, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and send us the output of the commands generated from step 3 above.

### Windows 10 Solutions

For Windows 10, manually installing the [Microsoft Visual Studio 2019 runtime](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) helped some users.

Be sure to select the x64 version if you are using a 64-bit version of Windows. After you have installed the runtime, try restarting the computer and running the Logic 2 software again.

### MacOS Solutions

On MacOS, you may see the `Error Connecting to Socket` message when attempting to start the Logic 2 app while disconnected from the internet. This is unintentional, as the app was designed to be able to run while offline. [In the forum post here](https://discuss.saleae.com/t/failed-to-start-without-network/1682/6), we've found that localhost may not resolve on your machine when disconnected from the internet.

The workaround is to take a look at your `/etc/hosts` file and to check if it contains the following line. If it’s missing, you'll want to add that line back and that should solve the issue.

`127.0.0.1       localhost`
