# Socket API - Automation

The Socket API scripting utility allows users to programmatically configure our software and trigger captures.

### Before Getting Started - Setup the Software

* Check that you are using the latest version of the software below.

{% page-ref page="../logic-software/latest-beta-release.md" %}

* We highly recommend suppressing notifications and error messages while running your automation script. These notifications may block normal operation and can be suppressed by starting the application with the command line option `-disablepopups` 
* Next, we must enable the scripting socket server. Open Options Menu at the top of the software.
* Select Preferences
* Under the Developer Tab, check the box to enable socket server  ![](https://trello-attachments.s3.amazonaws.com/5615390cb22fd44d4ccedc6f/396x306/67677307eaf2bd57d85b18c834c92149/check_box.png)
* Save Changes
* Accept firewall changes if the OS requests it

### Automation Method \#1 - Python

For simple automation requirements, we suggest using our [Python Sample Application](https://github.com/saleae/python-saleae-cli). This is a basic command line utility to automate the Saleae Logic software, which can be used to automatically take a series of shorter captures over an extended time period with basic export functions.

### Automation Method \#2 - C\# Wrapper

For more complex automation requirements, you can refer to our C\# Wrapper below.

[Socket Interface C\# Example Application and Documentation](https://github.com/saleae/SaleaeSocketApi)

### Third-Party Implementations

Python wrapper:

[https://github.com/ppannuto/python-saleae](https://github.com/ppannuto/python-saleae)

[https://pypi.python.org/pypi/saleae](https://pypi.python.org/pypi/saleae)

C\# data logging UI:

[https://github.com/quarkng/SaleaeLogger](https://github.com/quarkng/SaleaeLogger)

C\# logging console application:

[https://github.com/DuckPaddle/LumberJack-for-Saleae](https://github.com/DuckPaddle/LumberJack-for-Saleae)

If you would like to share your application, feel free to send us a link to it on any repository hosting provider, and we can share that link here.

### **Command Line Option**

For automated environments, you can launch the Logic software with a `-socket` command line option to cause the socket server to be enabled by default.

### Which Export Options are Available via Socket API?

The Socket API currently supports the raw export feature and the protocol-specific export feature. However, the socket API does not yet support exporting the protocol search results.

