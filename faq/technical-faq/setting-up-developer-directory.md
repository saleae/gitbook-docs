# Installing Custom Protocol Analyzers

## Logic 2.x Instructions

### Windows

To install your custom protocol analyzer, place your analyzer .dll file into the following folder:`C:\Program Files\Logic\resources\windows\Analyzers`

Afterwards, restart the Logic software and you should see your protocol analyzer in the dropdown list by clicking the '+' icon next in the Analyzers panel of the software.

![Analyzers drop-down list](../../.gitbook/assets/screen-shot-2020-06-19-at-4.45.43-pm.png)

### MacOS and Linux

{% hint style="info" %}
On [Logic 2.x](https://ideas.saleae.com/f/changelog/), we currently only support installing custom analyzers on Windows. We plan to add MacOS and Linux support soon.
{% endhint %}

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



