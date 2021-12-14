# How to Install the Saleae Software from a Script Automatically

The Saleae Software for Windows is packaged using the software tool from [Advanced Installer](http://www.advancedinstaller.com).

Installers produced with Advanced Installer all respect a number of command line options. The installer \*.exe file can be used with command line options documented here: [http://www.advancedinstaller.com/user-guide/exe-setup-file.html](http://www.advancedinstaller.com/user-guide/exe-setup-file.html)

Advanced installer provides notes on performing silent installations here: [http://www.advancedinstaller.com/user-guide/qa-silent-install.html](http://www.advancedinstaller.com/user-guide/qa-silent-install.html) Section 3 mentions performing silent installations using the EXE bootstrapper (the setup exe program, which Saleae provides).

The following command line can be used to silently install the logic software:

```
"Logic+Setup+1.2.5.exe" /exenoui /qn
```

However, elevated permissions are required, and running that command from the standard command line will return immediately without error.
