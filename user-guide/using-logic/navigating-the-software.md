# Navigating the Software

The Logic 2 software consists of the following basic sections:

![](../../.gitbook/assets/screen-shot-2020-09-03-at-4.20.26-pm.png)

### 1. Logic Analyzer Connection Status

This button allows you to check your logic analyzer's connection status with the software. Clicking it will allow you to view device information such as the device type, serial number, and calibration status.

{% embed url="https://vimeo.com/454544519" %}

### 2. Enabling and Disabling Input Channels

Any enabled input channels are shown here. Use the Capture Settings panel to enable or disable channels.

{% embed url="https://vimeo.com/454542912" %}

### 3. Adding & Renaming Session Tabs

Click the "+" button to create new capture sessions tabs. This can be useful to manage multiple captures. To rename a tab, click the text within the tab.

![](../../.gitbook/assets/screen-shot-2020-09-03-at-5.42.31-pm%20%281%29.png)

### 4. The Start Button

Click the green "Start" button to begin a data capture. 

* If a logic analyzer is not connected, this button will generate simulation data as if a logic analyzer was collecting real world data. 
* If a logic analyzer was connected, then this would begin capturing data from its enabled input channels. After the capture has started, you can stop it before it finishes, which will retain the data to that point. 

### 5. Side Panel Buttons

The side panel buttons offer various ways to configure your logic analyzer settings. More information on these settings can be found in the articles below.

{% page-ref page="capture-settings.md" %}

{% page-ref page="using-protocol-analyzers.md" %}

{% page-ref page="measurements-timing-markers.md" %}

{% page-ref page="../../extensions/" %}

### 6. Time Scale Adjustment

The time scale for the displayed waveforms can be adjusted to an exact time value per 100 pixels as shown below. This gives the ability to set an exact zoom level, as opposed to using the mouse scroll wheel or using keyboard shortcuts to zoom in and out.

{% embed url="https://vimeo.com/454563327" %}

### Other Useful Features

Several more useful tasks can be performed from the main software view, such as...

* Renaming Channels
* Reordering, Resizing, & Scaling Channels
* Editing Colors

These features are described in our tutorial video below about organizing your workspace.

{% embed url="https://www.youtube.com/watch?v=8BJm2l6arR0" %}



## Logic 1.x

If you are using the older Logic 1.x software, you can follow the instructions below.

This section will guide you through the features of the Logic software. This is a great first step to take to familiarize yourself with the features of the software. When no Logic device is connected, the software will work in demo mode, which is virtually identical to how it will function when a device is connected. The demo will help you become familiar with the software before your Logic device arrives.

### **Navigating the Logic Software**

The Logic software user interface consists of the following basic sections.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5ae1f9f79107b39ac226e523/e3f9f9eecf3dc8bcd61877c8b37c6998/sw-UI.png)

1. _**Start Simulation**_ **or** _**Start**_ **Button** 

   * Generates simulation data, as if the logic analyzer was collecting real world data. If a Saleae Logic was connected to the PC, then this button would say Start. After the capture has started, you can stop it before it finishes, which will retain the data to that point. If the Start button is gray and cannot be clicked, that means you are not on the capture tab \(_See \#4_\). Ensure you are on the capture tab so you can take a capture.

2. **Device Settings Button** 

   * Opens the Device Settings window. This window allows you to modify capture settings, such as sampling rate, capture duration, enabled channels \(digital and analog\), voltage, and performance.

3. **Options Button** 

   * Opens system-wide settings for the Logic software, which allows you to save captures, export data, and modify various settings for the Logic software.

4. **Capture tab** 

   * You can save previous captures so you can refer to it later.
   * The Capture tab is your current capture. 
   * The &gt;&gt; button allows you to save the current capture into a new tab. 
   * The _gear_ icon on the previously saved capture tabs allow you to close or copy the tab.

5. **Enabled Channels** 

   * Currently enabled channels are shown here. Use the Device Settings button to enable and disable channels \(_See \#2_\). If a channel is enabled but cannot be seen, it may be hidden. Click the _gear_ icon on any of the channels and click _Reset All Channels_ to reset all channel settings and bring them all back into view.

6. **Software Version and Logic connection status**

   * If status is \[Disconnected\], the green button will display _Start Simulation_
   * If status is \[Connected\], the green button will display _Start_

   \_\_

7. **Annotations, Analyzers, and Decoded Protocols**
   * The Annotations window lets you add bookmarks, timing markers, and various measurements to your capture.
   * The Analyzers window lets you add one of our many protocol analyzers to your digital channels. The _+_ icon will only be clickable if there are digital channels enabled.
   * The Decoded Protocols window shows the decoded results of the protocol analyzers once the capture is complete and the data has been processed.

### **Renaming Tabs**

To edit the text shown on a tab, click the text.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/349x100/4ce456d907ecbd65365c859d3cbd2765/edit_tab_label.png)

### **Rearranging Channels**

To rearrange channels, drag them by their grip icon at the far left of the channel.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/332x142/43fb99eccd5b2b786e4f3f6f3dc9c219/drag_channel.png)

To drag more than one channel, select the first channel by clicking anywhere in the channel label area.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/199x249/7d196c0516dc5a2cc6d213957e6eb98f/multi_select_1.png) ![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/200x248/e7fc7023de52bb7cab4be2546464390a/multi_select_2.png) ![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/199x248/71baeaca3a51f08f809f3fe8b6a848e6/multi_select_3.png)

Then control-click additional channels, selecting them as well. You can use shift-select to select a range of channels.

Then drag one of the channels by its grip icon. All the selected channels will move together.

To reset the channel order, click the channel settings icon \(gear\) on any channel and select Reset All Channels.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/331x212/a5375cb27170883d6937354a858bcc8b/reset_channel_order.png)

### **Changing Channel Size**

To change the channel size, click the channel settings icon \(gear\) on the desired channel and select a new size.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/350x211/2528ea48bea08d1cc8361b546720a044/change_channel_size_1.png) ![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/350x253/b50b00ffc1eebfe0b681bc7573e51d95/change_channel_size_2.png)

To change multiple channels to the same size, select them \(control-click\) and then set one of the selected channel's size. All the selected channels will change their size.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/350x211/aa4f535b11c2bb3c5c300089e4a01d0e/change_size_multiple.png)

To select all channels, select one and then press CTRL-A.

### **Hiding Channels**

To hide a channel, click the channel settings icon \(gear\) and select Hide Channel.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/350x222/ca3a60dfd03a440ca72e49b880a5c4f0/hide_channel.png)

You can hide multiple channels at the same time by selecting multiple channels and then selecting Hide Channel on one of them.

To restore this and other hidden channels, click on a channel's settings icon and select Reset All Channels.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/350x231/e6bfbd778f94a38bad39012eb4fe6df1/reset_all_channels.png)

### **Editing Channel Labels**

By default, channels are labeled Channel N where _N_ is the channel number. To make it easier to remember which channel is connected to what, these labels are user-editable.

To change a channel label, first click anywhere over the existing label name.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/200x75/2332b0847b338d2f888ce03df56fc70e/1-clicklabel.png)

This will switch the label into the editing mode. Use the next box to change the channel label to whatever text you prefer.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/203x71/9d8a3e456b693aaa2389026e84a251cc/2-editlabel.png)

Once finished, simply click somewhere else on the software or press Enter.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/199x78/984a2dbeecdacb8b848466cd6f755150/3-finishedlabel.png)

Done! You can repeat the process for each label. To reset the label names and other settings to default, use the same Reset All Channels menu item. This also resets channel visibility, ordering, and size settings.

![](https://trello-attachments.s3.amazonaws.com/57215c93d776ced6a7215d8a/331x212/a5375cb27170883d6937354a858bcc8b/reset_channel_order.png)

