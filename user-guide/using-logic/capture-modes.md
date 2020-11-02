# Capture Modes

### Timer Mode

The timer mode is the simplest mode of data capture. A pre-defined duration is set by the user and the capture will end once the duration is reached. In the example video below, we set the capture duration to 5s. The recording will stop once 5s is reached.

{% embed url="https://vimeo.com/461183310" caption="Timer Mode Capture" %}

### Looping Mode

The looping mode allows for a continuous recording into a RAM buffer, the size of which can be set by the user. Once the RAM buffer is filled, new data replaces old data in a FIFO method and the capture can continue indefinitely. When the capture ends, the data can be trimmed down to a certain length via the _Trim data after stopping_ setting, keeping the most recent data. 

In the example video below, we set the _Memory buffer size_ to 500 MB. Notice that, during the capture, the memory usage does not go above the set _Memory_ value of 500 MB during the continuous recording.

{% embed url="https://vimeo.com/461178867" caption="Looping Mode Capture" %}

### Trigger Mode

The trigger mode will continuously record data until a digital trigger is found on a single channel. The four available types of digital triggers are Rising Edge, Falling Edge, High Pulse, and Low Pulse.

![Trigger Mode Capture Settings](../../.gitbook/assets/screen-shot-2020-09-23-at-6.25.23-pm.png)

In addition to the edge/pulse trigger which is set on a single digital channel, you can require other digital channels to be either HIGH or LOW to trigger a capture.

![Digital Channel State Conditions for Trigger](../../.gitbook/assets/screen-shot-2020-09-23-at-6.32.26-pm.png)

While waiting for the trigger, the software will continue using the PC's RAM/memory until the "Memory buffer size" limit is reached. This setting is important, as the software will not exceed this limit. Please make sure to size the "Memory buffer size" appropriately from within the capture settings panel, such that your PC does not run out of memory while waiting for a trigger.

![Memory Buffer Size Setting](../../.gitbook/assets/screen-shot-2020-11-02-at-3.53.54-pm.png)



## Logic 1.x

If you are using the older Logic 1.x software, the following images and instructions apply.

### **Using the Trigger**

The trigger can be used to start capturing data after a specified digital event occurs. Two types of triggers are supported: Trigger on Edge and Trigger on Pulse Width. The trigger can be used to trigger on an event from any channel. To move the event trigger to a different channel, first remove it using the steps at the bottom of this page, and then add it to a different channel.

### **Trigger on Edge**

To trigger on an edge \(high to low, or low to high digital transition\), click the +Trigger button on the desired channel and select the positive or negative edge.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/202x168/811c495d226f7527f9f41cbc896f66a1/trigger_select.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/346x135/c064b003ab6793aa7d480938900a43d4/Trigger_-_set_edge.png)

If desired, you can also require other channels to be either high or low during a previously selected edge. After selecting an edge, note that other channels will display a button with an "X" \(indicates "don't care"\).

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/196x43/cddeffe2624f84114cf1ea30136dae71/trigger_dont_care.png)

To require a high or low, click this button and select high or low.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/345x107/01f2e900d077cc35b94471b3978b487d/trigger_set_state.png)

### **Trigger on Pulse Width**

You can also trigger on a pulse width condition where a particular channel is high or low for a specified amount of time.

To add a pulse width trigger, click the +Trigger button on the desired channel and select the positive or negative edge. Next, enter the desired time range to search for.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/350x135/f4a00deb2a8d2e729776d912f735b361/trigger_set_pulse_width.png)

If desired, you can also require other channels to be either high or low during a previously selected pulse. After selecting an edge, note that other channels will display a button with an "X" \(indicates "don't care"\). To require a high or low, click this button and select high or low.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/352x151/429e3cc41471631419ddd1cf5ad1c63b/trigger_set_state_with_pulse.png)

### **Start Searching for the Trigger**

After setting the trigger, you can click the _Start_ or _Start Simulation_ button to begin searching for the trigger. If and when the trigger condition is identified, data collection will start.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/188x47/a00144b490ff4cfc96cf7e509fdbdd28/click_start.png)

### **Skipping the Trigger**

You can skip the trigger by clicking "skip trigger" if you would like to force the capture to begin without the trigger condition being met.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94100b0aa15070d6f0/bac0916a2dcee09536fdfcbef7359b95/skip-trig.png)

### **Stopping the Capture**

If the trigger condition is identified, data collection will start. You can stop the capture at any point in time by clicking "Stop". This will stop the recording and will keep any data that has already been recorded. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94100b0aa15070d6f0/10ee05126a3158cbc43b8457209c1e20/stop-trig.png)

### **Searching with a Trigger**

After data have been collected, you can search for events within the data using the trigger. The trigger can be added or modified after data have been collected.

After the trigger has been set up \(see above\) and data have been collected, left and right arrows will appear next to the trigger button on the channel used for the edge or pulse width condition. Click these arrows to advance to sections of the data that satisfy the trigger condition.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/354x135/523fa3ff66c28d7ebf20b02b18ad2556/trigger_next_previous.png)

### **Turning Off the Trigger**

To remove the trigger, deselect the trigger type button, or use the reset button.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/331x110/8234172c9e0192507f89f16f43fae468/turn_off_trigger_2.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/339x112/9e7f28000eb27399d83d5f642d8b5655/turn_off_the_trigger_3.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/349x105/8e07b475fd65cc48bce6b96a224770c9/trigger_reset_button.PNG)

