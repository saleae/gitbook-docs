# How Do I Convert Exported CSV Analog Data in Voltages?



When exporting analog data to CSV with the setting 'Output Array of Raw ADC Samples', samples exported in this mode have not been adjusted for DC gain and shift. In order to convert these to voltages, you need to extract the correct coefficients from the Saleae calibration file.

This has been logged as a bug, and in the future, we will either pre-calibrate the values or provide the scale and shift coefficients with the export.

To extract the necessary calibration coefficients, first locate the calibration file for your device. It should be in the software's calibration folder here:

* On Vista/7/8/10: C:\Users\YourUserName\AppData\Roaming\Saleae LLC\Logic\Calibration
* On XP: C:\Documents and Settings\YourUserName\Application Data\Saleae LLC\Logic\Calibration
* On OSX: /Users/YourUserName/Library/Preferences/Saleae/Calibration
* On Linux: Inside the folder with the Logic executable, in the Calibration folder.

Odds are that there is only one \*.cal file there. There is usually one file for every device used with your PC. If there is more than one file, you will need to determine which file corresponds to your device. To do that, you will need to find the device ID for the device you used for the capture. Instructions are as follows:

* Open the software and connect the device used for the capture.
* Open the preferences and go to the calibration tab.
* The connected device\(s\) is listed. Locate the device ID \(16-character Hex number\).
* The calibration file should have the same name, probably all lowercase, and end in \*.cal.

The XML is hard to read and mostly includes compensation filter parameters. Those are already applied to the ADC samples before our software stores them, so you won't need them.

Search for "mFullScaleVoltageRanges." It's close to the bottom of the file. For the Logic Pro 16, you will find 16 items on the list. Each item includes the channel number in mChannelIndex. It also includes mFullScaleMinVoltage and mFullScaleMaxVoltage. Those correspond to the voltages of the minimum and maximum ADC samples—0 and 4095, respectively. Note that the parameters are slightly different for each channel and also vary device to device.

For Logic Pro 8 and Logic 8, there are 8 sets of values.

For Logic 4, there is only one set of values.

Logic 8, Logic Pro 8, and Logic Pro 16 all use 12-bit sample numbers \(0—4095\).

Logic 4 uses 8-bit sample numbers \(0—255\).

Our software computes the voltage as follows:

```text
adc_max = 4095
v_max = mFullScaleMaxVoltage
v_min = mFullScaleMinVoltage 
x = ADC sample from export
v_out = ( x / adc_max ) * ( v_max - v_min ) + v_min
```

