# Measurements & Timing Markers

### Measurements

Measurements in the Logic 2 software can be added via the "Timing Markers & Measurements" side panel button on the right. Once the panel is opened, add a measurement by clicking the "+" button next to "Measurements." Afterwards, you can click and drag across your desired channel and waveform region to add a measurement box. As a shortcut, you can hold SHIFT while clicking and dragging across your waveform to add a measurement box.

{% embed url="https://vimeo.com/511321334" caption="Adding Measurements" %}

The measurements that are made \(called metrics\) depend on the type of data you are measuring \(analog or digital\) and the installed measurement extensions in the software. 

### Installing More Measurement Extensions

The "Clock Stats" and the "Voltage RMS" measurement extensions are installed by default. You can also view and install custom submitted Measurement Extensions via the "Extensions" panel button on the right of the software. More information on this can be found below.

{% page-ref page="../../extensions/extensions-quickstart.md" %}



## Logic 1.x

If you are using the older Logic 1.x software, the following images and instructions apply.

### **Digital Instantaneous Measurements**

To see instantaneous measurements while hovering over a digital channel recording, right-click the digital waveform and make sure "Show Digital Instantaneous Measurement" is checked. You can also select which measurements are made, and you can save the measurement so it stays persistent on the waveform, even when the mouse is not hovering over it. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94193354bad34d58af/17b0f509242eea07cc04048162ea0e88/dig-meas.png)

### **Analog Instantaneous Measurements**

To see instantaneous measurements while hovering over an analog channel recording, right-click the analog waveform and make sure "Show Analog Instantaneous Measurement" is checked. You can also select which measurements are made, and you can save the measurement so it stays persistent on the waveform, even when the mouse is not hovering over it. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94193354bad34d58af/1206a7bb64453f2dca1e60b35a26dcb7/ana-instant-meas-set.png)

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94193354bad34d58af/3b0721cd5a36517d859e980e95d744ef/ana-meas.png)

### **Using Annotations**

All annotations are listed in the Annotations sidebar at the top right of the software. By default, the Annotations sidebar will contain a Timing Marker annotation.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/d67d32f55f520aca2791e09ff082c305/annotations_sidebar.png)

### **Using Timing Markers**

Timing markers can be used to measure elapsed time between any two locations in your data. By default, the Annotations sidebar will contain a Timing Marker annotation.

To place a timing marker, first press the A1 or A2 buttons.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/e31cfe376c9b46381e11fe2671394b95/press_A1.png)

Move your mouse to the desired location and click to place the marker.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/314x144/b6662105fcdc5866131905ad143eb99a/place_A1.png)

To cancel placing a timing marker, right-click.

You can also place timing markers with the keyboard's 1 and 2 keys.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/163x82/715d261adc7644f6c509cf4aa60f6bcd/1_and_2.png)

To place additional markers, click the Plus button on the Annotations panel and select Timing Marker Pair.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/243x159/42891b96ce6f180e3893ec45e92bd188/add_new_timing_marker.png)

To zoom to a particular timing marker pair, click its icon, which appears at the left side of the Annotation panel.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x93/cdc7ef5bca9f99e6bc8b9a13d6dc1d77/zoom_to_timing_marker.png)

To delete a timing marker, select its settings icon \(gear\) and choose Delete Annotation.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/243x133/14ae837e540d0eda485ef9f22a36caef/delete_annotation.png)

### **Using Bookmarks**

A Bookmark is simply a recording of your exact position and zoom level in your data. By making a bookmark, you can quickly zoom back to this area again later.

To add a Bookmark, click the Plus button on the Annotations panel and select Bookmark.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/243x158/9a94dbd01704143ba554ab9b4d2f7c46/add_bookmark.png)

To edit the name of the bookmark, click the Bookmark's label, which by default is "Bookmark"\).

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/b4cf2fcc6e957ec9feabb114b8a628ee/edit_bookmark_text.png)

To zoom to a Bookmark, click its icon at the left side of the Annotations panel.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x61/190b695a72977cd47d0d6196068ecaa6/zoom_to_bookmark.png)

To delete a bookmark, select its settings icon \(gear\) and choose Delete Annotation.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/243x104/6c919f2373c34994277c6119c1e16129/delete_bookmark.png)

### **Using Measurements \(Persistent\)**

Adding a Measurement allows you to add a permanent annotation to your data for later reference. In addition, Measurement Annotations allow for more sophisticated computations than the temporary measurements that always appear at the mouse cursor. For example, you can compute the average duty cycle across thousands of pulses.

To add a Measurement Annotation, click the Plus button on the Annotations panel and select Measurement.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/243x158/7684e16e22733f1fcaa0bcdccfcf238f/add_measurement.png)

Use your mouse to click the starting point of your measurement.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/300x43/a41e5fd479482dea765ed577276ed282/place_measurement_1.png)

Next, click the desired ending point.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/300x44/6460429a6b436dc9b3f5aeb2f691f68c/place_measurement_2.png)

To change which measurements are displayed, right-click anywhere inside the measurement area.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/300x180/07fa26c85c947df8d5475cb06f3d2a8b/measurement_context_menu.png)

The Measurement appears in the Annotations sidebar at the right of the software.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/f4b09cda6eb091c3188821c1a6d8c417/measurment_in_annotations_stack.png)

Click on the text to edit the name of the Measurement.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/e782accab9addf15c87bc3167860cc76/measurement_edit_text.png)

To zoom in on the measurement, click its icon on the left side.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x62/4b1e78cde71467447b315a582832afb5/measurement_zoom.png)

To delete a measurement, click on its gear button and select Delete Annotation.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/242x115/a5db1e58df8c001a8fd6d7b4c27650b4/measurement_delete_1.png)

You can also delete a Measurement by right-clicking anywhere in the Measurement area and selecting Delete Measurement.

![](https://trello-attachments.s3.amazonaws.com/57215c94193354bad34d58af/222x73/25fdb5af7493e4b2d05d7943508c9fe7/measurement_delete_2.png)

### **Supported digital measurement calculations:**

* Width \(for persistent measurements, this is the time span of the measurement\)
* Frequency \(this is just 1/width\)
* Average Frequency \(average frequency of all complete cycles inside the range\)
* Average Duty Cycle \(average duty cycle of all complete cycles inside the range\)
* Count of Rising Edges
* Count of Falling Edges
* Count of Positive Pulses
* Count of Negative Pulses
* Minimum Positive Pulse Width
* Maximum Positive Pulse Width
* Minimum Negative Pulse Width
* Maximum Negative Pulse Width
* Period \(for persistent measurements, this is the time span of the measurement\)
* Average Period \(average period of each complete cycle in the range\)
* Count of Complete Periods \(Cycles\)

### **Supported analog measurement calculations:**

* Width \(for persistent measurements, this is the time span of the measurement\)
* Frequency \(this is just 1/width\)
* Period \(this is the same as the width for persistent measurements\)
* Min-Max Voltage \(displays both the minimum voltage and the maximum voltage in a range\)
* Start Voltage \(the voltage at the start of the span\)
* End Voltage \(the voltage at the end of the span\)
* Delta Voltage \(Abs \(Start-End\)\)
* Peak to Peak Voltage \(Max-Min\)

