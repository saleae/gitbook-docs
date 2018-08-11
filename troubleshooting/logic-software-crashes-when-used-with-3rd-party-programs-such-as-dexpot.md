# Logic Software Crashes When Used with 3rd-Party Programs Such As Dexpot

We have recently been hearing from customers that our Logic software can have issues when used with 3rd-party virtual desktop software like Dexpot. In short, the Logic software can become unresponsive after switching between virtual desktops.

Overall, that looks like a compatibility problem with QT5, the UI framework we use, since we've seen reports of the same problem with other programs that use the same framework. Longer term, I think this will get resolved during the next UI refresh when we move away from custom application chrome in the software.

As a workaround, customers have reported that maximizing and restoring the window brings back software responsiveness and functionality.

If you're not able to get the software working using the maximize and restore solution above, please [contact support](http://support.saleae.com/hc/en-us/requests/new).

