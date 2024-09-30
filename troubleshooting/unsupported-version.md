# Warning Message: Unsupported Version

Upon opening the Logic 1.x software, you may be prompted with the following warning message. Unfortunately, we've also seen cases where this message may cause the software to crash upon closing it.

_This software version is no longer supported. Please update your software at www.saleae.com._

![Unsupported Version Warning Message](<../.gitbook/assets/Screen Shot 2020-08-03 at 5.35.31 PM (1).png>)

### Bypassing the Warning Message

You can bypass this warning message by adding an override launch argument.

In Windows, you can add the `--override` launch argument by right-clicking the shortcut and opening the Properties window as shown below.

![Adding the --override launch argument in Windows](<../.gitbook/assets/Screen Shot 2020-07-09 at 2.58.32 PM.png>)

On Ubuntu Linux & MacOS, the launch argument to bypass the warning message will be `-override` (one dash only). You can run this from the terminal.

1. Open a terminal and browse to the install directory of Logic.
   * On MacOS: `cd /Applications/Logic.app/Contents/MacOS/`
2. Launch Logic with the `-override` argument like so:
   * `./Logic -override`

### Why does this Warning Message Exist?

If the software is unable to reach our API (either the PC is offline or goes through a strict firewall), it defaults to a 24 month timer. Once the timer is reached (meaning the PC hasn't been able to reach our API for 24 months), the error message will pop up, notifying the user to download the latest version.
