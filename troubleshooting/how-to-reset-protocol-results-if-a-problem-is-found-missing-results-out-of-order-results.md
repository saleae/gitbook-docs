# How to Reset Protocol Results If a Problem Is Found \(Missing Results, Out-of-Order Results\)

We currently have several open issues with the protocol search system. In most cases, though, you should not observe issues.

However, if you notice that some protocol results are missing from the list of results or if the results are out of order, please follow these steps to reset the results and resolve the problem:

* Wait for the analyzer to finish running. \(This is usually instant, but longer running analyzers will display a percentage next to their names. This is not the indexing percentage, which is usually much slower.\)
* Click the gear icon next to "Decoded Protocols."
* On that menu, uncheck each analyzer.
* The results should vanish. 
* Open the same menu and check each analyzer.
* Now, the results should be regenerated.

The root of the issues with protocol search is a series of threading problems. Unfortunately, it will take some time to fix because much of the protocol system will need to be updated. In the meantime, this should get you around any problems you might find with the system.

