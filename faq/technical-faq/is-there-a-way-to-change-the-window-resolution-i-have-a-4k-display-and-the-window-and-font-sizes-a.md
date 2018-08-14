# Is There a Way to Change the Window Resolution? I Have a 4k Display, and the Window and Font Sizes A

With high dpi monitors, applications can be difficult to see and read.

**Windows and MacOS**

On Windows and Mac OS, the Saleae Logic software should respect the display scaling set by the OS. To make the Saleae Logic software application bigger, increase the display size in the display settings.

Windows display scaling:

[https://www.howtogeek.com/304036/how-to-adjust-scaling-for-different-monitors-in-windows-10/](https://www.howtogeek.com/304036/how-to-adjust-scaling-for-different-monitors-in-windows-10/)

MacOS Display scaling:

[https://support.apple.com/en-us/HT202471](https://support.apple.com/en-us/HT202471)

**Linux**

On Linux, the software does not properly support display scaling out of the box. However, a simple environment variable can be used to manually scale the software.

First, check to see what the current display scaling is set to in your display settings. Below is a screenshot of this taken from Ubuntu 14.04.

![Ubuntu display scaling](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/58f7ee3a55fdeeb4cd320e00/6ee88c69098a2d906377fdd549caa04b/Ubuntu_Scaling.png)

Then, you will need to launch the Logic software from the terminal after setting this environment variable to the same value the display is currently using.

```text
export QT_SCREEN_SCALE_FACTORS=1.5
```

Then you can launch the Logic software from the same terminal, like this:

```text
./Logic
```

This could be wrapped into a \*.sh launcher script for more convenient use.

We also have an open issue to handle this automatically on launch.

Also, if you do not have a high-dpi display and your monitor scaling is set to 1, you can still make the logic software larger if you like by setting this environment variable before launching:

```text
export QT_SCALE_FACTOR=1.5
```

Please note that these two environment variables have different effects on the software. Specifically, one also controls font scaling, which is already done by the Ubuntu scale setting, which is why different variables are needed.

Unfortunately, the current Saleae software does not contain high-dpi images and assets, and some of the text effects in the software are only performed at low resolution. Because of this, the interface will appear pixelated. However, it should be the correct size on the screen. We are keeping this in mind for the next UI refresh.

If you have any problems with this, please contact support and include screenshots.

