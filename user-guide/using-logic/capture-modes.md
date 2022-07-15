# Capture Modes

### Timer Mode

The timer mode is the simplest mode of data capture. A pre-defined duration is set by the user and the capture will end once the duration is reached. In the example video below, we set the capture duration to 5s. The recording will stop once 5s is reached.

{% embed url="https://vimeo.com/461183310" %}
Timer Mode Capture
{% endembed %}

### Looping Mode

The looping mode allows for a continuous recording into a RAM buffer, the size of which can be set by the user. Once the RAM buffer is filled, old data is deleted while new data arrives, and the capture can continue indefinitely in a continuous loop. When the capture ends, the data can be trimmed down to a certain length via the _Trim data after stopping_ setting, keeping the most recent data.&#x20;

In the example video below, we set the _Memory buffer size_ to 500 MB. Notice that, during the capture, the memory usage does not go above the set _Memory_ value of 500 MB during the continuous recording.

{% embed url="https://vimeo.com/461178867" %}
Looping Mode Capture
{% endembed %}

### Trigger Mode

#### Edge & Pulse Triggering

The trigger mode will continuously record data until a digital trigger is found on a single channel. The four available types of digital triggers are Rising Edge, Falling Edge, High Pulse, and Low Pulse.

![Trigger Mode Capture Settings](../../.gitbook/assets/screen-shot-2020-09-23-at-6.25.23-pm.png)

#### Additional Channel State Triggering

In addition to the edge/pulse trigger which is set on a single digital channel, you can require other digital channels to be either HIGH or LOW to trigger a capture.

![Digital Channel State Conditions for Trigger](../../.gitbook/assets/screen-shot-2020-09-23-at-6.32.26-pm.png)

#### Memory Buffer Setting

In Trigger mode, while waiting for the trigger during a capture, Logic will continue using the PC's RAM in a continuous loop. The Memory buffer size setting limits the amount of RAM usage for this process. Similar to Looping mode, once the RAM buffer is filled, old data is deleted while new data arrives, and the capture will continue indefinitely until the trigger condition is met.

Please make sure to size the "Memory buffer size" appropriately from within the capture settings panel, such that your PC does not run out of memory while waiting for a trigger.

![Memory Buffer Size Setting](../../.gitbook/assets/screen-shot-2020-11-02-at-3.53.54-pm.png)

#### Capture Duration Before and After Trigger

The data that was captured before the trigger can be trimmed down in length. This allows you to specify how much of the data before the trigger is kept when the capture ends.

![Trim pre-trigger data](../../.gitbook/assets/trim-pre-trigger-data.png)

You can also specify the duration at which the software will continue recording data once the trigger condition is met.

![Capture duration after trigger](<../../.gitbook/assets/duration-after-trigger (1).png>)

#### Jumping to the Trigger Point

Two options exist for jumping to a trigger point after your capture is complete:

* Via a keyboard shortcut (On Windows it is Ctrl+J)
* Via clicking on the trigger icon above your capture (shown below)

![Clicking on the Trigger icon will jump the view to the trigger point](../../.gitbook/assets/screen-shot-2021-09-08-at-8.56.14-pm.png)

At the moment, we don't have a way of automatically jumping to trigger point after a capture. If this is a feature you would like added, please vote for it in the idea post [here](https://ideas.saleae.com/b/feature-requests/jump-to-trigger-point-after-capture/)!

### Trigger View - Triggering on a Protocol Result

Navigate to the "Analyzers" panel and enable "Trigger View." From there, select the protocol analyzer you would like to trigger on, as well as the query value and holdoff time. HLA results can also be triggered on via this method.

{% hint style="info" %}
Please note that Trigger View is only supported for the analyzers listed in the support article link below (Titled _HLA - Analyzer Frame Format_). This means that custom analyzers, including pre-installed analyzers that are not listed, will not work with Trigger View.

This is due to our Trigger View relying on a new low level analyzer framing format that we call “frame v2.” Only a handful of analyzers support “frame v2” at the moment, and these are the analyzers that work with Trigger View. We eventually want to extend Trigger View support to all analyzers in the future. Feel free to vote on this feature request [here](https://ideas.saleae.com/b/feature-requests/trigger-view-support-for-more-analyzers/)!
{% endhint %}

{% content-ref url="../../extensions/analyzer-frame-types/" %}
[analyzer-frame-types](../../extensions/analyzer-frame-types/)
{% endcontent-ref %}

{% embed url="https://vimeo.com/489642936" %}
Trigger View - SPI Example
{% endembed %}

![Triggering on a protocol frame](../../.gitbook/assets/screen-shot-2020-12-04-at-3.10.17-pm.png)

## Logic 1.x

If you are using the older Logic 1.x software, the following images and instructions apply.

### **Using the Trigger**

The trigger can be used to start capturing data after a specified digital event occurs. Any data captured before the trigger event will also be included in the capture as specified by the "Pre-trigger buffer size" setting under the Preferences window.

![Pre-trigger Buffer Size Setting](../../.gitbook/assets/screen-shot-2020-11-02-at-3.58.45-pm.png)

Two types of triggers are supported: Trigger on Edge and Trigger on Pulse Width. The trigger can be used to trigger on an event from any channel. To move the event trigger to a different channel, first remove it using the steps at the bottom of this page, and then add it to a different channel.

### **Trigger on Edge**

To trigger on an edge (high to low, or low to high digital transition), click the +Trigger button on the desired channel and select the positive or negative edge.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/202x168/811c495d226f7527f9f41cbc896f66a1/trigger\_select.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/346x135/c064b003ab6793aa7d480938900a43d4/Trigger\_-\_set\_edge.png)

If desired, you can also require other channels to be either high or low during a previously selected edge. After selecting an edge, note that other channels will display a button with an "X" (indicates "don't care").

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/196x43/cddeffe2624f84114cf1ea30136dae71/trigger\_dont\_care.png)

To require a high or low, click this button and select high or low.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/345x107/01f2e900d077cc35b94471b3978b487d/trigger\_set\_state.png)

### **Trigger on Pulse Width**

You can also trigger on a pulse width condition where a particular channel is high or low for a specified amount of time.

To add a pulse width trigger, click the +Trigger button on the desired channel and select the positive or negative edge. Next, enter the desired time range to search for.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/350x135/f4a00deb2a8d2e729776d912f735b361/trigger\_set\_pulse\_width.png)

If desired, you can also require other channels to be either high or low during a previously selected pulse. After selecting an edge, note that other channels will display a button with an "X" (indicates "don't care"). To require a high or low, click this button and select high or low.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/352x151/429e3cc41471631419ddd1cf5ad1c63b/trigger\_set\_state\_with\_pulse.png)

### **Start Searching for the Trigger**

After setting the trigger, you can click the _Start_ or _Start Simulation_ button to begin searching for the trigger. If and when the trigger condition is identified, data collection will start.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/188x47/a00144b490ff4cfc96cf7e509fdbdd28/click\_start.png)

### **Skipping the Trigger**

You can skip the trigger by clicking "skip trigger" if you would like to force the capture to begin without the trigger condition being met.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94100b0aa15070d6f0/bac0916a2dcee09536fdfcbef7359b95/skip-trig.png)

### **Stopping the Capture**

If the trigger condition is identified, data collection will start. You can stop the capture at any point in time by clicking "Stop". This will stop the recording and will keep any data that has already been recorded.&#x20;

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c94100b0aa15070d6f0/10ee05126a3158cbc43b8457209c1e20/stop-trig.png)

### **Searching with a Trigger**

After data have been collected, you can search for events within the data using the trigger. The trigger can be added or modified after data have been collected.

After the trigger has been set up (see above) and data have been collected, left and right arrows will appear next to the trigger button on the channel used for the edge or pulse width condition. Click these arrows to advance to sections of the data that satisfy the trigger condition.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/354x135/523fa3ff66c28d7ebf20b02b18ad2556/trigger\_next\_previous.png)

### **Turning Off the Trigger**

To remove the trigger, deselect the trigger type button, or use the reset button.

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/331x110/8234172c9e0192507f89f16f43fae468/turn\_off\_trigger\_2.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/339x112/9e7f28000eb27399d83d5f642d8b5655/turn\_off\_the\_trigger\_3.png)

![](https://trello-attachments.s3.amazonaws.com/57215c94100b0aa15070d6f0/349x105/8e07b475fd65cc48bce6b96a224770c9/trigger\_reset\_button.PNG)
