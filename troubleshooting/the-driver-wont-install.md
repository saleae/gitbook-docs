# The Driver Won't Install

**Note: if you are using any of the new products \(Logic 4, Logic 8, Pro 8, Pro 16\), you must use the latest beta version of the software since the previous releases did not include drivers for these devices. You can find the latest beta here on the support site under the SDKs and betas section.**

**If you have already manually installed the Logic or Logic16 driver for one of the new devices, you will need to update to the latest software and then manually install the correct driver again.**

Normally, the USB drivers for Windows install when the Logic software is installed, and the product should work when connected. In other cases, such as when using the standalone version of the software, the drivers must be installed manually.

The first thing to try is manually installing the drivers, if you haven't already. After that, let's try a "have-disk" manual install.

If that doesn't work, please write us and send an install log along with details about your computer. The information we'll need is at the bottom of this article.

For the first part, we want to get to the new-hardware wizard for Logic. Please connect Logic and then open the Device Manager.

In Windows 10 and 8.1, you can right-click on the Windows logo in the lower left and select Device Manager.

In Windows 8.0, you can search for the Device Manager from the Start screen.

In Windows 7 and Vista, you need to open the Control Panel, select System, and then click the link for Device Manager on the left.

In Windows XP, you will need to open the Control Panel, open System, go to the Hardware tab, and click the button for Device Manager.

In Device Manager, I'm guessing that Logic will show up right away as an unknown device with a warning icon next to it. Right-click this and select Update Driver.

Select the second option for "Browse my computer for driver software."

Use the Browse button to direct the driver wizard to the Drivers folder, which is located where the Logic software was installed. Make sure the "Include Subfolders" checkbox is checked.

* If the Logic software is already installed, the Drivers folder is here: C:\Program Files\Saleae LLC\Drivers
* Otherwise, if using the standalone software, the Drivers folder is here:

  \Drivers\Windows

Click Next. If this fails, continue to Part 2 below. If using the standalone software, this step should have succeeded. Otherwise, please [contact support](http://support.saleae.com/hc/en-us/requests/new) if using the standalone software.

### Part 2: "Have-Disk" Manual Installation

Next, let's try the "have-disk" method. Close the new hardware wizard, go back to device manager, and start it again.

**Warning: Please make sure you have software 1.1.34 beta or newer installed before continuing. If you are using an older version such as 1.1.15, the below steps will create additional problems. Please contact support if you are unsure if you have the correct software installed or if you have any trouble with the drivers.**

Again, click "Browse my computer for driver software."

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/631x469/da3cba938586d18eb312830d414a2019/page_1.PNG)

This time, instead of clicking the Browse button, click "Let me pick from a list of device drivers on my computer."

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/630x469/8d291c47af4d57a5d080501b24ed0523/page_2.PNG)

Next, it will ask you for the device type. Select "Universal Serial Bus Controllers."

This option is only present if no existing driver is installed. If a driver is already installed, this step will be skipped.

Now you will be presented with a window you may remember from installing printer drivers on Windows 95. Click the "Have Disk..." button.

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/630x470/88234f6fb7d365deebc9cf6b5d4a4eef/page_3.PNG)

This will open the install from the disk window, which will assume that you have inserted a floppy disk into drive A with the drivers. Click browse, navigate to the extracted drivers folder, and select Saleae.inf.

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/440x239/4b72f41b11b7fba1f873df28df6261da/page_4.PNG)

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/573x427/9c75de05f81dd754af3f2fe7611ee123/page_5.PNG)

At this point, you should see either just the device you have connected or both Logic and Logic16. See below for details before selecting the device you are using.

If the checkbox for "Show compatible hardware" is checked, only 1 device should be shown. If it is not the correct device, then uncheck it to see all available Saleae drivers, as shown below.

![](https://trello-attachments.s3.amazonaws.com/57215d889e8ae939fe4a2834/629x468/cb7a842f13a54506e4b070799e692e85/page_6.PNG)

These are all of the drivers that are included with the latest beta software, which you should see in the list when the checkbox for "Show compatible hardware" is not selected.

Saleae Logic 4 USB Logic Analyzer  
Saleae Logic 8 USB Logic Analyzer  
Saleae Logic Pro 16 USB Logic Analyzer  
Saleae Logic Pro 8 USB Logic Analyzer  
Saleae Logic Start USB Logic Analyzer  
Saleae Logic USB Logic Analyzer  
Saleae Logic 16 USB Logic Analyzer

**It's VERY important to select the correct product. Selecting the wrong product will cause our software to download the wrong firmware image, causing undefined behavior.**

There is some naming confusion here that I would like to clear up.

If you purchased the Logic 4, the Logic Pro 8, or the Logic Pro 16, please select the driver that matches the product name.

If you purchased the new Logic 8, our logic 8 channel logic analyzer with digital and analog, released in September 2014, please use the driver "Saleae Logic 8 USB Logic Analyzer" and NOT the driver "Saleae Logic USB Logic Analyzer." If you have the original Logic unit, 8 channel, digital only, discontinued in mid-2014, please select "Saleae Logic USB Logic Analyzer" and not the one with the number 8.

The original Logic 16, also discontinued in 2014, uses the "Saleae Logic 16 USB Logic Analyzer" driver and NOT the pro version.

If at the end of this process you still get an error, please contact us. Include the following information:  
What OS and OS version you are using and if it is 32-bit or 64-bit.

If the device has worked on this PC before.

If the device has worked on other PCs before.

Any information that may have been displayed when the drivers failed to install.

The driver install logs.

On XP, these are located here:

C:\Windows\setupapi.log

On newer versions of Windows, it should be here:

C:\WINDOWS\INF\setupapi.dev.log

