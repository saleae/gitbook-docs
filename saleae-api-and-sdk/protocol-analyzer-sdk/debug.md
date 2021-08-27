# 3. Debug - Analyzer SDK

The instructions below describe how to debug your custom analyzer for Windows, MacOS, and Linux.

## Debugging on Windows

To debug your custom analyzer, you will need to download the [32-bit standalone copy of Logic v1.1.18](https://downloads.saleae.com/betas/1.1.18/Logic1.1.18BetaWin32Standalone.zip) software. This is a standalone download and does not need to be installed. Just extract the zip file and run the contained Logic.exe.

{% hint style="info" %}
_**Note:**_ Unfortunately, the [32-bit standalone copy of Logic v1.1.18](https://downloads.saleae.com/betas/1.1.18/Logic1.1.18BetaWin32Standalone.zip) is not compatible with our Gen2 products \(Logic 4, Logic 8, Logic Pro 8, & Logic Pro 16\). On Windows, you cannot attach a debugger to any version of the software that supports these products. We are working on a solution to this problem, but for now that means you must rely on the simulation data generator for your analyzer to produce captures you can then debug in the older software.
{% endhint %}

Please note that switching between Saleae Logic software versions has a tendency to reset the software's settings. This could cause the analyzer developer directory to get reset. If you no longer see your analyzer in the list, please verify that the analyzer developer directory is still set properly.

To build and and debug your custom analyzer using the 1.1.14 software, follow these steps:

* Using Visual Studio, open the solution file in the Visual Studio Folder.
* Select the solution configuration "Debug-Legacy-1.1.14"
* Select the platform "Win32"
* Build the solution
* Launch the 1.1.18 32-bit Logic software. If the analyzer directory is not already configured, set that to the `Visual Studio\Win32\Debug-Legacy-1.1.14` directory, and restart the software.
* The analyzer should now be visible in the list of analyzers you can add.
* In visual studio, open the Debug Menu, and select "Attach to process..."
* Locate Logic.exe in the list, select it, and click the Attach button.
* Add a break point on any line near the top of the WorkerThread\(\) function, such as line 27, mSampleRateHz = GetSampleRate\(\);
* In the Logic software, add your custom analyzer if you haven't already, and start a simulation.
* The breakpoint should hit

Optionally you can change the debugger command in visual studio to point to the older Logic.exe binary. Then you will be able to start debugging simply by pressing run in Visual Studio.

**Common issues on Windows**

* The 'Options' button is missing. On Logic software version 1.1.18, the 'Options' button is hidden because of the Windows Aero theme. It is still clickable right below the \(X\) button. More information [here](https://support.saleae.com/faq/technical-faq/why-is-the-options-button-missing).
* The software says "Unable to 'LoadLibrary' on dll ... is not a valid Win32 application" This is most likely because the analyzer was not built for the same platform architecture as the software running it. In almost all cases, this means the analyzer was compiled for 32 bit instead of 64 bit. Details to switch from 32 bit to 64 bit are included in the Analyzer SDK documentation on page 9. First, [add a x64 target to your project](https://msdn.microsoft.com/en-us/library/ms185328%28v=vs.120%29.aspx). Then, edit the linker settings for the 64 bit configuration. Change the additional dependencies item from Analyzer.dll to Analyzer64.dll. Note: Only the software versions 1.1.16 and later were built for 64 bit. Previous releases, including 1.1.15, were 32 bit only, which is why no 64 bit analyzer dll was provided.
* The Saleae software crashes on launch when the debugger is attached. Versions after about 1.1.18 no longer allow debuggers to attach. In these cases, we recommend building with the 32 bit version of the 1.1.18 beta and the 1.1.14 SDK, and debug there. This restriction only applies to Windows.

## Debugging on MacOS

#### via GDB

To debug your analyzer, you will need to attach gdb to the Logic application, something like this:

```text
gdb /Applications/Logic.app/Contents/MacOS/Logic
```

And then test setting a breakpoint like this:

```text
break MyAnalyzer::WorkerThread
```

Because your analyzer hasn't been loaded yet, GDB will notify you that it can't find this function, and ask if you want to automatically set this breakpoint if a library with a matching function is loaded in the future. Type y

Then type run to start the application. Add your custom analyzer and start a simulation. This will trigger the breakpoint.

#### via XCode

[Instructions here](https://github.com/saleae/SampleAnalyzer/blob/master/docs/Analyzer%20SDK%20Setup.md#xcode-based-project)

## Debugging on Linux

#### via GDB

To debug your analyzer, you will need to attach gdb to the Logic application like so:

```text
gdb /Home/YourUserName/Desktop/Logic 1.2.14 (64-bit)/Logic
```

And then test setting a breakpoint like this:

```text
break MyAnalyzer::WorkerThread
```

Because your analyzer hasn't been loaded yet, GDB will notify you that it can't find this function, and ask if you want to automatically set this breakpoint if a library with a matching function is loaded in the future. Type y

Then type run to start the application. Add your custom analyzer and start a simulation. This will trigger the breakpoint.

