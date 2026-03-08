# Automatic Updates

The Logic 2 app has the ability to keep itself updated via automatic updates. This happens in the background, and a popup notification within the app will notify the user when an update has completed downloading and is ready to install.

![Automatic update pop-up](<../../../.gitbook/assets/Screen Shot 2021-11-15 at 4.08.15 PM.png>)

The update can also be installed from within the app by clicking the Options button at the bottom-right, then clicking About. From there, you can click on the "Update Available!" link to re-open the pop-up window above.

![Logic 2 About Window](<../../../.gitbook/assets/Screen Shot 2021-11-15 at 4.08.27 PM.png>)

### Disable Automatic Download of Updates

In some cases, users may prefer to manually update their software. Automatic downloads of updates can be disabled by clicking the Options button at the bottom-right, then clicking Preferences. Scroll to the bottom of the Preferences window to reveal the option to disable automatic updates.

![Disable auto updates](<../../../.gitbook/assets/Screen Shot 2021-11-15 at 4.15.09 PM.png>)

### Disabling Automatic Updates Entirely

In case you are interested in disabling automatic updates entirely (for example, if you no longer want the software to notify you of available updates), the Logic 2 software respects the following environment variable.

* &#x20;`SALEAE_DISABLE_UPDATE_CHECK`&#x20;

If you set this environment variable to `1`, the application won't check for updates at all. You could set this in a `.bashrc` file, or use a launcher script to always start the Logic 2 software with this variable set.
