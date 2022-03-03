# Connecting Remotely with SSH

Although we haven't comprehensively tested our Logic 2 app in a remote SSH environment, we've seen some success from a few of our users.

There seems to be a few issues with running Electron applications (our Logic 2 app is built on Electron) with SSH. If you are running on Linux Ubuntu, you can review the workarounds that users have shared in the [forum post here](https://discuss.saleae.com/t/working-on-linux-from-remote/1013/4).

Specifically, you'll want to run the app as follows:

`./Logic-2.3.40-master.AppImage --no-sandbox --no-xshm`

Based on our tests, the performance over SSH was quite poor, but another user in the forum post linked above recommended using compression like so:

`$ ssh -XC <host name>`
