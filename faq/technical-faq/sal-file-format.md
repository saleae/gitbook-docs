# Is the .sal File Format Documented?

We don't officially share information about our \*.sal capture file format and we're not ready to commit to keeping that documentation up to date. In addition, we want to avoid making breaking changes to the format which could affect 3rd party integrations.&#x20;

Having said that, we've gotten a fair amount of questions about the topic, and although our usual response is that it’s not stable and shouldn’t be relied on, there have been enough requests for more information that we thought it was worth creating a dedicated post where we could answer questions. The link to the forum post is below.

* [Discuss Forum - Logic 2 Capture Format (.sal)](https://discuss.saleae.com/t/logic-2-capture-format-sal/1858/1)

The files inside of the \*.sal archive are stored using our internal format, which contains a lot of information specific to acceleration rendering. Also, analog data doesn’t have the DC calibration applied in that format. I strongly recommend not using those files for any 3rd party tools, since the format is subject to change, and the format is not currently documented.

However, you can automate the process of exporting those saved \*.sal files to our binary export format, and we include python code to parse those exported files.

You could use code like this to automate the export:

```python
from saleae import automation

file_path = '<absolute path to *.sal file>'
export_path = '<absolute path to directory where *.bin files will be exported>'

# Connect to the running Logic 2 Application on port `10430`
manager = automation.Manager(port=10430)
with manager.load_capture(file_path) as capture:
    capture.export_raw_data_binary(export_path)

manager.close()
```

The export format documentation and python parsing samples can be found in the support article below:

{% content-ref url="binary-export-format-logic-2.md" %}
[binary-export-format-logic-2.md](binary-export-format-logic-2.md)
{% endcontent-ref %}

Ideally, we would love to provide a .sal-into-.bin translation through an API of the Logic 2 app. That way, we can change our internal file format to our hearts content without needing to make a public API & documentation release each time we do that. We’re currently tracking this feature request here, so feel free to add your comments and votes to it: [Provide .sal file translation through an API - Logic 2 - Ideas and Feature Requests - Saleae](https://ideas.saleae.com/b/feature-requests/provide-info-on-the-sal-file-format/)
