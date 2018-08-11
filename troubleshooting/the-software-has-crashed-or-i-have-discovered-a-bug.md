# The Software Has Crashed, or I Have Discovered a Bug

First, sorry about this. It's probably my fault. I apologize.

Please make sure you are using the [latest version of the Saleae software](https://www.saleae.com/downloads).

If the software crashed, the next time you run the software, you should see a dialog asking to upload the crash report. Please do! We automatically download and scan these crash reports to find new problems and track and fix issues, often in the order of prevalence. Please upload crash reports every time!

Hopefully, if the software crashes at all, it's a rare occurrence. However, if you're seeing frequent crashes, either randomly occurring or in a repeatable manner, please [write to support](http://support.saleae.com).

If the software is crashing on launch, please review these articles:

[https://trello.com/c/kEK01Tef](https://trello.com/c/kEK01Tef)

[https://trello.com/c/EFEu0QEm](https://trello.com/c/EFEu0QEm)

**When Contacting Support, Please Provide the Following Information**

* Saleae Logic software version \(found in the software title bar\)
* The operating system used, the version of OS, and if it is 32-bit or 64-bit.

    On Linux, also include the kernel version "uname -r" and the name of the window manager if it's not stock.

* Which product\(s\) you were using when the software crashed
* The USB host controllers installed in your computer

    On Windows, open Device Manager and expand the section "Universal Serial Bus Controllers." Send a screenshot of the contained items or a listing of all host controllers found in the list.

    On Linux, pipe the output of "lspci" to a file.

    This can be skipped on OSX, which exclusively uses Intel series host controllers.

* If you are unable to capture with a device, please test the device on another computer.
* Indicate if this is a new problem or if you have always experienced this problem when using the Logic software.
* Describe what you were doing when the crash/bug occurred.

    Did it occur at the beginning / during / after a capture?

    Is the crash/bug repeatable? If so, what are the steps leading up to the crash?

* In the case of a crash, include a zipped copy of the error reports on your computer. They can be found here:

On Vista 7/8/10:  
C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\Errors\

On XP:  
C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\Errors\

On OSX: /Users/YourUserName/Library/Preferences/Saleae/Errors/

On Linux:  
Inside the folder with the Logic executable in the Errors folder.

**Suggestions to Avoid Crashes in the Short Term**

* If you have any protocol decoders active that you are not using, please remove them.
* If you have any channels active that you are not using \(such as unused analog inputs\), try disabling them.
* Try disabling the protocol search feature in the software's preferences if you are not using it \(software restart required\).
* Try running the Logic software as administrator.
* Try deleting the settings.xml file. A corrupt file could cause a consistent crash when accessing a specific feature. See this article for instructions: [https://trello.com/c/kEK01Tef](https://trello.com/c/kEK01Tef) \(search for settings.xml\).

Please send all this information and any other information that might seem relevant to [support](http://support.saleae.com). If you have already initially contacted support but have not provided all the information listed above, send it in a follow-up.

**Steps to Collect Additional Data**

If support asks you to provide the console output from the application, here are the steps required to do so:

**Windows**

* First, make sure the software is closed and that the device is unplugged from the computer.
* Open a command window and browse to the install directory of Logic, usually cd "\Program Files\Saleae LLC."
* Then launch the application while routing its standard to a log file: Logic.exe &gt; \Users\YourUserName\Desktop\LogicLog.txt.
* Then connect the device and wait at least 10 seconds. Optionally, remove the device and repeat 2–3 times.
* Then close the software. Locate the newly created log file and send it to support.

**Linux and OSX**

* First, make sure the software is closed and the device is unplugged from the computer.
* Open a terminal and browse to the install directory of Logic. on OS X:
* cd \Applications\Logic.app\Conents\MacOS\
* Launch Logic while routing standard out to a file:
* ./Logic &gt; ~/LogicLog.txt
* Then connect the device and wait at least 10 seconds. Optionally, remove the device and repeat 2–3 times.
* Then close the software. Locate the newly created log file and send it to support.

Again, I'm very sorry for the trouble with the software, and thank you for your help improving it!

