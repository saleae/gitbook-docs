# How Can I Compare a I2S Audio Recording to an Existing Audio File?

## How Can I Compare a I2S Audio Recording to an Existing Audio File?

Once you have captured I2S audio data and have configured the I2S protocol analyzer successfully, you will need to export the I2S protocol results to a CSV file. You will then need to convert the reference WAV file to CSV. Once both the capture and the reference file are in the CSV format, they can be compared using Excel.

There are many ways to convert a WAV file to a CSV file, and vice versa. If you are using MATLAB, there are built-in functions for this. There are also some examples of this online in a number of languages.

* There is a standard python library for handling WAV files: [https://docs.python.org/2/library/wave.html](https://docs.python.org/2/library/wave.html)
* Sample using the library to convert WAV to CSV: [https://gist.github.com/Pretz/1773870](https://gist.github.com/Pretz/1773870)
* How to read a WAV file in python: [http://stackoverflow.com/questions/2060628/how-to-read-wav-file-in-python](http://stackoverflow.com/questions/2060628/how-to-read-wav-file-in-python)

In practice, this may prove difficult, especially if the beginning of the recorded I2S audio data does not correspond to the beginning of the WAV file. You may want to convert the captured data to a WAV file and then compare the wave shapes using audio editing software such as Audacity.

If the sample rates are not matched between the files, I would recommend using MATLAB, if possible, to perform resampling or other filtering or transforms required.

