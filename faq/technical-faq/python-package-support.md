# Can I use Python Packages in my Custom Extension?

Although we don't support this yet, it's certainly something we will want to support in the future. We're currently tracking the feature request [here](https://ideas.saleae.com/b/feature-requests/hla-support-python-dependencies/), so feel free to vote and comment on it!

### Workaround

For local extensions that you are developing, there is a workaround for loading Python packages. The workaround is shared in this [discuss forum post](https://discuss.saleae.com/t/third-party-libraries-with-hlas/595). The solution is also summarized below.&#x20;

In this example, the user wanted to add protobuf analysis capabilities to their HLA.

> You can modify the sys.path in your extension file to include the directory that you installed the Python package to:
>
> ```
> import sys
> MY_ADDITIONAL_PACKAGES_PATH = '/packages/install/location'
> if MY_ADDITIONAL_PACKAGES_PATH not in sys.path:
>     sys.path.append(MY_ADDITIONAL_PACKAGES_PATH)
>
> import protobuf
> ```
>
> Note that `/packages/install/location` is the directory where you installed the packages, not the path to the package itself.

One caveat is that you can't publish extensions to our Extensions Marketplace if it uses external Python packages, mainly because they won't work on other users' PCs. Therefore, external Python package usage is limited to local use only until we add proper support for it.
