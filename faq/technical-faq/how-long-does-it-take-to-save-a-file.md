# How Long Does It Take to Save a File?

Sometimes the software can take quite a while to save a file. The time it takes to save a file depends on the size of the capture and the performance of your PC, mainly the disk drive performance. Saving to a network location could be considerably slower.

If the software is not saving files instantly or in under a second, here is a quick way to estimate how long it will take to save a file.

On windows, open Task Manager and view the memory consumption of Logic. The application itself normally consumes less than 100 MB of RAM. All memory consumption after that should be the sum of the memory used by each open tab. If you only have the capture tab open, you can estimate the size of the capture by subtracting the idle memory usage of the software.

In our quick test with an SSD and a capture consuming about 2.5 GB of memory, the save process took 12.6 seconds. Save time should be linearly proportional to memory usage, so a 12 GB file should take about 60 seconds to save on my computer.

If you're still not sure the save process is working correctly, try taking a shorter capture, say 20 ms. Try saving that and timing it. Feel free to run your own tests with different capture lengths while monitoring the memory usage of the software or the size of the save files once they've saved.

Keep in mind that analog channels consume the bulk of the memory in the software. Turn off any analog channels you aren't using and reduce the sample rate to the minimum required when taking long recordings. Digital data only consume memory when the signal changes, so memory usage is only proportional to activity in the capture. The software has a capture memory estimator on the capture settings dialog. The range represents the range from no digital activity to the theoretical limit of digital activity.

