# Extensions

Extensions are feature additions built in python which can be installed to your [Logic 2.x software](https://ideas.saleae.com/f/changelog/). We currently support the following types of extensions.

{% page-ref page="measurement-extensions.md" %}

{% page-ref page="high-level-analyzer-extensions.md" %}

The API documentation for building your own extensions can be found below:

* [Extensions Python API documentation](https://github.com/saleae/logic2-extensions)
* [Extensions Examples](https://github.com/saleae/logic2-extensions-examples)

You can also follow along with our Quickstart guide below to quickly create an extension and publish it to the Saleae Marketplace to make it available to our community of users.

{% page-ref page="extensions-quickstart.md" %}

### Extension Components

An extension consists of at least two files, all of which should be stored in the same folder.

* an `extension.json` file, which stores information about the extension
* one or more python source files

![The Extensions panel button](../.gitbook/assets/screen-shot-2020-05-21-at-3.50.11-pm.png)

### Installing an Extension

1. Click the 'Extensions' panel button on the right of the software
2. Click 'Create Extension'
3. A pop-up window will appear. Under 'Load existing extension', click 'select .json file'
4. Navigate to the extension you would like to add and select its `extension.json` file.
5. Once added, you will see the new extension appear in the 'Extensions' panel of the software







