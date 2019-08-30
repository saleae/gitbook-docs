# Device Calibration

When connected to the internet, the Logic software will automatically handle downloading the calibration file.

The 2nd Generation of Saleae products \(Logic 4, Logic 8, Logic Pro 8, & Logic Pro 16\) use calibration data generated at Saleae to display accurate AC and DC values. The 1st Generation \(Original Logic and Logic16\) do not require any form of calibration.

This calibration data is not stored on the device. Instead, it is stored on our servers, and the software automatically downloads this calibration data as well as checks for updates when a device is connected.

### **Check Calibration Status**

1. Open the latest version of the software.
2. Connect the Logic device and wait for the software to connect to it.
3. Click _Options -&gt; Preferences -&gt; Calibration tab_

![](https://trello-attachments.s3.amazonaws.com/57215d47654d8cd332a0fa52/344x239/a275ee69d4a0b2d37858b695444651c7/calibration_information.PNG)

All physically connected devices will be displayed here, calibrated or not.

The device ID is the unique 64-bit ID of your device.

_Calibration Type_ should read _DC and frequency response_. If you see _DC Only_ here, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) as this is an error. A _Calibration Type_ of _DC and frequency response_ indicates that the DC voltages will be correct. The frequency response will be flat with a smooth falloff at the bandwidth for any particular sample rate.

The calibration date is the last time the captures created from your device were processed to produce the calibration data sets. As you may notice, that date can be after your product arrived. That’s just because whenever we make a change to the calibration constant generation code, we have to reprocess the captures we took from every device we’ve ever shipped.

The last updated date is the date we uploaded your calibration file to the Web. It’s also how our software determines if there is a newer calibration file available for your device.

There is a minimum software version required with a calibration file. Please keep your software up to date.

### **Manually Download the Calibration File**

The Logic software will automatically handle downloading the calibration file. In rare cases, users may need to download the file manually if the software is not able to download it on its own. Follow the steps below.

1. Enter the link below in your browser and add your Device ID.
   * downloads.saleae.com/calibration/{Insert Device ID here}.cal
   * _Note:_ Device ID must be entered in **lowercase**.
   * _For example:_ downloads.saleae.com/calibration/3b2e3a21ca4ad130.cal
2. Place the .cal file in the software’s calibration folder.
   * Windows 10/8/7/Vista: C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\Calibration
   * Windows XP: C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\Calibration
   * OSX: /Users/YourUserName/Library/Preferences/Saleae/Calibration
   * Linux: Calibration folder alongside Logic executable
3. Check your Calibration Status \(steps above\), to ensure the calibration loaded properly.

### **Transferring the Calibration File from One PC to Another**

1. Install the latest Logic software on a machine with Internet access.
2. Open the software and connect the Logic device.
3. Wait for the device to fully connect to the software.
4. Check preferences dialog to be sure the calibration data is loaded.
5. Close the software.
6. Copy all \*.cal files from the calibration folder of that computer to the computer without Internet access.

Each .cal file is specific to a single device, but the .cal files are saved with the device ID in decimal and not hex, making it hard to tell which is which. If only one device has ever been connected, there will only be one .cal file.

### Do I Have the Latest Calibration File?

If there is a newer calibration file available for your device, our software should automatically download it as long as it is connected to the internet.

In case you want to check if there is an updated calibration file available, please manually download the calibration file using the instructions above. If the calibration file was updated, then you will notice the _Last Updated Date_ will change under the _Calibration Info_ tab inside the _Preferences_ window.

### **Do you Provide Calibration Certificates?**

Our devices do not require periodic recalibration. You can download our statement of calibration below.

{% file src="../.gitbook/assets/statement\_of\_calibration.pdf" caption="Statement of Calibration" %}

Specifically, there is no calibration certificate. The devices do undergo a one-time factory calibration process.

### **Having Trouble?**

If you are having trouble manually downloading the calibration file, we can send it to you. Please [contact support](https://contact.saleae.com/hc/en-us/requests/new), and we can make sure your calibration data gets updated.

