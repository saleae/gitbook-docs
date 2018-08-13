# How to Export Serial Protocol Results to a Raw Binary File

The async serial analyzer in the Saleae software only supports one export option. That export mode creates a text file with comma-separated values that are intended to be easy to open with Excel.

If you would prefer to export a binary file whose contents are strictly the values decoded from the serial protocol analyzer, without timestamps or other metadata, that can be accomplished by using a utility to convert from the csv export format to a binary file.

1. Change the display radix to hexadecimal.

    [https://trello.com/c/rNmkwkmP](https://trello.com/c/rNmkwkmP)

2. Export the serial analyzer results using the option on the serial analyzer's settings menu. 

    Details here: [https://trello.com/c/7zCKDekD](https://trello.com/c/7zCKDekD)

3. Download and extract the SaleaeUtility release from GitHub [here](https://github.com/Marcus10110/SaleaeUtilityCore/releases/tag/1.0.0).

    Note: Currently, the release only contains the Windows runtime. Please write in if you need Linux or Mac support.

4. Run SaleaeUtility.cmd from the command line with two arguments: the input csv file and the output binary file.

    SaleaeUtility.cmd \path\to\input\file.csv \path\to\output\file.bin

5. Done!

