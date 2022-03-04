# Error Loading Marketplace Extensions

When clicking on our Extensions button on the side panel, you may come across the error message, "Error loading Marketplace Extensions," like shown below.

![Error loading Marketplace Extensions](<../.gitbook/assets/Screen Shot 2022-03-03 at 5.55.21 PM.png>)

This typically occurs on PCs that are behind a strict firewall or other security measure. Because of this, access to our Marketplace Extensions might be denied.

Here is the list of URLs our software uses. You will want to whitelist or add the following domains to your SSL no-check list, and you may need to contact your IT department for help with this.

* [https://api.saleae.com/](https://api.saleae.com)
  * Used for device calibration download (part 1 of 2)
* [https://downloads.saleae.com/](https://downloads.saleae.com)
  * Used for device calibration download (part 2 of 2)
  * Used for software auto update (part 1 of 2)
* [https://logic2api.saleae.com/](https://logic2api.saleae.com)
  * Used for software auto update (part 2 of 2)
  * Used for our Marketplace Extensions list
* [https://raw.githubusercontent.com/](https://raw.githubusercontent.com)
  * Used for Marketplace extension readme content
* [https://github.com/](https://github.com)
  * Used for Marketplace extension installation

All of of these URLs are accessed via https requests. Our application is Electron based, and attempts to use Google Chrome’s stock network stack to make web requests and download files.

In some cases, the Logic 2 software itself needs to be authenticated with the network before it can make successful web requests, and unfortunately we don’t have a solution for that at the moment.
