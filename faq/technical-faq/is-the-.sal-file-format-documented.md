# Is the .sal File Format Documented?

We unfortunately don't share information about our \*.sal capture file format. The reason we don’t want to publish this is because we're not ready to commit to keeping that documentation up to date. In addition, we want to avoid making breaking changes to the format which could affect 3rd party integrations.&#x20;

For example, the old capture file format of the Logic 1.x software (\*.logicdata) went through 24 serialization changes over the life of the application, including several complete overhauls of the format.

We’re currently tracking user need for publishing the .sal file format here: [Provide info on the .sal file format - Logic 2 - Ideas and Feature Requests - Saleae](https://ideas.saleae.com/b/feature-requests/provide-info-on-the-sal-file-format/)

Please add your comments, votes, and suggestions to it and let us know your particular use case. Ideally, we would love to provide a .sal-into-.bin translation through an API of the Logic 2 app. That way, we can change our internal file format to our hearts content without needing to make a public API & documentation release each time we do that.
