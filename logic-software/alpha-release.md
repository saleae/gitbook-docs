# Alpha Release

Hello! Alpha releases are in-progress builds of the Logic software while new features are largely incomplete. This allows us to get incremental feedback while we're still far from what we would consider a polished, stable release. The alpha release software is not meant for intense use. We recommend using the production or beta release for actual work.

### What's going on?

For the last few months, we've been hard at work on several areas of the software.

**The HTML UI migration**

We're working on migrating the UI of the application from the C++ framework we've used in the past to a HTML & javascript UI. This makes it easy to develop cross platform user interfaces while also allowing us to use the most modern UI development ecosystem available. The back end of the application, everything from device communication and data capture to processing and rendering is still done in C++ of course.

**New data processing back end**

Although this won't be immediately obvious to users, and is not present in the 1.2.30 release, we have been working all year on a new data processing back end for the Logic software. We'll release more information about this as we slowly start to integrate it into the software.

### Saleae Logic 1.2.30 Alpha

We're still working on the Windows packaging of the 1.2.30 alpha release, but in the mean time, here are the MacOS and Linux releases.

[https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-MacOS.dmg](https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30-MacOS.dmg)

[https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30.AppImage](https://downloads.saleae.com/betas/1.2.30/Logic-1.2.30.AppImage)

Google Chrome needs to be installed for the html UI to work. If the application is unable to locate Google Chrome, the web interface will not be displayed.

**What's different about 1.2.30?**

This release does not contain new features. Instead it includes a very rough integration of the first parts of the new HTML UI into the existing application. We plan to ship a hybrid HTML & C++ UI for the next few releases as we continue to implement the HTML UI. This release includes the start button and the capture progress panel as HTML components. The new components are rendered in a browser window external to the application for now - eventually this will be a smooth experience.

It also includes the foundation of a new application state management system.

Even this page is a work in progress. Feel free to send feedback on the Alpha release to Saleae support.

Thanks and kind regards,

Mark Garrison & the Saleae team

