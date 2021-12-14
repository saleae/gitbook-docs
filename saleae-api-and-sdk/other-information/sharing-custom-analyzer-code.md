# Sharing Custom Analyzer Code

Here are some best practices for sharing your custom analyzer code.

If you are currently developing a custom analyzer and would like to share the project in order to receive help with it, or if you have finished a custom analyzer and would like to make it available to others, we recommend posting your analyzer source code to GitHub, organizing it as follows:

First, please look at the following two Saleae GitHub repositories:

* Sample Analyzer: [https://github.com/saleae/SampleAnalyzer](https://github.com/saleae/SampleAnalyzer)
* Analyzer SDK: [https://github.com/saleae/AnalyzerSDK](https://github.com/saleae/AnalyzerSDK)

If you are starting a new analyzer, we recommend forking the existing Sample Analyzer repository and following the readme there to get started.

If you are sharing an analyzer you have already started, we recommend creating a GitHub repository for it. To make it easy for others to build, please include a git submodule that links to the analyzer SDK in the same way that is set up in the Sample Analyzer. That way, you don’t need to redistribute copies of the Saleae analyzer, and it’s easy to keep analyzers up-to-date with the latest SDK. As SDK updates are made, tags will be used to easily allow analyzers to link to older versions until they are updated to the latest SDK (if any updates are necessary).

In addition to the submodule, please also include the necessary non-source files to build your analyzer. Again, if you started with the Saleae Sample Analyzer and used the rename\_analyzer.py file to update the source code and file names, you will already have the files necessary to build your analyzers on all 3 platforms (Linux, Mac, and Windows) and for all 5 targets (Linux 32 bit and 64 bit, Mac 64 bit, and Windows 32 bit and 64 bit).

With these three components posted on GitHub, it will be quick and easy for other developers from the community or from Saleae support to pull your analyzer, build it, and debug it. It will also make it easy for other members from the community or for Saleae support to report issues or post pull-requests that contain bug fixes or new features. It will also make it very easy for other developers to produce derivative works.

When debugging an issue with support, you may be required to post your analyzer in this format in order to allow Saleae to build and debug your analyzer as quickly as possible.
