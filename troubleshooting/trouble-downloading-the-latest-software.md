# Trouble Downloading the Latest Software

## Trouble Downloading the Latest Software

Our software is hosted on Amazon S3, a simple online storage provider. If the links to download the software are not working properly, then the issue could be anywhere between your browser and Amazon's servers.

Here's one quick thing to try. Use the Amazon download links directly instead of the links to downloads.saleae.com, which rely on our DNS record to reach Amazon.

Right-click the "Download Logic" link and copy the link address. Paste the link address in a new browser window and replace the part "[http://downloads.saleae.com/](http://downloads.saleae.com/)" with "[https://s3.amazonaws.com/downloads.saleae.com/](https://s3.amazonaws.com/downloads.saleae.com/)"

\(Yes, the "downloads.saleae.com" part is still present in the new link.\)

This is the direct download link from Amazon S3, and it's over https.

If you're still having trouble downloading our software, please contact support and mention what country and state you're in. Amazon uses servers all over the world to provide faster download speeds, and the issue might not be reproducible in our region.

