# How to Manage Protocol Analyzers when Using the Socket API

## How to Manage Protocol Analyzers when Using the Socket API

The socket API can be used to automate the process of taking a capture, saving it, and exporting protocol results. However, it cannot be used to add, remove, or configure protocol analyzers.

In order to manage protocol analyzers using the socket API, \*.logicsettings files must be used.

_.logicsettings and_ .logicdata files can be loaded using the Socket API through the LOAD\_FROM\_FILE command. The LOAD\_FROM\_FILE command can be used to open a file through the socket.

The simplest way to use protocol analyzers and the socket API is to simply manually set up the software with all settings and analyzers before starting the automation application.

However, if it is necessary to switch between different protocol analyzers or change analyzer settings, it can be done by creating one \*.logicsettings file for each configuration. Then, the automation application can load the correct settings file before executing the export command.

Unfortunately, there is no way to edit the settings individually. If you need to edit one setting and it's not possible to produce a complete set of _.logicsettings files for every scenario, there is one other possible option. The_ .logicsettings files are saved in a binary format, but each analyzer stores its settings in a plain ASCII string inside of the settings file. Look for the name of the analyzer using a text editor like Notepad++, After the name \(and several non-displayable characters\) you will find a string, possibly like this one:

```text
[22 serialization::archive 10 25 SaleaeAsyncSerialAnalyzer 0 21 19986 0 1 9600 8 1 0 1 0 0 0
```

The analyzer settings are saved in that string. You can either save several \*.logicsettings files to guess which value corresponds to which setting, or you can download the source code to all of the analyzers below:

{% page-ref page="../../saleae-api-and-sdk/protocol-analyzer-sdk/" %}

See AnalyzerSettings::SaveSettings\(\) for details. Be careful when editing the file from your application to preserve all other characters in the file. Also, the length of the string might be serialized in binary, so changing the length of the string could be difficult.

