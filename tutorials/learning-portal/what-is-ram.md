# What is RAM? Why Does Logic Use it?

PCs typically contain and use two hardware memory types. That is the _hard disk_ and _RAM_. Because of their inherent properties, they are used for different purposes.

The _hard disk_ is where your programs and files are stored. This memory type will contain much more memory space than RAM, can keep its contents even while powered-off, and is much slower to access its data than RAM. Examples of hard disks include hard disk drives (using a spinning disk), solid-state drives, and USB flash drives.

On the other hand, _RAM_ (short for Random Access Memory) is reserved for programs that are currently running. RAM will contain much less memory space when compared to hard disks, and loses its contents when powered-off. Its advantage is extremely fast access to its data, which is important for currently running programs to run quickly and smoothly.

### Why Does Logic Use RAM to Store Capture Data?

If hard disks contain much more memory space than RAM, then it would make sense for Logic to utilize the hard disk when capturing data, right? Well, not exactly...

Logic captures data at such a fast rate that it requires nearly instant access to PC memory in order to save the incoming data stream properly. If we direct the Logic software to stream its data directly to the hard disk during a data capture, the incoming data would simply overflow and have no where to go since typical hard disk speeds cannot support the speed of incoming data from Logic.

For this reason, Logic currently cannot support continuous capture directly to a file stored on the hard disk. Instead, the data captures reside in RAM until it is saved to the disk via Options -> Save Capture, or when the associated capture tab is closed at the bottom of the software.

### How Much RAM is Needed?

The amount of RAM needed for a data capture is dependent on five factors:

* Number of channels
* Type of channel (analog or digital)
* Sampling rate
* Duration of the capture
* Toggles/sec of incoming digital data

The software will estimate the RAM/memory usage on the device settings popover.

### Analog Data RAM Usage

* RAM usage for analog data depends on (1) the number of analog channels, (2) the analog sampling rate, and (3) the duration of the capture.&#x20;
* Analog data is sampled and stored at a fixed rate. Therefore, its RAM usage will increase if any of the 3 properties above increase.

### Digital Data RAM Usage

* RAM usage for digital data depends on (1) the number of digital channels, (2) toggles/sec of incoming data, and (3) the duration of the capture.&#x20;
* Contrary to analog captures, digital captures will only store data in RAM when a toggle occurs on the digital channel. For this reason, it is typically recommended to sample at the highest digital sampling rate since it will not use any more memory than using a slower digital sampling rate (assuming the same data is captured). Due to this property, keep in mind that capturing very fast data with a large amount of toggles/sec will consume more RAM than digital data that is mostly inactive, keeping the number of digital channels and duration the same.

### What If my RAM is Not Enough?

Besides modifying the capture settings or buying more RAM, our Socket API automation script allows users to break extremely long captures into a series of shorter captures that are saved to the hard disk. You can read more about how to implement this below.

{% content-ref url="../../faq/technical-faq/limitations-with-long-captures.md" %}
[limitations-with-long-captures.md](../../faq/technical-faq/limitations-with-long-captures.md)
{% endcontent-ref %}
