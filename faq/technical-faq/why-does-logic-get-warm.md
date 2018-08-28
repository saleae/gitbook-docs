# Why Does Logic Get Warm?

## Why Does Logic Get Warm?

The new products—Logic 8 and Logic Pro 8/16—are much higher performance than their predecessors and consume more power. This power has to go somewhere, so it is dissipated as heat.

However, we are planning on having the device power down when inactive. The circuity to do this is already in place \(USB devices are required to be able to sleep\). We just need to add some minor firmware and HDL changes to enable this. After this change, the device will only get warm after a long capture.

This change will be automatically applied to a future software release.

Logic Pro 8 and Logic Pro 16 have already received the first firmware update to this end. When the device is not actively sampling, the current consumption has been significantly reduced to the point where the device should remain or return to room temperature between captures.

