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

#### 1. Try running the latest version of Logic 2

Starting version v2.3.22, we fixed an issue with the software immediately crashing upon opening on Linux. You can download the latest version of the software [here](https://www.saleae.com/downloads/).

#### 2. Launch the app with `--no-sandbox`

When launching the software from the terminal normally, you may see the following error message.

`The display compositor is frequently crashing. Goodbye.`

If you see this error message, try launching the software with the `--no-sandbox` argument as per below.

* `./Logic --no-sandbox`

#### **3. Launch the app with `--disable-gpu` or `--in-process-gpu`**

Try each one of these command line arguments one at time. We've seen a handful of launch crashes where the Chromium GPU process repeatedly fails to start, causing the app to give up and exit. If you see a console message like "GPU process isn't usable. Goodbye.", this might fix it.

* `./Logic-2.*-master.AppImage --disable-gpu`
* `./Logic-2.*-master.AppImage` --in-process-gpu

#### 4. Install libnsl

If you are attempting to run our Logic 2 software on Linux, take a look at the output of the following commands.

* `./Logic-2.x.xx-master.AppImage --appimage-extract` **(replace "x.xx" with the specific version of Logic 2)**
* `cd squashfs-root/resources/linux`&#x20;
* `ldd libgraph_server_shared.so`&#x20;
* `ldd -v libgraph_server_shared.so`

Open the generated output file and search for a line similar to the following:

`libnsl.so.1 => not found`

It seems that some Linux distributions may have removed libnsl, and that reinstalling it solves this issue. The command to install it will depend on the package repository for your specific OS. For example, for the yum package manager:

`yum install libnsl`

#### 5. Install Ubuntu 18+

Unfortunately, newer versions of our Logic 2 software (starting v2.3.33) no longer supports Ubuntu 16 (Ubuntu LTS 16 ended its support in April 2021). We have since updated our Logic 2 software to support Ubuntu 18.04.5+ (64 bit) as mentioned below. We apologize for the inconvenience this causes. Should you have any questions, feel free to [contact us](https://contact.saleae.com/hc/en-us/requests/new).

{% content-ref url="../logic-software/supported-operating-systems.md" %}
[supported-operating-systems.md](../logic-software/supported-operating-systems.md)
{% endcontent-ref %}

**5. Contacting Support**

In case the solutions above don't help, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and send us the output of the commands generated from step 3 above.

### Windows 10 Solutions

For Windows 10, manually installing the [Microsoft Visual Studio 2019 runtime](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) helped some users.

Be sure to select the x64 version if you are using a 64-bit version of Windows. After you have installed the runtime, try restarting the computer and running the Logic 2 software again.



## Logic 1.x

If you are using the older Logic 1.x software, the following troubleshooting guide applies to the most common situations.

### **When starting the software, nothing happens, or I see a Windows error message, not the Saleae software error reporter dialog below.**

![Saleae Error Reporter](https://trello-attachments.s3.amazonaws.com/566f6b55b646f22a96776611/482x136/0a4c4435f07304337d40b8ed2874da14/error\_reporter.png)

This is the normal Saleae software error uploader. If you see this, then this is not the correct support article for your issue. Please see the article below.

{% content-ref url="software-has-crashed.md" %}
[software-has-crashed.md](software-has-crashed.md)
{% endcontent-ref %}

Please check before continuing:

* The latest Saleae Logic beta software is installed.
* Windows is up to date.
* The computer has been recently restarted after the software was installed.
* The current user has administrator privileges or can launch programs as an administrator, if necessary.
  * You may need to give Windows explicit admin privileges into the `%AppData%` folder

Below is a list of potential issues and solutions to those issues. Please evaluate each one and attempt each applicable recommendation.

### **The Settings.xml file from the Previous Installation Has Become Corrupt**

* Try deleting the settings.xml file on your system. It is located here:
* On Vista/7/8/10:&#x20;
  * `%AppData%\Roaming\Saleae LLC\Logic\settings.xml`
* On XP:&#x20;
  * `C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\settings.xml`
* Make sure the software is closed when trying this.
* To view the AppData (Application Data) folders, you will need to make sure the "Shows hidden files, folders, and drives" option is enabled in Windows.

### **Try Launching the Saleae Software from the Command Prompt Instead of by Double-Clicking the Application or a Shortcut**

* This may bypass any applications that attempt to attach to the Logic software, possibly preventing it from launching.
* Open the command prompt. Select "Run" from the Start menu. Then type "cmd" and press OK. A black command prompt should appear.
*   Navigate to the install directory, usually like this:

    > cd "c:\Program Files\Saleae LLC"
*   Start the software like this:

    > Logic.exe
* Wait up to 20 seconds to see if the Logic software appears.

### **Test the 32-Bit Standalone Version of the Software**

* In the past, we've seen issues on some customers' computers where the 64-bit software fails to launch, but the 32-bit software is able to run properly.
* Since the software installer on the downloads page automatically detects if it should install the 32-bit version or the 64-bit version, the "standalone" release must be used.
* Download the 32-bit standalone of the latest beta software. The download page for the latest beta release also contains the standalone download links. Be sure to download the 32-bit version.
*   The 1.2.5 32-bit standalone version can be downloaded here:

    [http://downloads.saleae.com/betas/1.2.5/Logic+1.2.5+standalone+32+bit.zip](http://downloads.saleae.com/betas/1.2.5/Logic+1.2.5+standalone+32+bit.zip).

    If the 1.2.5 release is no longer the latest release, do not use that link. Instead, get it from the downloads page.
* Extract the zip file to any location on your computer. The location won't matter.
* Double-click Logic.exe. Wait up to 20 seconds for it to launch.
*   If it does not launch, attempt to launch it using the command prompt:

    &#x20; In the folder containing the freshly extracted Logic.exe, hold shift and right-click in the empty space. Select "Open command window here" from the right-click menu.

    &#x20; Type "Logic.exe" and press Enter. Wait up to 20 seconds to launch.

### **Test Older Releases of the Saleae Logic Software**

* All older release download links can be found below.

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

* Try the following versions. Please use the standalone versions to avoid the need to uninstall and reinstall the software. Just extract each standalone version to a separate folder and attempt running Logic.exe. Also try the command line launch, as mentioned in the above section.&#x20;
* 1.1.34, both the 32-bit and the 64-bit standalone versions
* 1.1.28, both the 32-bit and the 64-bit standalone versions
*   If neither of those releases works, there is one more release to test: the 1.1.20 release. Note: The 1.1.20 release does not support the new products. However, it was built on the previous build system, and if it runs, that will provide valuable information to us as to the source of the problem.

    1.1.20 does not have a standalone version. You will need to uninstall the currently installed logic version to install it.

    64-bit version:

    [http://downloads.saleae.com/betas/1.1.20/Logic+Setup+1.1.20+(64-bit).exe](http://downloads.saleae.com/betas/1.1.20/Logic+Setup+1.1.20+\(64-bit\).exe).

    It is not possible to install the 32-bit version of the 1.1.20 software on a 64-bit Windows install due to installer limitations.

### The Software Fails to Launch on Fedora

This article covers the situation where the Saleae Logic software crashes on launch on Linux Fedora 26 and 27. The issue is still open, and we are working on resolving it. Currently, we would like to collect information from individuals who are able to reproduce the problem.

The Saleae Logic software uses QT 5.7, which is included with the download. The QT framework is not currently compatible with the newest version of OpenSSL, 1.1.

It looks like a recent patch to QT has added support for OpenSSL 1.1. We're investigating to see if it has been merged into the latest production release of QT.

In the meantime, we expect that installing an older version of OpenSSL should solve the problem. This has been confirmed by several customers, but since we haven't been able to reproduce the problem here, we're not sure.

Installing OpenSSL 1.0.2 compatibility:

```
dnf install compat-openssl10
```

{% hint style="info" %}
Some customers have reported installing the `compat-openssl10-devel` version of that, and some have reported symlinking the older version in order to get Logic to load it:

`ln -s /usr/lib64/libssl.so.10 ./libssl.so`
{% endhint %}

If you see the following error message from the console when running Logic, you are likely seeing this problem:

```
qt.network.ssl: QSslSocket: cannot resolve CRYPTO_num_locks
```

You should see many similar lines in the output before the application exits.

To check what versions of OpenSSL are available on your system, you can run these checks:

1.  Directly search for the libraries:

    ```
    ls /usr/lib64/ | grep -i 'libssl\|libcrypto'
    ```

    In this case, libssl and libcrypto 1.0.2 would indicate you have an older compatible version of OpenSSL installed, and the software should run. If you find this but the software fails to launch, please send us the console logs of the software and the output of the above ls & grep command.
2.  Check installed packages.

    ```
    rpm -qa | grep -i openssl
    ```

    If you find `compat-openssl10-1.0.2...`, the application should run. If it does not run, please send us the above output and the console output of the Logic software.

If you have found a simpler workaround, please let us know. Once we confirm that the latest QT supports OpenSSL 1.1 and we update our application on all platforms to support it, this problem should go away completely.

We have been unable to reproduce this issue on the Fedora 26 and Fedora 27 live disks. In both cases, the 1.0.2 compat version is already installed and loaded by Logic.

{% hint style="info" %}
When running Logic software from the command line, you may see the following warning. This can be safely ignored.

`libpng warning: iCCP: known incorrect sRGB profile`
{% endhint %}

_**Update:**_ A customer has reported that just using `LD_PRELOAD` to force-load the included compatibility version of libssl also solves the problem, like so:

```
# First cd to where the software is installed... 
ln -s /usr/lib64/libssl.so.10 libssl.so 
LD_PRELOAD=$PWD/libssl.so ./Logic
```

### **If You Are Still Not Able to Run the Saleae Software, Please Contact Support and Include the Following Information:**

* The version of Windows used and if it is 32-bit or 64-bit.
* The error message(s), if there was one. If nothing happened when attempting to launch the software, please indicate that.
* Is the computer a company computer issued by a company IT department or a private (personal) computer?
* Is any anti-virus running, and if so, which one(s)?
* Is disk-encryption running (specifically, a non-Microsoft disk encryption tool)?. If so, please let us know which one.
* Which Saleae logic analyzer are you using (Logic 4, Logic 8, etc...)?
* Have you had a previous version of the software installed, and if so, which version?
* Was the installed software able to run normally? yes/no
* Did you successfully delete the settings.xml file? yes/no
* Did you test launch the installed software from the command line? yes/no
* Did you test the 32-bit standalone software? yes/no
* Did you test any of the older versions, and if so, which ones? Did they launch?
