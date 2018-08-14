# OSX Analyzer SDK Xcode Setup

This guide was written using the 1.1.32 Analyzer SDK, Xcode version 7.2.1, and OSX 10.10.5. However, it is likely to work with other versions as well.

* Start Xcode
* Click "Create a new Xcode project"

![1](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/802x470/0eafc20581f8dd3203ecdb5ba5e5379c/1_-_new_project.png)

* Select "Other" from the left column and "Empty" from the templates list. 
* Click Next.

![2](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/730x518/1fce35fca4a2d7f3b0120f3dd65f2bb3/2_-_empty_project.png)

* Enter a name for your Xcode Project.

![2.5](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/730x518/48936e889dab33a6b8ae6fa6831c5b63/2_5_analyzer_name.png)

* The location should be set to the analyzer SDK folder recently downloaded, "SaleaeAnalyzerSdk-1.1.32". Do not create a new folder; that will be done for you by Xcode. 
* Click "Create"

![2.75](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/712x745/803f1a5180afd2f62c01f4e687bdefb4/2_75_-_project_location.png)

* Back in Finder, copy the file "rename\_analyzer.py" and "source" from the downloaded SDK directory into the freshly created folder, which will have the same name as your new analyzer. Shown here, the name is "XcodeAnalyzer."

![3](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/418x210/326fc5a587521a00600147bc28d023df/3_-_copy_files.png)

* Open a terminal and browse to the new project folder in the downloaded SDK folder.
* Run the python script with:

  python rename\_analyzer.py

* First, it will prompt you for the class prefix for all of the source files. All classes and files will be renamed with this prefix. If you type "I2C", the classes and files will be named with "I2CAnalyzer". Please avoid using analyzer in this name, as it will get repeated like this: "I2CAnalyzerAnalyzer".
* Second, it will ask you for the name to display to the user in the "Add Analyzers" menu. This should be the user facing name and can include spaces.

![4](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/570x534/7e19be5434d141ddbb57ea68f001012d/4_-_rename_analyzer_script.png)

* Next, we need to add a target to the Xcode project. Be sure the project is selected in the Project Navigator on the left. Then click the menu highlighted below to add a target.

![5](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/3421f90530a04973632dcbf02539a327/5_-_add_target_button.png)

* This is the target menu.

![6](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/218x145/88285a456223eeb995c6f9be5e46b605/6_-_add_target_menu.png)

* Select "Framework & Library" under "OS X" in the left column, and select "Library" in the main area.
* Click Next.

![7](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/730x518/3371e3821803b1df4e7cea234a7ffeaa/7_-_library_target.png)

* Enter a product name. We recommend the same name as the project since there will only be one product.
* Under framework, select "None \(Plain C/C++ Library\)".
* For Type, select "Dynamic".

![8](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/730x518/679bf0f0024d3fe4b43210764a156339/8_-_library_settings.png)

* Next, we need to add the source files. Click File -&gt; Add Files to ""...
* Note: If this is disabled, it is because you do not have the project selected in the Project Navigator.

![8.5](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/323x501/34c1452091b24631e896303624e37110/8_5_-_add_files_menu.png)

* Browse to the source folder in the Xcode project folder and select it. Don't select the contents. Be sure to select the folder itself.
* Select "Create groups" in the "Added folders" section.
* Click Add.

![9](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/712x745/d8b9a10363662760d54fc625c7d44b5c/9_-_add_files.png)

* Verify that the files were automatically added to the build phases "Compile Sources" and "Headers".
* Select the project from the Project Navigator if not already selected.
* Click "Build Phases".
* Expand "Compile Sources" and "Headers".
* Under "Headers", also expand "Project".
* Verify that each has 4 files.

![9.5](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/f34a98d6f8679a0769a7d735b0b4fa3b/9_5_-_verify_sources_added.png)

* Click "Build Settings".
* If "Levels" is selected, switch it to "Combined".

![10](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/35f00a6ed2b3dc711e32655fa6fe372b/10_-_build_settings_page.png)

* Expand the section "Search Paths".
* Locate "Header Search Paths" and edit the value.
* Click the "+" button and enter "../include" in the new entry.

![11](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/893x414/59d419d0038ebdb62e25b65c4486d1cf/11_-_header_includes_search_path.png)

* Locate "Library Search Paths" in the same section and edit its value.
* Click the "+" button and enter "../lib" in the new entry.

![11.5](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1144x406/6c75896db01e62a05ed03f6fff98a7ae/11_5_-_add_library_path.png)

* Return to "Build Phases" and expand the section "Link Binary With Libraries".
* Click the "+" button.

![12](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/b2c6bc909509b2afe49bc9ee871e3866/12_-_add_library_part_1.png)

* Click "Add Other...".

![13](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/400x460/0e4e87e5fbb9dc5e486f3ec37e23f224/13_-_add_library_part_2.png)

* Browse to the original SDK folder, which contains our Xcode folder.
* Open the "lib" folder.
* Select "libAnalyzer.dylib".
* Click Open.

![14](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/836x739/97e978bc65dd4fbe5e8a4aee8056de7d/14_-_add_library_part_3.png)

* At this point, you should build the project so the resulting library will be created.
* It's worth mentioning that new Xcode versions do not save build outputs in the project directory. Instead, the default output directory looks like this:

  ~/Library/Developer/Xcode/DerivedData

* You may want to change it. **The following steps are optional.**

**Optional: Change build output folder**

* Optional Step 1: From the file menu, select "Project Settings...".

![optional 1](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/323x501/ba605c89a88d6d242749dd5488f4e318/optional_-_project_settings_-_edit_products_folder_menu.png)

* Optional Step 2: In the "Derived Data" dropdown, select "Project-relative Location".
* Click "Done".

![optional 2](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/533x321/931b406dfa573567c00ccb8ec8bdd92e/optional_-_Project_Settings.png)

* That's it for the optional steps.
* Next, we will set up debugging for the project. Be sure to have the latest Saleae Logic Software installed.
* On the "Product" menu at the top of the screen, select "Scheme" -&gt; "Edit Scheme..." ![15](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/466x403/87875097d22bfc4d2997fc9a4c656be2/15_-_edit_scheme.png)
* Make sure "Run" is selected on the left.
* Under "Executable" select "Other...". ![16](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/380x194/0b780c87427b7020562dd717f9f8ef4d/16_-_debug_launch_app_menu.png)
* Browse to the "Applications" folder \(or wherever Logic is installed\) and select "Logic.app"
* Click Choose.

![17](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/712x745/a8646c74f01d9931c34b71eff17ca7b6/17_-_select_debug_program.png)

* Set a breakpoint in the software so we can test debugging.
* Open "XcodeAnalyzer.cpp" on the left. The name will reflect what you selected as the class prefix in a previous step. In this example, the class prefix was "Xcode".
* In the source file, add a break point to the first line of code in the WorkerThread method. This code runs when the analyzer starts processing data.

![18](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/3b2d436bb20fba165f0b8713f9ebb11e/18_-_breakpoint_set.png)

* Before proceeding, see this article with instructions to configure the software to load your new analyzer: [https://trello.com/c/LEFlqhlL](https://trello.com/c/LEFlqhlL).
* Be sure to select the folder where the debug version of the custom analyzer is saved.
* Once the Saleae logic software has been configured and has been closed, click Run from Xcode.
* The Saleae software should launch a few seconds later. Click the "+" button on the analyzers panel and then select your analyzer. In this case, the user facing name of the analyzer was set by the Python script to "Xcode Analyzer". Yours may be different.
* If your analyzer is missing, it could indicate that the dylib was not created or that the developer path was not set properly. Please review the previous steps for any possible errors.
* The settings dialog for your custom analyzer will appear. Click "Save".

![19](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/277x634/f855dad9aa7e3d59e434116fe2670fd5/19_-_logic_software_add_analyzer_menu.png)

* Here is your fresh new analyzer, now added to the software. Note that our breakpoint hasn't fired yet. If you had captured data previously, it might fire now, since analyzers will automatically start processing if they are added to an existing analyzer.

![20](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/260x73/73c4d32ec5211f8922a73058bee9a5f2/20_-_analyzer_in_Logic.png)

* Press Start to start a simulation.
* Since your analyzer has already been added, the simulator will call your simulation data generator code. The analyzer also starts processing the moment data has been captured, so your break point should fire immediately.

![21](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/281x82/6f3dbe5a9c72e3c3202050922c5e9895/21_-_logic_software_start_button.png)

* Here you can see that the debugger was attached and your break point has been hit. You can examine variables, set new break points, or press Continue from the debug menu at the bottom.

![22](https://trello-attachments.s3.amazonaws.com/56b91491ba4869819221c3a5/1400x960/5d8191d96b15f94249b9c07ce52268c6/22_-_breakpoint_hit.png)

* Congratulations! You now have an Xcode project you can use to develop a custom analyzer for the Saleae software.

If you have any questions, please contact support.

