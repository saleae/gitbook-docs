# How Do I Differentiate Data in the Export File when Duplicate Analyzers Are Used?

## How Do I Differentiate Data in the Export File when Duplicate Analyzers Are Used?

At times, you might want to use duplicate analyzers. For example, two I2C analyzers might be enabled within a single capture, as shown below.

![Duplicate analyzers](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5931def5dd8c0584df677907/8579c2783b030636e5199c431ccd6cec/duplicate_analyzers.png)

In this case, when you export the decoded results into a CSV file, it may be hard to tell which I2C bus the data was decoded from. To resolve this issue, you can change the names of the analyzers to differentiate between duplicate ones. Under the Analyzers tab, click on the name of the analyzer, and you can change its name. That way, when you export the decoded results, you will know from which analyzer it came.

![Analyzer name](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5931def5dd8c0584df677907/4acfea382ec367719b09b7ae22950543/change_analyzer_name.png)

Now, when you export the search results, the new names of the analyzer will appear next to their corresponding data.

![Export search results](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5931def5dd8c0584df677907/56ba1a78306b28b92515d54cf0ee4c40/export_search_results.png)

![CSV Results](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5931def5dd8c0584df677907/4e4ad27479de54a7ac2bb0dd03411643/export_results.png)

As an alternative solution, you can print data from each analyzer separately by clicking the gear icon to the right of the analyzer name and selecting "Export as txt/csv file".

![Export as txt/csv](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5931def5dd8c0584df677907/bded24f8130e46671c704fd618bd170d/export-analyzer-csv.png)

