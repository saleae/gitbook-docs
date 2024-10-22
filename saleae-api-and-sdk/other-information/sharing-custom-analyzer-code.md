# Sharing Custom Low-Level Analyzer (LLA) Code

## Submitting your LLA

If you have finished developing a custom Low Level Analyzer (LLA) using our Protocol Analyzer SDK and would like to make it available to our community of users, we would love to post your work to our list of Community Shared Analyzers in the link below!

{% content-ref url="../../community/community-shared-protocols.md" %}
[community-shared-protocols.md](../../community/community-shared-protocols.md)
{% endcontent-ref %}

Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) if you are interested in having your LLA featured in the list above.

## Formatting your LLA

Before submission, we recommend posting your LLA source code to GitHub and organizing it as per the instructions below.

First, please look at the following two Saleae GitHub repositories:

* Sample Analyzer: [https://github.com/saleae/SampleAnalyzer](https://github.com/saleae/SampleAnalyzer)
* Analyzer SDK: [https://github.com/saleae/AnalyzerSDK](https://github.com/saleae/AnalyzerSDK)

If you are starting a new analyzer, we recommend forking the existing Sample Analyzer repository and following the readme there to get started.

If you are sharing an analyzer you have already started, we recommend creating a GitHub repository for it. To make it easy for others to build, please include a git submodule that links to the analyzer SDK in the same way that is set up in the Sample Analyzer. That way, you don’t need to redistribute copies of the Saleae analyzer, and it’s easy to keep analyzers up-to-date with the latest SDK. As SDK updates are made, tags will be used to easily allow analyzers to link to older versions until they are updated to the latest SDK (if any updates are necessary).

In addition to the submodule, please also include the necessary non-source files to build your analyzer. Again, if you started with the Saleae Sample Analyzer and used the `rename_analyzer.py` file to update the source code and file names, you will already have the files necessary to build your analyzers on all 3 platforms (Linux, Mac, and Windows).

With these three components posted on GitHub, it will be quick and easy for other developers from the community or from Saleae support to pull your analyzer, build it, and debug it. It will also make it easy for other members from the community or for Saleae support to report issues or post pull-requests that contain bug fixes or new features. It will also make it very easy for other developers to produce derivative works.
