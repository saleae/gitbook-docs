# Is Silent Installation Supported?

The Windows version of our Logic 2 software installer is packaged using [Advanced Installer](https://www.advancedinstaller.com/). As such, their [documentation](https://www.advancedinstaller.com/user-guide/qa-silent-msi-install.html) covers what command line options are supported for various silent install methods.

For example, assuming the installer is located on your Desktop, you can use the following command line launch parameters when running our installer via Command Prompt. This will run the installer with no UI during the entire installation. Please note that you'll need to run Command Prompt as adminstrator to do this.

`cd C:\Users\UserName\Desktop`

`"Logic Setup 2.x.xx-master.exe" /quiet /qn`

Installing our software in this manner should also automatically install the Saleae Logic drivers.
