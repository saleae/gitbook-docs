# Why is the Length of my Capture Incorrect?

## Why is the Length of my Capture Incorrect?

The Saleae logic devices usually capture data in buffers of 1/30th of a second \(or about 33 ms\), sometimes smaller. The capture time specified is then rounded up to this number.

When using a trigger, it is possible that the software will even record more than this number of post-trigger samples if the trigger processing process gets backlogged and is unable to run in real time.

It is not possible to trim the capture in length directly. However, when exporting raw data, it is possible to limit the range of time to export.

It is not possible to trim the export range for the normal protocol export. But it is possible to trim the range of time for the protocol search results, which can then be exported.

