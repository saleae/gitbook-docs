# Why is the Length of my Capture Incorrect?

In the Timer Capture Mode, the Logic 2 software will typically capture slightly more data than what is specified under the "Stop recording after" setting.&#x20;

For example:

* "Stop recording after" 100 ms may capture around 132 ms
* "Stop recording after" 1,000 ms may capture around 1,033 ms

<figure><img src="../../../.gitbook/assets/Screenshot 2023-06-12 at 2.16.27 PM.png" alt=""><figcaption><p><br>Capture setting set to stop recording after 1 s</p></figcaption></figure>

This is because our Logic devices usually capture data in buffers of 1/30th of a second (or about 33 ms), sometimes smaller. The capture time specified is then rounded up to this number or slightly more than this number.

When using a trigger, it is possible that the software will even record more than this number of post-trigger samples if the trigger processing process gets backlogged and is unable to run in real time.

Having said that, you can specify a "Trim" value after the capture is complete, which will trimg your capture down to the length specified, while keeping the most recent data. The trim operation will be exact, unlike the "Stop recording after" value above.

<figure><img src="../../../.gitbook/assets/Screenshot 2023-06-12 at 2.20.39 PM.png" alt=""><figcaption><p>Trim data after stopping</p></figcaption></figure>
