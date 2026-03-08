When attempting to export your analyzer's decoded data, you may notice the following warning pop up.

<figure><img src="/support-assets/Screen%20Shot%202022-09-16%20at%204.52.08%20PM.png" alt=""><figcaption><p>This analyzer's native export is not supported in Logic 2</p></figcaption></figure>

Currently, 3 pre-installed analyzers have their built-in exports disabled, and can only be exported from the data table. Namely, these are:

* MDIO
* CAN
* LIN

This is because of a technical limitation caused by Logic 2's new ability to run protocol analyzers during a looping capture mode. In the looping mode, we delete old data as new data is recorded, and this includes analyzer results. These 3 analyzers can't export because their export systems can't handle the data deletion.

Instead, we recommend users use the data table export for all protocol analyzers, as this produces a much more flexible format. More information on data table export can be found below:

[Exporting Data](../../logic-software/saving-and-exporting-data/exporting-data.md)



