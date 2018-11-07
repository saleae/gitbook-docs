# Getting the Console Output

## Getting the Console Output

When investigating crashes from the Logic software, we may ask you to provide the console output. This will help us fine potential sources of the crash. Please follow the steps below to obtain the console output from the Logic software.

### **Windows**

* First, make sure the software is closed and that the device is unplugged from the computer.
* Open a command window and browse to the install directory of Logic, usually cd "\Program Files\Saleae LLC."
* Then launch the application while routing its standard to a log file: Logic.exe &gt; \Users\YourUserName\Desktop\LogicLog.txt.
* Then connect the device and wait at least 10 seconds. Optionally, remove the device and repeat 2–3 times.
* Then close the software. Locate the newly created log file and send it to support.

### **Linux and OSX**

* First, make sure the software is closed and the device is unplugged from the computer.
* Open a terminal and browse to the install directory of Logic. on OS X:
* cd /Applications/Logic.app/Contents/MacOS/
* Launch Logic while routing standard out to a file:
* ./Logic &gt; ~/LogicLog.txt
* Then connect the device and wait at least 10 seconds. Optionally, remove the device and repeat 2–3 times.
* Then close the software. Locate the newly created log file and send it to support.

