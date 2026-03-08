# OSX Analyzer SDK Xcode Setup

This guide was written using the 1.1.32 Analyzer SDK, Xcode version 7.2.1, and OSX 10.10.5. However, it is likely to work with other versions as well.

* Start Xcode
* Click "Create a new Xcode project"

<figure><img src="../../../.gitbook/assets/1_-_new_project.png" alt=""><figcaption></figcaption></figure>

* Select "Other" from the left column and "Empty" from the templates list.&#x20;
* Click Next.

<figure><img src="../../../.gitbook/assets/2_-_empty_project.png" alt=""><figcaption></figcaption></figure>

* Enter a name for your Xcode Project.

<figure><img src="../../../.gitbook/assets/2_5_analyzer_name.png" alt=""><figcaption></figcaption></figure>

* The location should be set to the analyzer SDK folder recently downloaded, "SaleaeAnalyzerSdk-1.1.32". Do not create a new folder; that will be done for you by Xcode.&#x20;
* Click "Create"

<figure><img src="../../../.gitbook/assets/2_75_-_project_location.png" alt=""><figcaption></figcaption></figure>

* Back in Finder, copy the file "rename\_analyzer.py" and "source" from the downloaded SDK directory into the freshly created folder, which will have the same name as your new analyzer. Shown here, the name is "XcodeAnalyzer."

<figure><img src="../../../.gitbook/assets/3_-_copy_files.png" alt=""><figcaption></figcaption></figure>

* Open a terminal and browse to the new project folder in the downloaded SDK folder.
*   Run the python script with:

    python rename\_analyzer.py
* First, it will prompt you for the class prefix for all of the source files. All classes and files will be renamed with this prefix. If you type "I2C", the classes and files will be named with "I2CAnalyzer". Please avoid using analyzer in this name, as it will get repeated like this: "I2CAnalyzerAnalyzer".
* Second, it will ask you for the name to display to the user in the "Add Analyzers" menu. This should be the user facing name and can include spaces.

<figure><img src="../../../.gitbook/assets/4_-_rename_analyzer_script.png" alt=""><figcaption></figcaption></figure>

* Next, we need to add a target to the Xcode project. Be sure the project is selected in the Project Navigator on the left. Then click the menu highlighted below to add a target.

<figure><img src="../../../.gitbook/assets/5_-_add_target_button.png" alt=""><figcaption></figcaption></figure>

* This is the target menu.

<figure><img src="../../../.gitbook/assets/6_-_add_target_menu.png" alt=""><figcaption></figcaption></figure>

* Select "Framework & Library" under "OS X" in the left column, and select "Library" in the main area.
* Click Next.

<figure><img src="../../../.gitbook/assets/7_-_library_target.png" alt=""><figcaption></figcaption></figure>

* Enter a product name. We recommend the same name as the project since there will only be one product.
* Under framework, select "None (Plain C/C++ Library)".
* For Type, select "Dynamic".

<figure><img src="../../../.gitbook/assets/8_-_library_settings.png" alt=""><figcaption></figcaption></figure>

* Next, we need to add the source files. Click File -> Add Files to ""...
* Note: If this is disabled, it is because you do not have the project selected in the Project Navigator.

<figure><img src="../../../.gitbook/assets/8_5_-_add_files_menu.png" alt=""><figcaption></figcaption></figure>

* Browse to the source folder in the Xcode project folder and select it. Don't select the contents. Be sure to select the folder itself.
* Select "Create groups" in the "Added folders" section.
* Click Add.

<figure><img src="../../../.gitbook/assets/9_-_add_files.png" alt=""><figcaption></figcaption></figure>

* Verify that the files were automatically added to the build phases "Compile Sources" and "Headers".
* Select the project from the Project Navigator if not already selected.
* Click "Build Phases".
* Expand "Compile Sources" and "Headers".
* Under "Headers", also expand "Project".
* Verify that each has 4 files.

<figure><img src="../../../.gitbook/assets/9_5_-_verify_sources_added.png" alt=""><figcaption></figcaption></figure>

* Click "Build Settings".
* If "Levels" is selected, switch it to "Combined".

<figure><img src="../../../.gitbook/assets/10_-_build_settings_page.png" alt=""><figcaption></figcaption></figure>

* Expand the section "Search Paths".
* Locate "Header Search Paths" and edit the value.
* Click the "+" button and enter "../include" in the new entry.

<figure><img src="../../../.gitbook/assets/11_-_header_includes_search_path.png" alt=""><figcaption></figcaption></figure>

* Locate "Library Search Paths" in the same section and edit its value.
* Click the "+" button and enter "../lib" in the new entry.

<figure><img src="../../../.gitbook/assets/11_5_-_add_library_path.png" alt=""><figcaption></figcaption></figure>

* Return to "Build Phases" and expand the section "Link Binary With Libraries".
* Click the "+" button.

<figure><img src="../../../.gitbook/assets/12_-_add_library_part_1.png" alt=""><figcaption></figcaption></figure>

* Click "Add Other...".

<figure><img src="../../../.gitbook/assets/13_-_add_library_part_2.png" alt=""><figcaption></figcaption></figure>

* Browse to the original SDK folder, which contains our Xcode folder.
* Open the "lib" folder.
* Select "libAnalyzer.dylib".
* Click Open.

<figure><img src="../../../.gitbook/assets/14_-_add_library_part_3.png" alt=""><figcaption></figcaption></figure>

* At this point, you should build the project so the resulting library will be created.
*   It's worth mentioning that new Xcode versions do not save build outputs in the project directory. Instead, the default output directory looks like this:

    \~/Library/Developer/Xcode/DerivedData
* You may want to change it. **The following steps are optional.**

**Optional: Change build output folder**

* Optional Step 1: From the file menu, select "Project Settings...".

<figure><img src="../../../.gitbook/assets/optional_-_project_settings_-_edit_products_folder_menu.png" alt=""><figcaption></figcaption></figure>

* Optional Step 2: In the "Derived Data" dropdown, select "Project-relative Location".
* Click "Done".

<figure><img src="../../../.gitbook/assets/optional_-_Project_Settings.png" alt=""><figcaption></figcaption></figure>

* That's it for the optional steps.
* Next, we will set up debugging for the project. Be sure to have the latest Saleae Logic Software installed.
* On the "Product" menu at the top of the screen, select "Scheme" -> "Edit Scheme..."

<figure><img src="../../../.gitbook/assets/15_-_edit_scheme.png" alt=""><figcaption></figcaption></figure>

* Make sure "Run" is selected on the left.
* Under "Executable" select "Other...".

<figure><img src="../../../.gitbook/assets/16_-_debug_launch_app_menu.png" alt=""><figcaption></figcaption></figure>

* Browse to the "Applications" folder (or wherever Logic is installed) and select "Logic.app"
* Click Choose.

<figure><img src="../../../.gitbook/assets/17_-_select_debug_program.png" alt=""><figcaption></figcaption></figure>

* Set a breakpoint in the software so we can test debugging.
* Open "XcodeAnalyzer.cpp" on the left. The name will reflect what you selected as the class prefix in a previous step. In this example, the class prefix was "Xcode".
* In the source file, add a break point to the first line of code in the WorkerThread method. This code runs when the analyzer starts processing data.

<figure><img src="../../../.gitbook/assets/18_-_breakpoint_set.png" alt=""><figcaption></figcaption></figure>

* Before proceeding, see this article with instructions to configure the software to load your new analyzer.

{% content-ref url="setting-up-developer-directory.md" %}
[setting-up-developer-directory.md](setting-up-developer-directory.md)
{% endcontent-ref %}

* Be sure to select the folder where the debug version of the custom analyzer is saved.
* Once the Saleae logic software has been configured and has been closed, click Run from Xcode.
* The Saleae software should launch a few seconds later. Click the "+" button on the analyzers panel and then select your analyzer. In this case, the user facing name of the analyzer was set by the Python script to "Xcode Analyzer". Yours may be different.
* If your analyzer is missing, it could indicate that the dylib was not created or that the developer path was not set properly. Please review the previous steps for any possible errors.
* The settings dialog for your custom analyzer will appear. Click "Save".

<figure><img src="../../../.gitbook/assets/19_-_logic_software_add_analyzer_menu.png" alt=""><figcaption></figcaption></figure>

* Here is your fresh new analyzer, now added to the software. Note that our breakpoint hasn't fired yet. If you had captured data previously, it might fire now, since analyzers will automatically start processing if they are added to an existing analyzer.

<figure><img src="../../../.gitbook/assets/20_-_analyzer_in_Logic.png" alt=""><figcaption></figcaption></figure>

* Press Start to start a simulation.
* Since your analyzer has already been added, the simulator will call your simulation data generator code. The analyzer also starts processing the moment data has been captured, so your break point should fire immediately.

<figure><img src="../../../.gitbook/assets/21_-_logic_software_start_button.png" alt=""><figcaption></figcaption></figure>

* Here you can see that the debugger was attached and your break point has been hit. You can examine variables, set new break points, or press Continue from the debug menu at the bottom.

<figure><img src="../../../.gitbook/assets/22_-_breakpoint_hit.png" alt=""><figcaption></figcaption></figure>

* Congratulations! You now have an Xcode project you can use to develop a custom analyzer for the Saleae software.
