# The Decoded Protocols Window Shows Incorrect Results for My Protocol Analyzers

First, we are extremely sorry for this bug. We have received reports that when more than one protocol analyzer is active, the results in the Decoded Protocols window may show up incorrectly.

This bug introduces the following issues:

* Decoded messages are missing or out of order for a handful of entries under the Decoded Protocols window in the bottom-right corner of the Logic software.
* If there are errors in the Decoded Protocols window, exporting the data from this window will show the same errors.

We are working on a fix for this, but unfortunately, we don't have a timeline yet. In the meantime, please use the workarounds below.

**Temporary Workarounds**

* Search for any query and delete that query in the Decoded Protocols window search box. That should reload the contents of the window and fix the results.

Type any search query:

![TypeSearch](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/96e8d9b7d7d0a3be6a70501be97b9799/TypeSearch.png)

Delete the search query to reload the window contents:

![ClearSearch](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/5cfdb9019c7613999ee638120e0ed5f3/ClearSearch.png)

* You can also export analyzer results individually by clicking on the gear icon next to the analyzer and selecting "export to text/csv file." This export method doesn't have any issues but will only let you export one analyzer at a time.

![ExportWindow](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/71e25d7fb6e02459d56feb795b7a2b9e/ExportAnalyzer.png)

