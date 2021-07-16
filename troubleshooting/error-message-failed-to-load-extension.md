# Error Message: Failed to Load Extension

When starting the Logic 2 software, the following error message may appear.

> Failed to load extension. An unknown error occurred while installing the extension. Please try again, and contact Saleae support if you still have problems.

![Failed to load extension error message](../.gitbook/assets/screen-shot-2021-07-15-at-6.52.18-pm.png)

### Troubleshooting

#### Uninstall Extensions One at a Time

This might help determine which extension is somehow causing this error message to appear. Restart the software after each uninstallation to see which of them is potentially causing the error.

Instructions for how to uninstall an extension is described in the article below.

{% page-ref page="../extensions/installing-extensions.md" %}

#### Manually Install the Two Default Extensions

If all extensions have been uninstalled and the error message still appears, then the default extensions may be failing to automatically download and install due to a proxy or firewall. This can be common on company networks.

One quick solution would be to manually install the two default extensions, clock statistics measurement and voltage statistics measurement. You can find manual extension install instruction in the support article shared previously above.

