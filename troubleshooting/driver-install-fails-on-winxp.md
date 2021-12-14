# Driver Install Fails on Windows XP

This issue only affects some customers working on IT-managed company computers running Windows XP and is related to custom security policy settings. This should not happen on a standard install of Windows XP.

**Do not attempt this solution unless the description here matches the log file "C:\Windows\setupapi.log." This only applies to Windows XP.**

Check if the driver install for all Saleae products is failing and the setupapi.log file contains these lines:

* "#E008 Setting registry value HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\svchost\WudfServiceGroup"
* "#E033 Error 5: Access is denied"
* "#E065 Parsing AddReg section \[WudfSvc\_Registry] in "c:\6da69e39dcd652f0f13cc7d549b9\wudf\_update.inf" failed. Error 5: Access is denied"
* "#E033 Error 5: Access is denied". Then the issue is most likely a missing registry key. Please try adding a key: "WudfServiceGroup"

at the location:

* "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\svchost\\"

And retry the driver installation. If you continue to have trouble, please contact support.
