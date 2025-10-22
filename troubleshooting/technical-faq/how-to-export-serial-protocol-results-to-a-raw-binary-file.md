# How to Export Serial Protocol Results to a Raw Binary File

The async serial analyzer in the Saleae software only supports one export option. That export mode creates a text file with comma-separated values that are intended to be easy to open with Excel.

If you would prefer to export a binary file whose contents are strictly the values decoded from the serial protocol analyzer, without timestamps or other metadata, that can be accomplished by using a utility to convert from the csv export format to a binary file.

1. Change the display radix to hexadecimal. Instructions in the link below this list.
2. Export the serial analyzer results using the option on the serial analyzer's settings menu. Instructions in the link below this list.
3.  Download and extract the SaleaeUtility release from GitHub [here](https://github.com/Marcus10110/SaleaeUtilityCore/releases/tag/1.0.0).

    &#x20;Note: Currently, the release only contains the Windows runtime. Please write in if you need Linux or Mac support.
4.  Run SaleaeUtility.cmd from the command line with two arguments: the input csv file and the output binary file.

    &#x20;SaleaeUtility.cmd \path\to\input\file.csv \path\to\output\file.bin
5. Done!

{% content-ref url="changing-the-display-radix.md" %}
[changing-the-display-radix.md](changing-the-display-radix.md)
{% endcontent-ref %}

{% content-ref url="../../user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../../user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

