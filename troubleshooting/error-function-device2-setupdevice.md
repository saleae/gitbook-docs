# Error Function: Device2::SetupDevice

We've recently received reports of issues when our logic analyzer is connected to the PC. 

The logic software will run fine while a logic analyzer is not connected, but the moment a logic analyzer is connected, the Logic software will crash with the following header in the generated error report.

`Logic Assert Information  
Version: 1.2.29  
System: Windows 6.2  
64-Bit Operating System  
File: C:\Users\Mark\Software\Logic\Source\Device2.cpp  
Function: Device2::SetupDevice, Line: 118`

The location of the generated error reports are below:

```text
On Vista 7/8/10:
    C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\Errors\
On XP:
    C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\Errors\
On OSX: 
    /Users/YourUserName/Library/Preferences/Saleae/Errors/
On Linux:
    Inside the folder with the Logic executable in the Errors folder.
```

We discovered this to be a bug with our logic analyzers in combination with the following processors, OSes, and PC models.

* Intel N4200
* Intel N5000
* Intel Celeron
* Intel® Core i5-1035G4 \(specifically found in Surface Pro 7\)
* MacOS Mojave
* Microsoft Surface Book
* Microsoft Surface Pro

### Known Solutions

Please try the following versions of the software to obtain the fix:

* [Logic v2.x](https://ideas.saleae.com/f/changelog/)
* The below versions will soon be obsolete, but still contains the fix \(for Logic 8, please use Logic v2.x above as the below versions may have compatibility issues\).
  * Windows: [Logic-1.2.35](https://downloads.saleae.com/betas/1.2.35/Logic-1.2.35-win64.zip)
  * MacOS: [Logic-1.2.33](https://downloads.saleae.com/betas/1.2.33/Logic-1.2.33-MacOS.dmg)

In case you have any trouble with the solutions above, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and we can help towards a resolution.

