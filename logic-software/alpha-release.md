# Alpha Release

Hello! Alpha releases are in-progress builds of the Logic software while new features are largely incomplete. This allows us to get incremental feedback while we're still far from what we would consider a polished, stable release. The alpha release software is not meant for intense use. We recommend using the production or beta release for actual work.

### What's going on?

For the last few months, we've been hard at work on several areas of the software.

**The HTML UI migration**

We're working on migrating the UI of the application from the C++ framework we've used in the past to a HTML & javascript UI. This makes it easy to develop cross platform user interfaces while also allowing us to use the most modern UI development ecosystem available. The back end of the application, everything from device communication and data capture to processing and rendering is still done in C++ of course.

**New data processing back end**

Although this won't be immediately obvious to users, and is not present in the 1.2.30 release, we have been working all year on a new data processing back end for the Logic software. We'll release more information about this as we slowly start to integrate it into the software.

Google Chrome needs to be installed for the html UI to work. If the application is unable to locate Google Chrome, the web interface will not be displayed.

### Saleae Logic 1.2.36 Alpha

Windows 64 bit:

[https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36-win64.zip](https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36-win64.zip)

MacOS:

[https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36-MacOS.dmg](https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36-MacOS.dmg)

Linux 64 bit:

[https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36.AppImage](https://downloads.saleae.com/betas/1.2.36/Logic-1.2.36.AppImage)

#### What's new in 1.2.36?

There are two main additions in 1.2.36 alpha. First, the preferences screen now includes a new tab for device selection, which displays all attached Saleae devices. \(In simulation mode, 3 devices are attached\). It also allows the user to set custom names for each device \(not currently persisted run to run, we'll get to that later\) and it also allows the device LED to be changed.

Second, this release includes a new mouse interaction implementation. It's not quite done yet, but the core functionality is there. Now click & drag pan interactions end with momentum, and the general interaction implementation is higher performance. We'll be tuning those interactions and adding keyboard navigation shortly.

The release also includes a number of small improvements here and there. 1.2.36 has some rough edges, but these are documented and will be cleaned up soon. 

On the backend, we're working on digital support, which is going well - however there is still a lot of work to finish before we can release it. We also need to make a few more changes to the analog rendering system, the next iteration of it will be significantly faster and should have the rest of the rough edges cleaned up.

#### What happened to 1.2.35?

Like 1.2.33, we built 1.2.35 with the original UI to address an issue that affects low-end Intel Pentium and Celeron processors. Once we have confirmation that the underlying issue is fixed, we'll likely release this as the official beta version. These releases are actually just the alpha software launched with the `--legacy` option enabled by default.

### Saleae Logic 1.2.34 Alpha

Windows 64 bit:

[https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34-win64.zip](https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34-win64.zip)

MacOS:

[https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34-MacOS.dmg](https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34-MacOS.dmg)

Linux 64 bit:

[https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34.AppImage](https://downloads.saleae.com/betas/1.2.34/Logic-1.2.34.AppImage)

#### What's new in 1.2.34?

A number of things changed under the hood, but the UI facing changes are smaller this time. We added the main menu and software preferences window, but you won't find too much there. We'll be filling out device selection next in preferences. We also fixed a few minor UI issues. Behind the scenes, we fixed a few things. First, there was an issue when switching between the alpha release and an older releases, which is fixed now. We also fixed a few small bugs that we found after the 1.2.32 release, mostly around capture progress updates. Perhaps the most useful under-the-hood change was the addition of the `--legacy` command line option. If you launch the alpha with this option, you will get the original UI instead of the new one. If you need to use the latest alpha build for actual work, you could launch it with this option and use the application normally.

Most of the last week was spent dealing with a MacOS Mojave issue that affected customers with non-english locale settings, and an interesting OpenSSL bug that affects a specific group of low-performance intel CPUs. The Mojave issue is just about wrapped up, and we'll have the Intel problem solved soon.

#### What happened to 1.2.33?

We built 1.2.33 with the legacy UI as a potential beta to solve issues with MacOS Mojave. We're still working on a few issues, but once we're done, we'll release another beta release with the legacy UI.

### Saleae Logic 1.2.32 Alpha

Windows 64 bit:

[https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32-win64.zip](https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32-win64.zip)

MacOS:

[https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32-MacOS.dmg](https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32-MacOS.dmg)

Linux 64 bit:

[https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32.AppImage](https://downloads.saleae.com/betas/1.2.32/Logic-1.2.32.AppImage)

#### What's new in 1.2.32?

Tons! 1.2.31 was just a teaser - a quick release we made right after we hooked up our first prototype of rendering and viewstate. It didn't do much. 1.2.32 is by no means a replacement for the existing logic software, but it contains several core features and significant polish over the last release. There is still a long way to go in core functionality and polish before this Alpha transitions from an interesting demo to a useful tool though.

1. Multisession support & tabs.

   It's not possible to move a capture to a new tab, switch tabs, and rename tabs, just like in the classic software! Under the hood is a different story. The first time we added multi session support to the software, it took over a month, most of that was spent tracking down the dozens of interconnected dependencies that were involved. This version has such a clean separation of concerns that core session support only took a few days to implement and test. 

2. Capture settings flyout.

   Like the current C++ software, you can now click the gear icon next to the start button to edit the capture settings. There are a few things left to do here but the core functionality works nicely.

3. Timing display

   This took a little longer than I would have liked, but the math behind the new timing display is considerably more elegant and flexible, and most importantly it has an enormous amount of test coverage. \(Partially needed to to drawbacks of doing math in javascript\). Right now it mimics the behavior of the existing software's timing display, but I've already done some experimentation with new modes that provide more on-screen absolute timing indicators for any given zoom level, and support for different progressions between the relative and absolute timing indicators.

4. Vertical voltage display

   Now that you can zoom and pan the analog channels vertically, we needed a better voltage display! This new voltage display is similar to the timing display in functionality, and already implements a few new features to help keep relevent voltages on screen as you pan and zoom. To pan an analog channel vertically, hold the spacebar and drag. to zoom, hold ctrl \(command on mac\) and scroll.

5. Back end improvements

   This alpha release contains a new analog processing backend. We haven't removed the old one yet, which is still consuming resources unfortunately. However the new UI is using a significantly higher performance analog data processing pipe & renderer, which we'll continue to improve and expand.

6. Many, many smaller changes

   We made a lot of progress in a number of areas, too many to list here.

1.2.32 was delayed for several reasons, but we're working on getting back to a smoother, 1 feature per release cadence.

Enjoy!

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

