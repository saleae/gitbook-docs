# Export Data via Socket API

In this article, we show example code specifying the proper parameters for `export_data2()` , which is used for exporting data via Socket API \(our automation utility\). This function comes from a [3rd party Python Wrapper](https://github.com/ppannuto/python-saleae) for Socket API, which we recommend using for automating our software.

{% hint style="info" %}
Note: For exporting data, please use `export_data2().` Currently, `export_data()` is deprecated due to an update that increased the number of export options.
{% endhint %}

### Common Argument Settings

The following sample arguments are taken directly from the export options available in the Logic software's data export window \(Options -&gt; Export data\).

* `time_span=None` will export all time
* `digital_channels=None, analog_channels=None` will export all channels
* `delimiter = 'comma' | 'tab'`
* `timestamp = 'time_stamp' | 'sample_number'`
* `display_base = 'bin' | 'dec' | 'hex' | 'ascii' | 'separate'`
* `analog_format = 'voltage' | 'adc'`

The code for all available argument options can be found in the [saleae.py](https://github.com/ppannuto/python-saleae/blob/master/saleae/saleae.py) library file.

### Exporting to CSV

`s.export_data2("/Users/UserName/Desktop/my_file.csv", digital_channels=[2, 3], analog_channels=None, time_span=[0, 0.1], format='csv', column_headers=False, delimiter='comma', timestamp='time_stamp', display_base='separate', rows_per_change=True)`

`s.export_data2("/Users/UserName/Desktop/my_file.csv", digital_channels=None, analog_channels=[2,3], time_span=[0, 0.1], format='csv', column_headers=True, delimiter='comma', analog_format='voltage')`

### Exporting to MATLAB

`s.export_data2("/Users/UserName/Desktop/my_file.mat", digital_channels=[2, 3], analog_channels=None, time_span=[0, 0.1], format='matlab')`

`s.export_data2("/Users/UserName/Desktop/my_file.mat", digital_channels=[2, 3], analog_channels=[2,3], time_span=[0, 0.1], format='matlab', analog_format='voltage')`

### Exporting to Binary

Note: Either `digital_channels` or `analog_channels` must be set to `'None'`. Binary export does not work when digital and analog channels are combined in a single export.

`s.export_data2("/Users/UserName/Desktop/my_file.bin", digital_channels=[2, 3], analog_channels=None, time_span=[0, 0.1], format='binary', each_sample=True, no_shift=True, word_size=16)`

`s.export_data2("/Users/UserName/Desktop/my_file.bin", digital_channels=None, analog_channels=[2,3], time_span=[0, 0.1], format='binary', analog_format='adc')`

### Exporting to VCD

Note: Only digital channels can support VCD exports.

`s.export_data2("/Users/UserName/Desktop/my_file.vcd", digital_channels=[2, 3], analog_channels=None, time_span=[0, 0.1], format='vcd')`



