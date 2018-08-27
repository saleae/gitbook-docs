# Latest Beta Release

## Latest Beta Release

{% hint style="info" %}
When using the standalone version of the software, the drivers must be installed manually. Refer to the Driver Install link below for instructions.
{% endhint %}

{% page-ref page="driver-install.md" %}

### Saleae Logic 1.2.29 Beta

We've started releasing beta versions of the software again, starting with 1.2.19. The latest production release is 1.2.18 and can be downloaded [here](https://www.saleae.com/downloads).

**Windows**  
[Logic Setup 1.2.29.exe](http://downloads.saleae.com/logic/1.2.29/Logic+Setup+1.2.29.exe)

**Mac OS X 10.8+**   
[Logic-1.2.29-Darwin.dmg](http://downloads.saleae.com/logic/1.2.29/Logic-1.2.29-Darwin.dmg)

**Linux 64-Bit**  
[http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+\(64-bit\).zip](http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+%2864-bit%29.zip)

**Windows Standalone releases:**

Note: These releases include the newly required Microsoft Visual Studio 2015 runtime. The runtime needs to be installed before the software will be able to run.

**Windows 32-Bit Standalone** [http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+Win+32+Standalone.zip](http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+Win+32+Standalone.zip)

**Windows 64-Bit Standalone** [http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+Win+64+Standalone.zip](http://downloads.saleae.com/logic/1.2.29/Logic+1.2.29+Win+64+Standalone.zip)

If you have any trouble with the 1.2.29 software, please report it. We would like to get any issues resolved before posting this to the main download page.

The release notes can be found below.

{% page-ref page="changelog.md" %}

Older versions of the software can be found below.

{% page-ref page="legacy-software/older-software-releases.md" %}

### Real-Time Display Technical Details

The latest beta software contains a very early release of new real-time display features. We’re working on improving it, but the current implementation has a few limitations.

Since digital and analog data are processed in software before they can be displayed, the performance of the real-time view will depend on the performance of your machine. We’re working on optimizing this for future releases.

First, for analog data display, we recommend disabling "upsampled pipeline" in the software preferences. That increases analog processing performance by a significant margin.

Second, when the software is no longer able to process in real time, a backlog of unprocessed data builds up, and the data available on the screen is no longer the latest information. Lowering sample rates or turning off unused channels will improve performance.

Third, the software can process digital data faster than analog data for any given sample rate. Sometimes, digital will be able to keep up in real time, but analog will fall behind. In these cases, you may not see any analog data if you zoom in, and if you zoom out, you will see it lag behind digital data. In these situations, we recommend lowering the analog sample rate or disabling channels to improve performance.

We’re working on all these issues as well as UI and usage improvements that will take this feature from a very early beta to a production feature.

Generally speaking, a few analog channels at sample rates less than 10 MS/s with the "upsampled pipeline" disabled should be able to keep up in real time on most machines. We hope to increase this to the maximum, 5 analog channels at 50MS/s, through future performance improvements.

Thanks and kind regards,

The Saleae Software Team

