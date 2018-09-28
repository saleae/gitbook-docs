# Alpha Release

Hello! Alpha releases are in-progress builds of the Logic software while new features are largely incomplete. This allows us to get incremental feedback while we're still far from what we would consider a polished, stable release. The alpha release software is not meant for intense use. We recommend using the production or beta release for actual work.

### What's going on?

For the last few months, we've been hard at work on several areas of the software.

**The HTML UI migration**

We're working on migrating the UI of the application from the C++ framework we've used in the past to a HTML & javascript UI. This makes it easy to develop cross platform user interfaces while also allowing us to use the most modern UI development ecosystem available. The back end of the application, everything from device communication and data capture to processing and rendering is still done in C++ of course.

**New data processing back end**

Although this won't be immediately obvious to users, and is not present in the 1.2.30 release, we have been working all year on a new data processing back end for the Logic software. We'll release more information about this as we slowly start to integrate it into the software.

Google Chrome needs to be installed for the html UI to work. If the application is unable to locate Google Chrome, the web interface will not be displayed.

### Saleae Logic 1.2.31 Alpha

Windows 64 bit:

[https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31-win64.zip](https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31-win64.zip)

MacOS:

[https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31-MacOS.dmg](https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31-MacOS.dmg)

Linux 64 bit:

[https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31.AppImage](https://downloads.saleae.com/betas/1.2.31/Logic-1.2.31.AppImage)

**What's different about 1.2.31?**

1.2.30 included just the very first HTML component, but no new data processing back end. 1.2.31 adds a few new back-end components, mainly to support new analog data storage and rendering. These were added to a new layer of the application, along side the existing implementation. It will be a while before we're able to finally remove the previous data processing system.

This release also includes new analog graphs in the new UI, including the ability to pan and zoom analog channels up and down!

We just got this working yesterday, and it's far from polished - and it's not particularly stable, for that matter. expect the occasional crash, and a common problem is scrolling the analog data off-screen. We're still working on everything you see in this release.

Lastly, we still need to swap out part of the processing system - this implementation burns CPU time pretty hard. We should be able to wrap that up in a few more days.

There are plenty of other issues we could mention here, like changing tabs might break the new UI, and that it doesn't actually delete any analog data you've recorded until the application exits. It's definitely Alpha. We're posting it because we're excited about it and we hope that you might enjoy getting a sneak peak at what we're building next!

### Saleae Logic 1.2.30 Alpha

Windows 64 bit:

[https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-win64.zip](https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-win64.zip)

MacOS:

[https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-MacOS.dmg](https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-MacOS.dmg)

Linux 64 bit:

[https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30.AppImage](https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30.AppImage)

**What's different about 1.2.30?**

This release does not contain new features. Instead it includes a very rough integration of the first parts of the new HTML UI into the existing application. We plan to ship a hybrid HTML & C++ UI for the next few releases as we continue to implement the HTML UI. This release includes the start button and the capture progress panel as HTML components. The new components are rendered in a browser window external to the application for now - eventually this will be a smooth experience.

It also includes the foundation of a new application state management system.

Even this page is a work in progress. Feel free to send feedback on the Alpha release to Saleae support.

Thanks and kind regards,

Mark Garrison & the Saleae team

