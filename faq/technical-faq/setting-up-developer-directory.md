# Import Custom Low Level Analyzer

First, click the options button at the bottom-right of the software, and select "Preferences."

![](../../.gitbook/assets/screen-shot-2021-04-05-at-3.24.11-pm.png)

Then, in the Preferences window, scroll to the bottom until you reach the Custom Low Level Analyzers section.

![](../../.gitbook/assets/screen-shot-2021-04-05-at-3.26.38-pm.png)

Use the browse button to select the directory that contains your compiled custom protocol analyzer.

* Windows -> `.dll`
* Linux -> `.so`
* MacOS -> `.dylib` **(Note: This may appear as a .so file provided by some custom analyzer repositories. If so, please see the "MacOS Errors" section below)**

Finally, save the dialog and restart the software. Your custom analyzer should now appear in the list of available protocol analyzers!

### MacOS Errors

If you're running the app on MacOS, you may run into a "Failed to Load Custom Analyzer" error message upon startup when the app attempts to load your `.dylib` (or provided `.so`) low level analyzer. The fixes for this are described in the support article below.

{% content-ref url="../../troubleshooting/failed-to-load-lla.md" %}
[failed-to-load-lla.md](../../troubleshooting/failed-to-load-lla.md)
{% endcontent-ref %}

## Logic 1.x

These instructions show how to set up the Saleae software to load custom protocol analyzers.

* First, open the Options menu and select Preferences.

![1](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/838x457/617887de18a554e93249e8b8e2983105/1\_-\_preferences\_from\_menu.png)

* Navigate to the Developer tab and click Browse in the "Search this path..." section.

![2](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/460x542/241f7ca3e0169491683374cc47bf5243/2\_-\_browse\_for\_folder..png)

* Browse to the location where the .dll, .so, or .dylib analyzer library is stored.&#x20;
* Click "Select Folder"

![3](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/638x445/d24f746a296eea6019894d033f6bdefa/3\_-\_debug\_folder.png)

* Save the preferences.

![4](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/460x542/57025defb24fb8ce45f41bb9bea7981c/4\_-\_save.png)

* Close the software. Custom analyzers won't be loaded until the software is restarted.

### Can't Find the Options Button?

Please refer to the article below. You may be running an older version of our software.

{% content-ref url="why-is-the-options-button-missing.md" %}
[why-is-the-options-button-missing.md](why-is-the-options-button-missing.md)
{% endcontent-ref %}

