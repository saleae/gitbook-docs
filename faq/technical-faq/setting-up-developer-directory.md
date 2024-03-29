# Import Custom Low Level Analyzer

First, click the Settings button to open the Settings window.&#x20;

* On Windows: Edit > Settings
* On MacOS: Logic2 > Settings
* On Ubuntu: Edit > Settings

<figure><img src="../../.gitbook/assets/edit-settings.png" alt="" width="548"><figcaption><p>Settings Menu</p></figcaption></figure>

Then, in the Settings window, scroll to the bottom until you reach the Custom Low Level Analyzers section.

![Custom Low Level Analyzers Directory Location](../../.gitbook/assets/screen-shot-2021-04-05-at-3.26.38-pm.png)

You must specify a machine to start, using the command line.

Usage: VirtualBoxVM --startvm \<name|UUID> Starts the VirtualBox virtual machine with the given name or unique identifier (UUID). the browse button to select the directory that contains your compiled custom protocol analyzer.

* Windows -> `.dll`
* Linux -> `.so`
* MacOS -> `.dylib` **(Note: This may appear as a .so file provided by some custom analyzer repositories. If so, please see the "MacOS Errors" section below)**

Finally, save the dialog and restart the software. Your custom analyzer should now appear in the list of available protocol analyzers!

### MacOS Errors

If you're running the app on MacOS, you may run into a "Failed to Load Custom Analyzer" error message upon startup when the app attempts to load your `.dylib` (or provided `.so`) low level analyzer. The fixes for this are described in the support article below.

{% content-ref url="../../troubleshooting/failed-to-load-lla.md" %}
[failed-to-load-lla.md](../../troubleshooting/failed-to-load-lla.md)
{% endcontent-ref %}



