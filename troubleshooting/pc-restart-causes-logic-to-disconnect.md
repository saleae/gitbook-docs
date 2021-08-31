# PC Restart Causes Logic to Disconnect

When restarting or rebooting your PC while Logic is connected, the USB cable may need to be reconnected in order to re-establish connection to the PC and to the Logic software. If the USB cable is not reconnected upon restarting your PC, you may notice the following behaviors:

* Windows may display the message "USB device not recognized"
* The Logic 2 software may show the message "Connect Saleae Device", indicating that the Logic's connection was not recognized
* The LED on your Logic may be off

### Some Background Information

We use the Cypress FX3 USB chip in our Logic Pro 8 and Logic Pro 16. It looks like the connection behavior upon a PC restart is a known errata with the chip. We found some information on this on a Cypress community forum post below:

* [Trouble Shooting Guide for the FX3/FX3S/CX3 Enumeration](https://community.cypress.com/t5/Knowledge-Base-Articles/Trouble-Shooting-Guide-for-the-FX3-FX3S-CX3-Enumeration/ta-p/248415)

### Troubleshooting

Although there may not be a workaround we can provide at the chip level, you can attempt to troubleshoot this at the PC level with some steps below:

1. Test this behavior through PC restarts on every USB port. Do some ports perform better than others? Also, when testing through power cycles, check to see if any of the USB ports stay powered during PC restarts. One way to check this is to see if the LED on Logic stays on across PC restarts.
2. If you have any external USB hubs, please try connecting your Logic device through that to see if it helps. Some powered USB hubs have power management schemes that help workaround this issue.



