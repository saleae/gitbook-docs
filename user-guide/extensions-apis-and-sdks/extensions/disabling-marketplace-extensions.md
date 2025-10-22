# Disabling Marketplace Extensions

In case you don't plan on using Marketplace Extensions with our software and would like to disable access to third party extensions entirely, you may follow the instructions below. This may be common in cases where your IT department does not approve usage of external extensions with our software.

### Disabling via an Environment Variable

Our software provides a mechanism to turn off the marketplace. Specifically, you can prevent the software from fetching the list of available extensions by setting the environment variable below.

`SALEAE_OFFLINE_MARKETPLACE`

For example, from the command line, you can execute the following:

`cd "\Program Files\Logic" set SALEAE_OFFLINE_MARKETPLACE=1 Logic.exe`

For PowerShell, it would be as follows:

`$Env:SALEAE_OFFLINE_MARKETPLACE=1`

When set, the software will show an error on launch saying it was unable to load the marketplace, and the marketplace sidebar will only show locally installed extensions (in other words, extensions we shipped with the software, or extensions the user manually installed locally).

Please note that this capability was not intended to be used for security purposes. We added this to make it easy for us to test the offline behavior of the marketplace without needing to go offline.
