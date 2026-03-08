# Changing the Display Radix (Base)

Just about every part of the software that displays a number can display it in a number of display radices. The software supports the following radices:

* Hexadecimal (base 16)
* Decimal (base 10)
* Binary (base 2)
* ASCII (non-displayable characters revert to decimal display, with single quotes)

The display radix can be changed for each individual analyzer added to your capture by clicking the three dots to the right of your analyzer as shown below.

![Setting the Display Radix for an Individual Analyzer](../../../.gitbook/assets/radix.png)

You can also change the display radix by right-clicking on a protocol result above the waveform like in the image below.

<figure><img src="../../../.gitbook/assets/Screenshot 2025-08-11 at 4.27.08 PM.png" alt=""><figcaption><p>Rick-clicking an analyzer result to change the display radix</p></figcaption></figure>

Note that some numbers, such as indexes, might not change radix. This is the case for the DMX-512 analyzer and several other analyzers that use indexes.
