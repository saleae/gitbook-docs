# The Logic Software Fails to Launch on Windows

This article covers a very specific set of potential issues. Specifically, it covers issues that prevent the Logic software from launching on Windows computers. For issues related to the software crashing after launch, installation or driver problems, or issues on other operating systems, please see the main support article about problems running the software:

[The Software Will Not Install or Run Properly](https://saleae.gitbook.io/docs/~/edit/drafts/-LJtrnKeYdvZQmbbuVU1/troubleshooting/the-software-will-not-install-or-run-properly)

**The software downloaded and installed successfully. I see shortcuts to the Logic software on my desktop and start menu. However, when I try to open the software, nothing happens, or I see a Windows error message, not the Saleae software error reporter dialog.**

![Saleae error reporter](https://trello-attachments.s3.amazonaws.com/566f6b55b646f22a96776611/482x136/0a4c4435f07304337d40b8ed2874da14/error_reporter.png)

**Normal Saleae software error uploader. If you see this, then this is not the correct support article for your issue. Please see this article:** [The Software has Crashed or I Have Discovered a Bug](https://saleae.gitbook.io/docs/~/edit/drafts/-LJtrnKeYdvZQmbbuVU1/troubleshooting/the-software-has-crashed-or-i-have-discovered-a-bug)

Please check before continuing:

* The latest Saleae Logic beta software is installed.
* Windows is up to date.
* The computer has been recently restarted after the software was installed.
* The current user has administrator privileges or can launch programs as an administrator, if necessary.

Below is a list of potential issues and solutions to those issues. Please evaluate each one and attempt each applicable recommendation.

**The Settings.xml file from the Previous Installation Has Become Corrupt**

* Try deleting the settings.xml file on your system. It is located here:
* On Vista/7/8/10: C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\settings.xml
* On XP: C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\settings.xml
* Make sure the software is closed when trying this.
* To view the AppData \(Application Data\) folders, you will need to make sure the "Shows hidden files, folders, and drives" option is enabled in Windows.

**Try Launching the Saleae Software from the Command Prompt Instead of by Double-Clicking the Application or a Shortcut**

* This may bypass any applications that attempt to attach to the Logic software, possibly preventing it from launching.
* Open the command prompt. Select "Run" from the Start menu. Then type "cmd" and press OK. A black command prompt should appear.
* Navigate to the install directory, usually like this:

  > cd "c:\Program Files\Saleae LLC"

* Start the software like this:

  > Logic.exe

* Wait up to 20 seconds to see if the Logic software appears.

**Test the 32-Bit Standalone Version of the Software**

* In the past, we've seen issues on some customers' computers where the 64-bit software fails to launch, but the 32-bit software is able to run properly.
* Since the software installer on the downloads page automatically detects if it should install the 32-bit version or the 64-bit version, the "standalone" release must be used.
* Download the 32-bit standalone of the latest beta software. The download page for the latest beta release also contains the standalone download links. Be sure to download the 32-bit version.
* The 1.2.5 32-bit standalone version can be downloaded here:

  [http://downloads.saleae.com/betas/1.2.5/Logic+1.2.5+standalone+32+bit.zip](http://downloads.saleae.com/betas/1.2.5/Logic+1.2.5+standalone+32+bit.zip).

  If the 1.2.5 release is no longer the latest release, do not use that link. Instead, get it from the downloads page.

* Extract the zip file to any location on your computer. The location won't matter.
* Double-click Logic.exe. Wait up to 20 seconds for it to launch.
* If it does not launch, attempt to launch it using the command prompt:

    In the folder containing the freshly extracted Logic.exe, hold shift and right-click in the empty space. Select "Open command window here" from the right-click menu.

    Type "Logic.exe" and press Enter. Wait up to 20 seconds to launch.

**Test Older Releases of the Saleae Logic Software**

* All older release download links can be found here: [Older Software Releases](https://saleae.gitbook.io/docs/~/edit/drafts/-LJtrnKeYdvZQmbbuVU1/logic-software/legacy-software/older-software-releases)
* Try the following versions. Please use the standalone versions to avoid the need to uninstall and reinstall the software. Just extract each standalone version to a separate folder and attempt running Logic.exe. Also try the command line launch, as mentioned in the above section. 
* 1.1.34, both the 32-bit and the 64-bit standalone versions
* 1.1.28, both the 32-bit and the 64-bit standalone versions
* If neither of those releases works, there is one more release to test: the 1.1.20 release. Note: The 1.1.20 release does not support the new products. However, it was built on the previous build system, and if it runs, that will provide valuable information to us as to the source of the problem.

  1.1.20 does not have a standalone version. You will need to uninstall the currently installed logic version to install it.

  64-bit version:

  [http://downloads.saleae.com/betas/1.1.20/Logic+Setup+1.1.20+\(64-bit\).exe](http://downloads.saleae.com/betas/1.1.20/Logic+Setup+1.1.20+%2864-bit%29.exe).

  It is not possible to install the 32-bit version of the 1.1.20 software on a 64-bit Windows install due to installer limitations.

**If You Are Still Not Able to Run the Saleae Software, Please Contact Support and Include the Following Information:**

* The version of Windows used and if it is 32-bit or 64-bit.
* The error message\(s\), if there was one. If nothing happened when attempting to launch the software, please indicate that.
* Is the computer a company computer issued by a company IT department or a private \(personal\) computer?
* Is any anti-virus running, and if so, which one\(s\)?
* Is disk-encryption running \(specifically, a non-Microsoft disk encryption tool\)?. If so, please let us know which one.
* Which Saleae logic analyzer are you using \(Logic 4, Logic 8, etc...\)?
* Have you had a previous version of the software installed, and if so, which version?
* Was the installed software able to run normally? yes/no
* Did you successfully delete the settings.xml file? yes/no
* Did you test launch the installed software from the command line? yes/no
* Did you test the 32-bit standalone software? yes/no
* Did you test any of the older versions, and if so, which ones? Did they launch?

**Unresolved Situations**

Unfortunately, in a few cases, the software was not able to run on the necessary computer. If that is the case, after exhausting all tests provided by support, there is no other option except to return the product for a full refund. Unfortunately, it's impossible to guarantee that the software will work properly on all computers with a wide range of configurations and conditions.

