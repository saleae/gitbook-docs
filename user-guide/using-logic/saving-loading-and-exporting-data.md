# Saving, Loading & Exporting Data

### **Saving Captures**

_Note: Saving a capture only saves the currently selected tab._

To save your current capture, click the Options menu on the top right of the software and select Save capture. You can also press CTRL-S.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/412x116/9f724212fc2945aed70e244be2562501/save_capture.png)

### **Opening Captures**

To open a previously saved capture, click the Options menu on the top right of the software and select Open Capture. You can also press CTRL-O.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/412x84/92d30daf5f31795091fd1cf31ab5a8fe/open_capture.png)

You can also drag a capture file into the Logic software.

On Windows, you can double-click a capture file to open it in the Logic software.

### **Exporting Data**

If you need to view, manipulate, or process data in another application, you can export it.

To begin exporting, click the Options button at the top right of the software and select Export data. When exporting data, you can select which channels to export and over what time period. Finally, you can select the format of the exported data.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/412x144/48a478ccdb97958254eb0b96d6ce20be/export_data.png)

For exporting protocol analyzer data, see the Protocol Analyzers section below.

{% page-ref page="../../protocol-analyzers/" %}

### **Export Settings**

To export your setting, click the Options button at the top right and select Save Setup. From there, you will be prompted to save a .logicsettings file. The .logicsettings file will save the settings associated with the current active tab. You can find the tabs at the bottom of the software UI.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c974c95a4ba028d9906/d5d730c5485a077f0b745792e7b18e5c/save-setup.png)

More details on saving settings are described below:

{% page-ref page="saving-and-loading-software-settings.md" %}

### **Exporting in CSV Format**

CSV format is a text format suitable for opening in a spreadsheet application or loading from a script. You can choose to include column headings and choose commas or tabs as the delimiter.

When exporting digital data only, you can choose to use timestamps or sample numbers to output the digital as a single value or as a bit per column. You can choose to record only when the value changes or record every sample.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/300x232/9ff47b68b4a4b5ea8cf950775704f6f0/csv_settings.png)

### **Exporting in VCD Format**

VCD stands for value change dump. It is a text-based format used for saving digital data \(it can't be used with analog data\).

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/300x71/8797654a7acaaab778ef265f59cced8d/vcd.png)

### **Exporting in Binary Format**

A binary format is provided primarily for those interested in loading data into a script or custom application. You can choose to export every sample or only record when the value changes. You can also select the number of bytes used per sample.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/484x150/9e9e6b086c0644ca4b34052f473cd598/binary.png)

### **Exporting in MATLAB Format**

To use data in MATLAB, you can export a .mat file, which can be loaded by MATLAB.

![](https://trello-attachments.s3.amazonaws.com/57215c974c95a4ba028d9906/300x63/a22d27e1abf803b99b9f66a0f9f8c780/matlab.png)

### **Additional Data Export Notes**

Some export formats have different options when exporting a mix of digital and analog channels or exporting only analog channels. Not all export options are available in some cases.

CSV can be used to export digital channels, analog channels, or a mix of digital and analog channels. Different options are available for each of these cases, and the format varies slightly. For instance, when exporting just digital channels with CSV and in one row per change mode, there will only be one set of timestamps in the file. When exporting digital and analog data, one row per change mode is the only format for the digital component, but timestamps are created for each channel individually instead of being shared between all digital channels. This special "mixed mode" export feature is not available unless at least one analog channel is present in the export. The only way to accomplish this for digital-only exports is to export each channel, one at a time, to separate files.

Binary export can be used for digital exports and analog exports, but it cannot be used to export a mix of analog and digital channels in the same file.

VCD only supports digital channels.

Matlab supports exporting digital channels, analog channels, and a mix of analog and digital channels.

### **Exporting Analyzer Results**

To export the results of a particular protocol analyzer, click the gear button on that analyzer and select Export as text/csv file.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/303x149/a37f41260643068b75561d16e86f811e/analyzer_export.png)

To export more than one protocol analyzer or only results that match your search, click the gear button on the Decoded Protocols panel and select Export search results.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/242x117/e21d151c1275d03cff4e166410740455/analyzer_export_search_results.png)

