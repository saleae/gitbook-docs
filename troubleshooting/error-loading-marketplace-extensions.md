# Error Loading Marketplace Extensions

When clicking on our Extensions button on the side panel, you may come across the error message, "Error loading Marketplace Extensions," like shown below.

![Error loading Marketplace Extensions](<../.gitbook/assets/Screen Shot 2022-03-03 at 5.55.21 PM.png>)

This typically occurs on PCs that are behind a strict firewall or other security measure. Because of this, access to our Marketplace Extensions might be denied. You will most likely need to work with your IT department to resolve this, and we provide a list of actions they can take below.

### Whitelist URLs

You will want to whitelist or add the following domains to your SSL no-check list. All of of these URLs are accessed via https requests.

* [https://api.saleae.com/](https://api.saleae.com/)
  * Used for device calibration download (part 1 of 2)
* [https://downloads.saleae.com/](https://downloads.saleae.com/)
  * Used for device calibration download (part 2 of 2)
  * Used for software auto update (part 1 of 2)
* [https://logic2api.saleae.com/](https://logic2api.saleae.com/)
  * Used for software auto update (part 2 of 2)
  * Used for our Marketplace Extensions list
* [https://raw.githubusercontent.com/](https://raw.githubusercontent.com/)
  * Used for Marketplace extension readme content
* [https://github.com/](https://github.com/)
  * Used for Marketplace extension installation

### Whitelist Web API Traffic

In case whitelisting the above URLs doesn't solve this for you, you may need to whitelist additional web API traffic that contains certain properties listed below.

* Check if the web traffic IP is outside of your network's own IP range.
* Check if the header contains _Electron._ Our application is _Electron-_based and attempts to use Google Chrome’s stock network stack to make web requests and download files.
* Check if traffic comes from a Saleae domain or GitHub domain like listed above.

In some cases, the Logic 2 software itself needs to be authenticated with the network before it can make successful web requests, and unfortunately we don’t have a solution for that at the moment.

If you are still unable to resolve this issue after following the above troubleshooting steps, please [contact us](https://contact.saleae.com/hc/en-us/requests/new).
