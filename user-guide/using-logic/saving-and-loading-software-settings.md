# Saving & Loading Settings

The Saleae software includes two features to save and reload your work. The first is the ability to save and reload the entire capture, complete with settings, analyzers, and the captured data. The second is the ability to save the setup without captured data.

The saved setup file contains the following information:

* capture settings, including sample rate, active channels, etc.
* trigger settings
* channel settings, including channel labels, order, display size, and visibility
* display radix \(binary, decimal, hex, etc.\)
* analyzers and their settings

When saving a setup, the active tab's settings will be saved. When loading a setup, the settings will only be applied to the active tab.

Also, when loading a setup, if the setup was saved when a different type of device other than the current one was active, some settings, such as the sample rate and active channels, will not load. However, channel settings, analyzers, and other settings will still load properly.

### **Troubleshooting Issues when Loading a Logic Setup File**

If a saved setup file does not appear to be loading, it could be a bug. However, please check the following first:

* Make sure the tab into which you would like to load the settings is open when you load the setup file.
* Try changing a channel label and then reloading the file. Did the channel label change back? If so, the setup file is probably loading, but it does not contain the settings you're looking for.

If nothing is happening at all, please report this and include the information requested below.

{% page-ref page="../../troubleshooting/software-has-crashed.md" %}











