# How Can I Stop a Capture or Close the Software from the Socket API or the Command Line?

Yes, the socket API has a command to stop a capture: "STOP\_CAPTURE". This is documented in the socket API documentation.

However, there is no command to close the software from the socket. Forcefully closing the software with a kill command risks leaving the device in an invalid state or corrupting the settings.xml file and is not recommended.

To close the software on Windows, we recommend using this console command:

```text
taskkill /im logic.exe
```

This termination method causes other programs like Word or Notepad to prompt the user to save their work first, indicating that it does not send an immediate kill signal to the process. However, we were unable to reproduce the negative effects of terminating the process, so we do not yet have confirmation that it works significantly better for our application. If you use this command and notice an improvement in behavior, please let us know.

If you are having trouble safely closing the application on OS X or Linux, please contact support.

