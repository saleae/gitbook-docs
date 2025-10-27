# Error Message: Failed to Load Custom Analyzer

This support article describes some common errors that you may run into when attempting to load a custom low level analyzer into the Logic 2 app.

### Attempting to Load a .so File (Instead of a .dylib File)

Some custom analyzer repositories may provide the MacOS analyzer library file as a `.so` file (rather than a `.dylib` file). If so, you may be greeted with the following error pop up upon attempting to load the analyzer. The fix for this is described in the steps below.

<figure><img src="../../.gitbook/assets/Screen Shot 2022-11-21 at 12.27.07 PM.png" alt=""><figcaption><p>Failed to Load a .so file</p></figcaption></figure>

1.  Update the file extension to a `.dylib` file. To do this, right click the .so file, click "Get Info", then change the file extension type to `.dylib` like shown below. When the confirmation pop-up window to change the file type appears, click "Use `.dylib`".

    <figure><img src="../../.gitbook/assets/Screen Shot 2022-11-21 at 12.23.45 PM.png" alt=""><figcaption><p>Change file extension type to .dylib</p></figcaption></figure>



    <figure><img src="../../.gitbook/assets/Screen Shot 2022-11-21 at 11.49.11 AM.png" alt=""><figcaption><p>Click "Use .dylib"</p></figcaption></figure>
2.  Upon loading your new .dylib file into the Logic 2 app, you may be greeted with a new security error from MacOS like shown below.\


    <figure><img src="../../.gitbook/assets/Screen Shot 2022-11-21 at 11.49.39 AM.png" alt=""><figcaption><p>.dylib file cannot be verified by MacOS</p></figcaption></figure>

    To get around this error, you will need to allow this file through MacOS's security. Navigate to MacOS's System Preferences, and select Security & Privacy. Under the "Allow apps downloaded from..." section, select "Allow Anyway next to the `.dylib` file that was recently blocked by MacOS.\


    <figure><img src="../../.gitbook/assets/Screen Shot 2022-11-21 at 11.50.06 AM.png" alt=""><figcaption><p>Allow .dylib analyzer</p></figcaption></figure>

### Custom Analyzers Originally Built on Logic 1.x

When first attempting to import a custom analyzer that was originally built for Logic 1.x, you may be greeted with a "Failed to Load Custom Analyzer" error like below. The solution for this is described in the steps below, which will change how the custom analyzer library locates the libAnalyzer.dylib library, which has a different relative path than the older Logic 1.x software.&#x20;

> Failed to load custom analyzer...\
> Unable to load library...

![Initial Error upon Loading LLA on MacOS](<../../.gitbook/assets/image (19).png>)

1. Open the Terminal (open Spotlight -> search "Terminal" -> press enter)
2. navigate to the directory containing your custom analyzer (e.g. `cd ~/Downloads/mylla`)
3.  run the following command, replacing `libYourCustomAnalyzer.dylib` with your analyzer's file name:

    `install_name_tool -change @executable_path/libAnalyzer.dylib @rpath/libAnalyzer.dylib libYourCustomAnalyzer.dylib`
4. close the terminal, and open the Logic 2 application again.

You may see the same error on Linux or Windows. If this happens, there may be a problem with the custom analyzer you are trying to load. Please contact the analyzer author or Saleae support.

### libmidi\_analyzer.so Error on MacOS

When attempting to run the Logic 2 software on MacOS, the following error message may appear.

> Failed to load custom analyzer (/Applications/Logic2-x-x-xx.app/Contents/Resources/osx/Analyzer/libmidi\_analyzer.so): Unable to load library

![Failed to load midi analyzer](../../.gitbook/assets/failed-load-analyzer.jpeg)

The workaround we've found is to update to the latest version of MacOS, since our build system for Logic 2 typically targets that. When running an older version of MacOS, the error message above may appear.&#x20;

If you require using an older MacOS version and cannot update for whatever reason, you may delete `libmidi_analyzer.so` from the specified folder to get rid of the error message. This just means that you cannot use the pre-installed MIDI protocol analyzer. So long as you don't plan on analyzing MIDI data, this is OK to do.

### Symbol not found: \_\_ZTISt12out\_of\_range

When attempting to load a low level analyzer, we've heard of a handful of reports for the following error, which ultimately causes the load operation to fail.

`failed to open library /Users/username/CustomAnalyzer/build/Analyzers/libCustomAnalyzer.so with error: dlopen(/Users/username/CustomAnalyzer/build/Analyzers/libCustomAnalyzer.so, 6): Symbol not found: __ZTISt12out_of_range`\
\
We're not sure what's causing this, though we are able to reproduce the issue locally using the same compiler that we use to compile our application, and the exact same version of libc++.1.dylib.\
\
A quick search found another user of the AnalyzerSDK with the same issue in the [blog post here](http://users.atw.hu/balubati/blog/index.php?entry=entry180710-141302). We've tested it locally, and adding "-lc++" before -lAnalyzer fixed it.
