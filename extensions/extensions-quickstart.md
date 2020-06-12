# How to Create an Extension?

In this guide, we will walk your through creating an HLA \(High Level Analyzer\) extension, however, the process is identical for other types.  

1. Click the 'Extensions' panel button on the right of the software
2. Click 'Create Extension'
3. Under 'Generate from template', choose the type of extension you would like to create. For this example, we will create a High Level Analyzer.
4. Click 'Additional Information' to fill in information about your extension.

![](../.gitbook/assets/screen-shot-2020-06-10-at-8.29.50-pm.png)

5. Click 'Save As...' to save and select your location.  
6. You should now see your new extension listed as 'Local' in the software.

![](../.gitbook/assets/screen-shot-2020-06-10-at-8.29.13-pm.png)

7. To test the new Sample HLA, capture any protocol data for [one of the supported analyzers](analyzer-frame-types/), and add the appropriate protocol analyzer. We've provided an I2C capture below in case you don't have a protocol data recording available.

{% file src="../.gitbook/assets/i2c.sal" caption="I2C.sal" %}

8. Click the Analyzers '+' button to add our Sample HLA. 

![](../.gitbook/assets/screen-shot-2020-06-10-at-8.28.18-pm.png)

9. In the settings popup, select 'I2C' under Input Analyzer. For the rest of the settings, you can leave them as default and click 'Finish'. Once you add the HLA, you can see it as a virtual channel as shown in the image below.

![](../.gitbook/assets/screen-shot-2020-06-10-at-8.24.29-pm.png)

10. To edit the Sample HLA \(perhaps as a starting point to creating your own HLA\), you can click the 'Local' button next to 'Sample HLA' under the Extensions panel. This will open the containing folder for your extension files which you can update for your needs. 

