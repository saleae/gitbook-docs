# Automating Long Overnight Captures

### Issues with Long Overnight Captures (Several Hours or More)

The Logic 2 software does not support streaming captured data to disk. Instead, a single capture has to reside in memory until it is saved and closed.&#x20;

Having said that, our software may not be able to capture for several hours in length with great reliability, or your available memory may not support it. From a product testing point of view, we focus most of our attention on captures that are up to 15 minutes in length, though we do occasionally test for up to 24 hours.

Because of this, you may encounter issues when attempting to leave a capture running overnight, or for several days long. As such, we would recommend the workarounds mentioned in this support article.&#x20;

#### Contacting Support

If you'd like to report any issues you run into while capturing data spanning several hours in length or more, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) with the information below.

* A description of the error you are running into, including any error messages.
* Your capture settings (or perhaps share your Capture Preset file)

{% content-ref url="../../user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../../user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

* &#x20;Your Machine ID

{% content-ref url="../../troubleshooting/sharing-your-machine-id.md" %}
[sharing-your-machine-id.md](../../troubleshooting/sharing-your-machine-id.md)
{% endcontent-ref %}

### Reducing Memory Usage of the Software

There are several ways to reduce or manage the memory usage of the software, which may prevent any memory-related limitions you might run into during the capture.

* Reduce the capture duration.
* Reduce the analog sample rate if analog channels are used.
* Save and close captures before taking new ones. After saving the capture (options -> save capture), close it by clicking the 'x' icon on the capture tab.
* Remove LLAs (low level analyzers). They can be added back to the capture later on.

### **Using our Automation API**

Another way of getting around memory limitation issues with long captures is to use our Python Automation API to automate the process of taking several shorter captures, saving them, and then starting more captures. That will allow you to break a single long capture into a series of shorter captures with only small gaps between captures.

The software includes a system for automating normal software interactions such as changing capture settings, starting captures, saving files, or exporting data. Please see our [Python Automation API documentation](https://saleae.github.io/logic2-automation/) for more information and for an example script.

**Sending your Captured Data to External Applications**

Once a capture is complete, the captured data will still reside in the Logic 2 software. In order to access that data from an external application for further processing, you can export that to a file and then load that file into your application. Our [sample Python script here](https://saleae.github.io/logic2-automation/getting\_started.html) provides an example for exporting the raw captured data, as well as the contents of the Data Table, after the capture is complete.

**Known Limitations with the Automation API Approach**

There are several limitations to this approach that you should consider:

* The gaps between captures are unavoidable.
* The captures cannot be appended to each other to produce one extra long capture later. They will stay in separate files.
* The protocol results cannot be accessed in real time. Instead, you must wait for the capture to complete before you can export the protocol results.

#### Reducing Gaps Between Automated Captures

When automating shorter captures, saving them, and then starting more captures afterwards, you may notice large gaps between saving the previous capture, and starting the next capture. This is because the next capture may be waiting on the previous capture to be saved before starting.

In cases like this, we recommend using the Python main thread to perform the captures, and use threads to take care of saving and closing finished captures. Here is an example script which allows you to export, save, and close captures in the background while the next capture is running.

```
from saleae import automation
import os
import os.path
from datetime import datetime
import threading

# Connect to the running Logic 2 Application on port `10430`.
# Alternatively you can use automation.Manager.launch() to launch a new Logic 2 process - see
# the API documentation for more details.
# Using the `with` statement will automatically call manager.close() when exiting the scope. If you
# want to use `automation.Manager` outside of a `with` block, you will need to call `manager.close()` manually.
with automation.Manager.connect(port=10430) as manager:

    # Configure the capturing device to record on digital channels 0, 1, 2, and 3,
    # with a sampling rate of 10 MSa/s, and a logic level of 3.3V.
    # The settings chosen here will depend on your device's capabilities and what
    # you can configure in the Logic 2 UI.
    device_configuration = automation.LogicDeviceConfiguration(
        enabled_digital_channels=[0, 1, 2, 3],
        digital_sample_rate=10_000_000,
        digital_threshold_volts=3.3,
    )

    # Record 5 seconds of data before stopping the capture
    capture_configuration = automation.CaptureConfiguration(
        capture_mode=automation.TimedCaptureMode(duration_seconds=0.5)
    )

    # Start a capture - the capture will be automatically closed when leaving the `with` block
    # Note: We are using serial number 'F4241' here, which is the serial number for
    #       the Logic Pro 16 demo device. You can remove the device_id and the first physical
    #       device found will be used, or you can use your device's serial number.
    #       See the "Finding the Serial Number of a Device" section for information on finding your
    #       device's serial number.

    threads = []
    for i in range(5):
        print(f'starting capture {i}...')

        capture = manager.start_capture(
            device_id='F4241',
            device_configuration=device_configuration,
            capture_configuration=capture_configuration)

        # Wait until the capture has finished
        # This will take about 5 seconds because we are using a timed capture mode
        capture.wait()

        def _worker(cap):
            # Store output in a timestamped directory
            output_dir = os.path.join(
                os.getcwd(), f'output-{datetime.now().strftime("%Y-%m-%d_%H-%M-%S")}-{i}')
            os.makedirs(output_dir)

            # Export raw digital data to a CSV file
            cap.export_raw_data_csv(
                directory=output_dir, digital_channels=[0, 1, 2, 3])

            # Finally, save the capture to a file
            capture_filepath = os.path.join(output_dir, 'example_capture.sal')
            cap.save_capture(filepath=capture_filepath)

            cap.close()
            pass

        thread = threading.Thread(target=_worker, args=(capture, ))
        threads.append(thread)
        thread.start()
    for th in threads:
        th.join()
```
