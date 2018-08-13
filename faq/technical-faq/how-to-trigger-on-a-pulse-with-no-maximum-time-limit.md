# How to Trigger On a Pulse with No Maximum Time Limit

The pulse width trigger in the Saleae Logic software has extra features to allow it to be used to detect events other than pulses.

Specifically, the maximum pulse length time can be set to "n/a", and in that mode, the trigger will automatically fire when it detects the following: 1. The pulse has started \(e.g., a negative edge occurs while a negative pulse trigger is active\). 2. The channels maintain state for the minimum trigger pulse width time.

The trigger will immediately fire at that point. It will not wait for the pulse to end with another edge if the maximum pulse width time is set to "n/a".

![trigger N/A](https://trello-attachments.s3.amazonaws.com/563a6176b13bdba98c89bfa0/153x117/6a134b80d59d0463e9dd8c0864077262/trigger_na.png)

This can be particularly useful to trigger when a process stops. Previously, the pulse width trigger required an ending edge to trigger, even if there was no maximum pulse width time. However, to support this, the trigger was modified, and the "n/a" option was added.

Note: The pulse width trigger still requires that initial edge. If you're just looking for a period of inactivity, it will still work as long as there is some activity in your capture. If there is no activity in the capture, just turn off the trigger and capture.

