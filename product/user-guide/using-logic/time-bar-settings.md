# Time Bar Settings

The time bar, located at the top of the software, helps with visualizing the time at which events occur in your capture. Right-clicking on the time bar will allow further configuration options.

![](<../../../.gitbook/assets/Screen Shot 2021-04-02 at 2.32.18 PM.png>)

### Setting the Time Relative to Events

The time point at which t=0s occurs can be configured to the following events

* **Start of Capture**: Sets the start of the capture as t=0s
* **Digital Trigger**: In a digital triggered capture, this sets the point at which the digital trigger occurs as t=0s
* **Analyzer Trigger**: If the trigger was the result of an Analyzer Trigger (located under the Analyzers panel > Trigger View), then the point at which the trigger occurred will be t=0s.
* **Timing Marker**: If any timing markers are present, then the selected timing marker will be set as t=0s. As an alternative, you can also right-click on your timing marker and select "Set as t0" in the pop up menu.

### Wall Clock Format

* **Wall Clock Time**: Changes the time format to your OS wall clock

{% hint style="info" %}
The Wall Clock Time format setting will only show up when you pan the capture all the way to the left (i.e. at the beginning of the capture). When you are zoomed in anywhere else in the capture, the wall clock time will not appear.

We certainly need to improve the way this feature works in such a way to avoid this confusion. If you have any issues with the way it's implemented now, feel free to vote for improvements [here](https://ideas.saleae.com/b/feature-requests/wall-clock-time-seemingly-doesnt-work)!
{% endhint %}

![Scroll to the beginning of capture to see Wall Clock Time](<../../../.gitbook/assets/Screen Shot 2021-04-21 at 5.14.57 PM.png>)

### Time Preferences

The Time Preferences may also be opened for further customization on the time bar behavior.

![Time Preferences Window](<../../../.gitbook/assets/Screen Shot 2021-04-02 at 2.41.25 PM.png>)



