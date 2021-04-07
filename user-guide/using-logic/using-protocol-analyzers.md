# Analyzers

Our tutorial video below demonstrates the basics of decoding data using protocol analyzers. The video covers the following topics:

* The basics of protocol analyzers
* Capturing and decoding SPI data
* Configuring the SPI analyzer
* Changing the display radix
* Navigating using the Data Table

{% embed url="https://www.youtube.com/watch?v=Ak9R4yxQPhs" %}



## Logic 1.x

If you are using the older Logic 1.x software, the following images and instructions apply.

### **Adding Protocol Analyzers**

Protocol Analyzers decode data that have been encoded according to a particular protocol such as SPI or I2C. ****To add a Protocol Analyzer, click the Plus button on the Analyzers sidebar on the right of the software.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/241x155/1bac39c75e3f567a77f3758599e87716/analyzer_add.png)

### **Analyzer Settings**

Different analyzers require different settings.

All protocol analyzers require you to specify which channels should be used for specific inputs used by the protocol.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/450x175/2ee4f0ee13b5f473c0474a1a166f594f/analyzer_settings.png)

If, after running a protocol analyzer, you notice that it doesn't work or doesn't display correctly, you may want to try editing the settings. For example, the SPI Analyzer must be set up to match the data exactly for correct decoding.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/264x77/7284f9c654673e0dfaa17e494f20a116/analyzer_SPI_settings.png)

To edit the settings for an existing analyzer, find that analyzer in the Analyzers panel on the right of the software. Click the gear button and select Edit Settings.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/303x116/480378f1d40c6aa29ea1d8cce1832a30/analyzer_edit_settings.png)

After editing your analyzer settings, the analyzer will rerun against any data you have collected and will update all results.

### **Changing the Global Radix \(Hex, Decimal, etc\)**

By default, all protocol analyzers will use the global radix settings.

To change the global radix, click the Options button at the top right of the software and then click the desired radix: Ascii, Ascii & Hex, Binary, Decimal, or Hexadecimal.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/305x213/72965f3d7e201544192cb737d0b6265f/analyzer_global_radix.png)

You can also use the keyboard shortcuts **CTRL-A**, **CTRL-B**, **CTRL-D**, or **CTRL-H** for Ascii, Binary, Decimal, or Hexadecimal, respectively.

### **Changing Analyzer-Specific Radix \(Hex, Decimal, etc.\)**

Sometimes you need to specify a different radix for different analyzers. To do that, locate the analyzer you would like to change in the Analyzers panel on the right of the software. Click the gear button and select the desired radix button.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/305x238/6c8e383d6fa5006382fab7d6a34c5b00/analyzer_specific_radix.png)

### **Edit the Analyzer Name**

If you like, you can edit the name of the analyzer to help keep track of what it is connected to. On the desired analyzer, click on the text to rename.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/245x62/6c5e020e3f630af9485610f8f6d06f98/analyzer_rename.png)

### **Starting an Analyzer at a Specific Point in the Software**

Sometimes it is desirable to start the analyzer only at a specified location in your data. A common use for this is if you are using SPI without an enable line. A transition on the enable line is normally required to synchronize the analyzer and allow it to start decoding.

When using SPI with no enable line \(and in other desired instances\), it is possible that the capture will start in the middle of a byte transition, and it will not have a means to properly find the beginning of a byte. In this case, you can manually set the starting location by first setting the A1 timing marker at the desired starting location.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/242x148/35f7f1c72a706c0080fcf474c54b9e4c/analyzer_start_at_A1.png)

Then click the Analyzer's gear button and select Re-run starting at the timing marker.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/305x172/b52987848f995985e2875de17b46dd12/analyzer_re-run.png)

### **Viewing Protocol Analyzer Results**

When a protocol analyzer successfully decodes data, colored regions will appear above the digital waveform where a byte or other bit-field is transmitted. Be sure to zoom in far enough to see the transitions making up a particular byte or bit-field.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/260x196/3b98e92499a7d0bfaccf2212cbb94795/analyzer_bubble.png)

In addition to displaying results over the digital waveform \(in context\), results are displayed in a list in the Decoded Protocols panel on the right of the software.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/241x166/e1190765c2e3b58eae82d27b0fabb0bd/analyzer_results.png)

Clicking an individual item in this list will zoom to that location in the digital waveform.

### **Searching Analyzer Results**

To search for a specific result, type the exact text you would like to match. For example, if you would like to find transactions involving the I2C address 0x42, type 0x42 \(assuming the display radix is hexadecimal\).

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/241x129/5d726e04c43bf0368ca73cedaed9f838/protocol_search.png)

### **Filter Analyzer Results to a Specific Range**

To limit the protocol results to a specific range, first add a timing marker pair with marker 1 and marker 2 placed at the beginning and end of the area on the graph you would like to search.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/356x304/5b71328dca3d242d35acf6e6c58e1727/range.PNG)

Then open the settings menu for the protocol search panel and select Search Between Timing Markers.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/257x158/84f17333105d451bbc177261f414ceea/range_menu.PNG)

Then, from the "Choose timing markers" dialog, select the pair that you have just placed around the activity and click Search.

![](https://trello-attachments.s3.amazonaws.com/57215c96cb44251902be82bf/219x152/a80157c8bafd31c9c75d3835579bea92/range_dialog.png)

The results are now filtered to all enabled analyzers within that time range.

