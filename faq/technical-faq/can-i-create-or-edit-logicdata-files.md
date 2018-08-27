# Can I Create or Edit .logicdata Files?

## Can I Create or Edit .logicdata Files?

It is not possible to create or modify a saved \*.logicdata files.

That is because the files are generated with boost binary serialization and contain a very complex object structure. In truth, we don't even understand how it works. Boost serialization is extremely complex.

If you need to get data out of the logic software, we recommend using the export features. You can find more information in our user guide below.

{% page-ref page="../../user-guide/using-logic/saving-loading-and-exporting-data.md" %}

