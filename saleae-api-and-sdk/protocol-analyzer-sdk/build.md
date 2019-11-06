# 2. Build - Analyzer SDK

Before continuing this setup guide, please follow the instructions below to setup your SDK folders and rename your custom protocol analyzer.

{% page-ref page="setup.md" %}

The instructions below describe how to build your custom analyzer for Windows, MacOS, and Linux.

## Building on Windows

First, download and install Visual Studio. These instructions were tested using Visual Studio Community 2019.

To build on Windows, open the visual studio project in the Visual Studio folder. If you are using the latest version of Visual Studio, you may need to upgrade the project to target the latest Visual C++ toolset, since this project uses an earlier version of the toolset. If the window below pops up, go ahead and upgrade the project to the latest version and click "OK".

![Retarget Project to the Latest Toolset](../../.gitbook/assets/2019-10-22_1904.png)

The Visual Studio solution has configurations for 32 bit and 64 bit builds. You will likely need to switch the configuration to the appropriate build for your OS. Once the project is opened and properly configured in Visual Studio, you may build it \(Ctrl + B\). This will generate a .dll file for your custom analyzer that you can install into the Logic software.

![Configure Build for 32-bit or 64-bit OS](../../.gitbook/assets/2019-10-22_1909.png)

#### Testing your Newly Built Analyzer in Windows

To test your analyzer, you will need to tell the Saleae Logic software where to load find your compiled analyzer dll.

The four build combinations produce analyzer dll files in the following locations:

```text
.\Visual Studio\Win32\Debug\<Your Analyzer's Name>Analyzer.dll
.\Visual Studio\Win32\Release\<Your Analyzer's Name>Analyzer.dll
.\Visual Studio\x64\Debug\<Your Analyzer's Name>Analyzer.dll
.\Visual Studio\x64\Release\<Your Analyzer's Name>Analyzer.dll
```

Instructions to tell the Saleae Logic software where to find your new analyzer dll can be found below.

{% page-ref page="../../faq/technical-faq/setting-up-developer-directory.md" %}

Once you have set that directory and restarted the software, your new custom analyzer should appear in the list of analyzers you can add.

## Building on MacOS

#### via Python script

To build on MacOS, run the build\_analyzer.py script. The compiled libraries can be found in the newly created debug and release folders.

```text
python build_analyzer.py
```

#### via XCode

[Instructions here](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Analyzer%20SDK%20Setup.md#xcode-based-project)

#### Testing your Newly Built Analyzer in MacOS

To test your analyzer, you will need to tell the Saleae Logic software where to load find your compiled analyzer dylib.

The four variants of the dylib files will be in the following locations:

```text
debug/lib<Your Analyzer's Name>Analyzer.dylib
release/lib<Your Analyzer's Name>Analyzer.dylib
```

Instructions to tell the Saleae Logic software where to find your new analyzer dylib can be found below.

{% page-ref page="../../faq/technical-faq/setting-up-developer-directory.md" %}

Once you have set that directory and restarted the software, your new custom analyzer should appear in the list of analyzers you can add.

## Building on Linux

First, if you are using Linux 64 bit, you need to delete the 32 bit libAnalyzer.so file, and rename the libAnalyzer64.so file to just libAnalyzer.so.

```text
mv AnalyzerSDK/lib/libAnalyzer64.so AnalyzerSDK/lib/libAnalyzer.so
```

Then run build\_analyzer.py

```text
python build_analyzer.py
```

#### Testing your Newly Built Analyzer in Linux

The two variants of the newly compiled analyzer can be found here:

```text
debug/lib<Your Analyzer's Name>Analyzer.so
release/lib<Your Analyzer's Name>Analyzer.so
```

Instructions to tell the Saleae Logic software where to find your new analyzer .so can be found below.

{% page-ref page="../../faq/technical-faq/setting-up-developer-directory.md" %}

Once you have set that directory and restarted the software, your new custom analyzer should appear in the list of analyzers you can add.

