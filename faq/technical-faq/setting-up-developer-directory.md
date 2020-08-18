# Installing Custom Protocol Analyzers

## Logic 2.x Instructions

Loading custom C++ protocol analyzers is possible in the Logic 2 software starting with the 2.3.5 release.

On the software's main menu, select "Custom Low Level Analyzers...". If you don't see this item on the menu, you may need to update your software to the latest release.

Then, in the dialog, use the browse button to select the directory that contains your compiled custom protocol analyzer.

Finally, save the dialog and restart the software. Your custom analyzer should now appear in the list of available protocol analyzers!

{% hint style="info" %}
If you're using MacOS, there is another step you may need to take in order for your custom analyzer to work.
{% endhint %}

![](../../.gitbook/assets/image%20%283%29.png)

### Logic 2 MacOS Instructions

If you see the following error after restarting the software on **MacOS**, please follow these extra steps.

![](../../.gitbook/assets/image%20%285%29.png)

1. Open the Terminal \(open Spotlight -&gt; search "Terminal" -&gt; press enter\)
2. navigate to the directory containing your custom analyzer \(e.g. `cd ~/Downloads/mylla`\)
3. run the following command, replacing `libYourCustomAnalyzer.so` with your analyzer's file name:

   `install_name_tool -change @executable_path/libAnalyzer.dylib @rpath/libAnalyzer.dylib libYourCustomAnalyzer.dylib`

4. close the terminal, and open the Logic 2 application again.

This will change how the custom analyzer library locates the libAnalyzer.dylib library, which has a different relative path than the older Logic 1.x software. 

You may see the same error on Linux or Windows. If this happens, there may be a problem with the custom analyzer you are trying to load. Please contact the analyzer author or Saleae support.

## Logic 1.x Instructions

These instructions show how to set up the Saleae software to load custom protocol analyzers.

* First, open the Options menu and select Preferences.

![1](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/838x457/617887de18a554e93249e8b8e2983105/1_-_preferences_from_menu.png)

* Navigate to the Developer tab and click Browse in the "Search this path..." section.

![2](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/460x542/241f7ca3e0169491683374cc47bf5243/2_-_browse_for_folder..png)

* Browse to the location where the .dll, .so, or .dylib analyzer library is stored. 
* Click "Select Folder"

![3](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/638x445/d24f746a296eea6019894d033f6bdefa/3_-_debug_folder.png)

* Save the preferences.

![4](https://trello-attachments.s3.amazonaws.com/56b9168f35c40cedbd1e38a7/460x542/57025defb24fb8ce45f41bb9bea7981c/4_-_save.png)

* Close the software. Custom analyzers won't be loaded until the software is restarted.

### Can't Find the Options Button?

Please refer to the article below. You may be running an older version of our software.

{% page-ref page="why-is-the-options-button-missing.md" %}



