# The Software Will Not Install or Run Properly

Below is a list of all known reasons and corresponding solutions or next steps that can cause this particular issue. Please check each one, skipping any items that are not relevant \(such as issues specific to an operating system you are not using\).

For each item, first perform the test. If the test result is positive \(the test condition was met\), then attempt the corrective action.

### **Old Software**

* Test: Make sure the version of Logic you have downloaded and installed is the [latest version](https://www.saleae.com/downloads).
* Corrective Action: Download the latest version for your operating system.

### **Proper OS Used**

* Test: Are you using an unsupported operating system?
* Corrective Action: Use a supported operating system.

{% page-ref page="../logic-software/supported-operating-systems.md" %}

### **Wrong Installer Downloaded**

* Test: Verify that you downloaded the correct installer for your operating system. Note that on Linux, you must download the correct variant \(32 bit or 64 bit\).
* Corrective Action: Download the correct version.

### **Anti-Virus False Positive**

* Test: Does your anti-virus detect the logic software or installer as a virus and prevent you from running it?
* Corrective Action: First, verify that this is actually a false positive and not an actual issue. Make sure you downloaded the Logic software directly from the [saleae website](https://www.saleae.com/downloads). 

    You can also test the download against other anti-virus programs using the online service [Virus Total](https://www.virustotal.com/).

    If this is just a false positive, you can either manually ignore the file if your anti-virus allows it, or you can disable your anti-virus. 

    We typically see false positives with AVG. You can find the [1.2.2 virus total results here](https://www.virustotal.com/en/file/9b9fc726f45a206a52aef9695d309bc0ee7ce583e4c06577f0b4875fe81207ee/analysis/1435262948/).

### **Logic Software Installer Fails with Error on Windows**

* Test: Attempt to install the Logic software using the downloaded installer for your platform.
* Corrective Action: Try using the "standalone" version of the software. The download link can be found below the normal installer downloads.

    The "standalone" version of the software does not need to be installed. Simply extract it and run Logic.exe.

    Please note that the installer normally handles driver installation. You may need to manually install the driver if you use the standalone version. The driver files are included with the standalone download.

    You can find all the download links for the latest beta, including the standalone releases below.

{% page-ref page="../logic-software/latest-beta-release.md" %}

### **The Saleae Drivers Are Preventing the Software from Installing**

* Test: Attempt to install the Logic software. If the installation fails with an error message related to the driver installation, that indicates a driver-related problem.
* Corrective Action: Download the standalone version of the software as described above. Then attempt a manual driver install using the new hardware/update driver wizard.
* If the same error persists during the manual driver install, please check the driver install help found below.

{% page-ref page="../logic-software/driver-install.md" %}

### **The Software Will Not Launch \(All Platforms\)**

* Test: When trying to run the software, nothing happens. The software does not appear. No error message is displayed.
* Corrective Action: Try deleting settings.xml, which may have become corrupt. It can be located here:  
  On Vista/7/8/10:

  > C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\settings.xml

  On XP:

  > C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\settings.xml

  On OSX:

  > /Users/YourUserName/Library/Preferences/Saleae/settings.xml

  On Linux:

  > Inside the folder with the Logic executable in the Settings folder.

### **The Software Will Not Launch on Windows**

* Please see this article for tests on details of issues that specifically apply to the software failing to launch on Windows after a successful installation.

{% page-ref page="fails-to-launch-on-windows.md" %}

### **Linux – Write Permissions for settings.xml**

* Test: Make sure the current user has write permission to the folder containing the Logic binary and any subfolders.
* Corrective Action: Move the Logic binary and neighboring files and folders to a new location where the current user can write to those files.

### **Still Not Working**

* After trying the above tests, if the software still will not launch, please send screenshots of any error messages you are seeing to [support](https://contact.saleae.com/hc/en-us/requests/new).

