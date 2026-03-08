# Is It Possible to Create or Edit \*.logicdata Files Created by the Logic Software?

It is not possible to create or modify a saved \*.logicdata files.

That is because the files are generated with boost binary serialization and contain a very complex object structure. In truth, we don't even understand how it works. Boost serialization is extremely complex.

If you need to get data out of the logic software, we recommend using the export features. You can find more information in our user's guide here: [https://trello.com/c/7zCKDekD](https://trello.com/c/7zCKDekD)

