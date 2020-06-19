# Converting I2S/PCM Captures into Audio

### Converting Logic Captures into WAV

Unfortunately, our software does not natively support this feature. Currently, a 3rd party tool exists called [PCM2Wav](https://github.com/roel0/PCM2Wav-py), which can help convert Logic captures into WAV files. We did not originally develop this utility, and therefore, It is best advised to contact the original author in case you run into any issues.

In addition, the I2S analyzer source code is available, in case anyone would like to try implementing their own version using our Protocol Analyzer SDK below.

{% page-ref page="../../saleae-api-and-sdk/protocol-analyzer-sdk/" %}

### Comparing an I2S/PCM Capture with an Existing Audio File

Once you have captured I2S audio data and have configured the I2S protocol analyzer successfully, you will need to export the I2S protocol results to a CSV file. You will then need to convert the reference WAV file to CSV. Once both the capture and the reference file are in the CSV format, they can be compared using Excel.

There are many ways to convert a WAV file to a CSV file, and vice versa. If you are using MATLAB, there are built-in functions for this. There are also some examples of this online in a number of languages.

* There is a standard python library for handling WAV files: [https://docs.python.org/2/library/wave.html](https://docs.python.org/2/library/wave.html)
* Sample using the library to convert WAV to CSV: [https://gist.github.com/Pretz/1773870](https://gist.github.com/Pretz/1773870)
* How to read a WAV file in python: [http://stackoverflow.com/questions/2060628/how-to-read-wav-file-in-python](http://stackoverflow.com/questions/2060628/how-to-read-wav-file-in-python)

In practice, this may prove difficult, especially if the beginning of the recorded I2S audio data does not correspond to the beginning of the WAV file. You may want to convert the captured data to a WAV file and then compare the wave shapes using audio editing software such as Audacity.

If the sample rates are not matched between the files, I would recommend using MATLAB, if possible, to perform resampling or other filtering or transforms required.

