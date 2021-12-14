# A Protocol Analyzer Produces Unexpected Results

If you suspect that there is a problem with the protocol analyzer, please report it.

First, check below in the common issues section.

Once you have finished reviewing the common issues section and the issue still persists, please submit the following information.

**Instructions: Submit the Following Information to Support**

1. The name of the protocol analyzer you are using
2. The selected option for each analyzer setting (baud rate, etc.)
3. A copy of the capture where you are seeing the error. You can save a capture from the main options menu -> save capture.
4. A screenshot and description of the issue and a description of what you expect to see.
5. If the issue only affects exported data, include a copy of the exported data.

Before submitting the issue, we suggest that you also test the analyzer in simulation mode. That will cause the software to produce sample data for that analyzer. You can compare the sample data to your own, which might help explain the issue. To generate simulation data, simply remove any attached logic analyzer(s). Then make sure you have an analyzer added on the capture tab with the settings you were using. Then press Start Simulation. That will produce simulated protocol data.

Finally, submit all this to [support](https://contact.saleae.com/hc/en-us/requests/new). Our online form supports attachments. If the capture is too large to attach, even compressed, please write support, and we can arrange a dropbox upload link.

**Common Causes of Protocol Result Errors**

*   Incorrect baud rate setting

    &#x20; For asynchronous protocols such as async serial, CAN, HDLC, LIN, Manchester, and ModBus, the bit rate needs to be set accurately in order for the analyzer to produce valid results. Only async serial includes an autobaud feature, and even that is not necessarily accurate.
*   Other incorrect analyzer settings

    &#x20; Some analyzers have a large number of settings that need to be set properly in order for valid results to be produced. Common issues include wrong clock phase/polarity settings in the SPI analyzer, not using inverted mode properly in the async serial analyzer, and not setting the signed/unsigned parameter correctly in I2S.
*   Glitches near clock edges

    &#x20; Looking at a clocked (synchronous) protocol? If you see missing decoded words or the byte alignment gets offset (words are not starting/stopping on the correct bit), there could be single sample wide glitches appearing near the clock edges. Check all the edges to see if they have clock arrow markers on them. If one clock edge is missing the arrow marker, zoom in on that edge as far as it will go. You might find two clock edges right next to each other, causing an offset in the results. That can be resolved using the software glitch filter below.

{% content-ref url="../user-guide/using-logic/software-glitch-filter.md" %}
[software-glitch-filter.md](../user-guide/using-logic/software-glitch-filter.md)
{% endcontent-ref %}

*   Logic analyzer capture begins after communication starts, and protocol analyzer is unable to re-synchronize.

    &#x20; Some protocols with specific packet structures, such as CAN or 1-wire, require that the beginning of a packet be recorded before the rest of the packet's contents are decoded. The analyzer in this case may not decode any results until the second packet in the capture.
*   End of packet is cut off.

    &#x20; In some cases, the entire packet needs to be present in order for the decoding to work. In most of these cases, the analyzer may have settings for lower levels of decoding, such as byte level instead of packet level. The Atmel SWI analyzer and USB analyzer both have features like this.
