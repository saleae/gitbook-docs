# How Do I Differentiate Data in the Export File when Duplicate Analyzers Are Used?

At times, you might want to use duplicate analyzers. For example, two I2C analyzers might be enabled within a single capture, as shown below.

<figure><img src="../../../.gitbook/assets/duplicate_analyzers.png" alt=""><figcaption></figcaption></figure>

In this case, when you export the decoded results into a CSV file, it may be hard to tell which I2C bus the data was decoded from. To resolve this issue, you can change the names of the analyzers to differentiate between duplicate ones. Under the Analyzers tab, click on the name of the analyzer, and you can change its name. That way, when you export the decoded results, you will know from which analyzer it came.

<figure><img src="../../../.gitbook/assets/change_analyzer_name.png" alt=""><figcaption></figcaption></figure>

Now, when you export the search results, the new names of the analyzer will appear next to their corresponding data.

<figure><img src="../../../.gitbook/assets/export_search_results.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/export_results.png" alt=""><figcaption></figcaption></figure>

As an alternative solution, you can print data from each analyzer separately by clicking the gear icon to the right of the analyzer name and selecting "Export as txt/csv file".

<figure><img src="../../../.gitbook/assets/export-analyzer-csv.png" alt=""><figcaption></figcaption></figure>
