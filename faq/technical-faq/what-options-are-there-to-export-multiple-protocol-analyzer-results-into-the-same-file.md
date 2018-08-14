# What Options Are There to Export Multiple Protocol Analyzer Results into the Same File?

The Saleae software has two protocol export systems, as detailed at the end of this article: [https://trello.com/c/rOusLFdv](https://trello.com/c/rOusLFdv).

The second option—export protocol search results—will export the entire search results. By default, that will include the results of all analyzers. These results can be filtered by keyword or time range and can be filtered by analyzer.

### Exporting Multiple Analyzers of the Same Type

In the 1.2.5 software, the protocol search results export will include the name of the analyzer for every row. However, if you have multiple analyzers of the same type, such as two serial analyzers, it will not be possible to tell them apart. That is fixed in the 1.2.6 pre-release: [https://trello.com/c/4HX2I11M](https://trello.com/c/4HX2I11M)

There are other known issues with the protocol search results when multiple analyzers are used. In some cases, it's possible for results to be missing from one or more analyzer. In these cases, you may want to stick with the individual export feature and manually combine the results in Excel. This export procedure can be automated using the socket API, if desired: [https://trello.com/c/ayjrfCL3](https://trello.com/c/ayjrfCL3)

These restrictions will be obsolete as soon as the protocol search result bugs are fixed and released.

