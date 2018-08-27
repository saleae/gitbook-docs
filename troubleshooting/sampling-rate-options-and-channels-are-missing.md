# Sampling Rate Options and Channels are Missing

## Sampling Rate Options and Channels are Missing

Logic Pro 8 and Logic Pro 16 can both be used with USB 2.0 or USB 3.0 ports. However, there are some restrictions when using them with USB 2.0 ports.

First, both devices operate with a lower maximum throughput. The maximum sample rate combinations will be lower by a factor of about 6.

Second, Logic Pro 16 draws slightly more current than what USB 2.0 ports are rated. Because of this, by default, only 8 of the 16 channels are active when connected to a USB 2.0 port. However, if you're sure the port that you are using can supply at least 700mA of current, then you can manually enable the second bank in the preferences dialog.

![](https://trello-attachments.s3.amazonaws.com/57215d5e1bba46c6dc477691/370x89/84f215669e2d2faed536936a5db3cd3a/usb3_power.PNG)

Most powered USB hubs will be able to provide enough current to power Logic Pro 16. If you enable this feature but Logic Pro 16 is unable to draw enough current to power both banks, it may disconnect from the PC when it connects to the software, or it may disconnect when a capture is started.

