First, click the Settings button to open the Settings window. 

* On Windows: Edit > Settings
* On MacOS: Logic2 > Settings
* On Ubuntu: Edit > Settings

<figure><img src="/support-assets/edit-settings.png" alt="" width="548"><figcaption><p>Settings Menu</p></figcaption></figure>

Then, in the Settings window, scroll to the bottom until you reach the Custom Low Level Analyzers section.

![Custom Low Level Analyzers Directory Location](/support-assets/Screen%20Shot%202021-04-05%20at%203.26.38%20PM.png)

Click the browse button to select the directory that contains your compiled custom protocol analyzer. Depending on your OS, your custom built analyer will be located in the folder below by default.

#### Windows:

```
\build\Analyzers\Release\<Custom Analyzer>.dll
```

#### MacOS:

```
/build/Analyzers/<Custom Analyzer>.so
```

#### Ubuntu:

```
/build/Analyzers/<Custom Analyzer>.so
```

Once the folder location containing your custom analyzer is specified, save the dialog and restart the software. Your custom analyzer should now appear in the list of available protocol analyzers!

### MacOS Errors

If you’re running the app on MacOS, you may run into a "Failed to Load Custom Analyzer" error message upon startup when the app attempts to load your `.dylib` (or provided `.so`) low level analyzer. The fixes for this are described in the support article below.

<a class="content-ref" href="/support/troubleshooting/software-crashes-and-errors/failed-to-load-lla">Error Message: Failed to Load Custom Analyzer</a>



