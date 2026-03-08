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

![Trigger Mode Capture Settings](<../../../.gitbook/assets/Screen Shot 2020-09-23 at 6.25.23 PM.png>)

#### Additional Channel State Triggering

In addition to the edge/pulse trigger which is set on a single digital channel, you can require other digital channels to be either HIGH or LOW to trigger a capture.

![Digital Channel State Conditions for Trigger](<../../../.gitbook/assets/Screen Shot 2020-09-23 at 6.32.26 PM.png>)

#### Memory Buffer Setting

In Trigger mode, while waiting for the trigger during a capture, Logic will continue using the PC's RAM in a continuous loop. The Memory buffer size setting limits the amount of RAM usage for this process. Similar to Looping mode, once the RAM buffer is filled, old data is deleted while new data arrives, and the capture will continue indefinitely until the trigger condition is met.

Please make sure to size the "Memory buffer size" appropriately from within the capture settings panel, such that your PC does not run out of memory while waiting for a trigger.

![Memory Buffer Size Setting](<../../../.gitbook/assets/Screen Shot 2020-11-02 at 3.53.54 PM.png>)

#### Capture Duration Before and After Trigger

The data that was captured before the trigger can be trimmed down in length. This allows you to specify how much of the data before the trigger is kept when the capture ends.

![Trim pre-trigger data](../../../.gitbook/assets/Trim-Pre-Trigger-Data.png)

You can also specify the duration at which the software will continue recording data once the trigger condition is met.

![Capture duration after trigger](../../../.gitbook/assets/Duration-after-trigger.png)

#### Jumping to the Trigger Point

Two options exist for jumping to a trigger point after your capture is complete:

* Via a keyboard shortcut (On Windows it is Ctrl+J)
* Via clicking on the trigger icon above your capture (shown below)

![Clicking on the Trigger icon will jump the view to the trigger point](<../../../.gitbook/assets/Screen Shot 2021-09-08 at 8.56.14 PM.png>)

At the moment, we don't have a way of automatically jumping to trigger point after a capture. If this is a feature you would like added, please vote for it in the idea post [here](https://ideas.saleae.com/b/feature-requests/jump-to-trigger-point-after-capture/)!

### Trigger View - Triggering on a Protocol Result

Navigate to the "Analyzers" panel and enable "Trigger View." From there, select the protocol analyzer you would like to trigger on, as well as the query value and holdoff time. HLA results can also be triggered on via this method.

{% hint style="info" %}
Please note that Trigger View is only supported for the analyzers listed in the support article link below (Titled _HLA - Analyzer Frame Format_). This means that custom analyzers, including pre-installed analyzers that are not listed, will not work with Trigger View.

This is due to our Trigger View relying on a new low level analyzer framing format that we call “frame v2.” Only a handful of analyzers support “frame v2” at the moment, and these are the analyzers that work with Trigger View. We eventually want to extend Trigger View support to all analyzers in the future. Feel free to vote on this feature request [here](https://ideas.saleae.com/b/feature-requests/trigger-view-support-for-more-analyzers/)!
{% endhint %}

{% content-ref url="../extensions-apis-and-sdks/extensions/analyzer-frame-types/" %}
[analyzer-frame-types](../extensions-apis-and-sdks/extensions/analyzer-frame-types/)
{% endcontent-ref %}

{% embed url="https://vimeo.com/489642936" %}
Trigger View - SPI Example
{% endembed %}

![Triggering on a protocol frame](<../../../.gitbook/assets/Screen Shot 2020-12-04 at 3.10.17 PM.png>)
