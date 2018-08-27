# The Software Fails to Launch on Fedora

## The Software Fails to Launch on Fedora

This article covers the situation where the Saleae Logic software crashes on launch on Linux Fedora 26 and 27. The issue is still open, and we are working on resolving it. Currently, we would like to collect information from individuals who are able to reproduce the problem.

The Saleae Logic software uses QT 5.7, which is included with the download. The QT framework is not currently compatible with the newest version of OpenSSL, 1.1.

It looks like a recent patch to QT has added support for OpenSSL 1.1. We're investigating to see if it has been merged into the latest production release of QT.

In the meantime, we expect that installing an older version of OpenSSL should solve the problem. This has been confirmed by several customers, but since we haven't been able to reproduce the problem here, we're not sure.

Installing OpenSSL 1.0.2 compatibility:

```text
dnf install compat-openssl10
```

Note: Some customers have reported installing the `compat-openssl10-devel` version of that, and some have reported symlinking the older version in order to get Logic to load it: `ln -s /usr/lib64/libssl.so.10 ./libssl.so`

If you see the following error message from the console when running Logic, you are likely seeing this problem:

```text
qt.network.ssl: QSslSocket: cannot resolve CRYPTO_num_locks
```

You should see many similar lines in the output before the application exits.

To check what versions of OpenSSL are available on your system, you can run these checks:

1. Directly search for the libraries:

   ```text
   ls /usr/lib64/ | grep -i 'libssl\|libcrypto'
   ```

   In this case, libssl and libcrypto 1.0.2 would indicate you have an older compatible version of OpenSSL installed, and the software should run. If you find this but the software fails to launch, please send us the console logs of the software and the output of the above ls & grep command.

2. Check installed packages.

   ```text
   rpm -qa | grep -i openssl
   ```

   If you find compat-openssl10-1.0.2..., the application should run. If it does not run, please send us the above output and the console output of the Logic software.

If you have found a simpler workaround, please let us know. Once we confirm that the latest QT supports OpenSSL 1.1 and we update our application on all platforms to support it, this problem should go away completely.

We have been unable to reproduce this issue on the Fedora 26 and Fedora 27 live disks. In both cases, the 1.0.2 compat version is already installed and loaded by Logic.

Update: A customer has reported that just using `LD_PRELOAD` to force-load the included compatibility version of libssl also solves the problem, like so:

```text
# First cd to where the software is installed... 
ln -s /usr/lib64/libssl.so.10 libssl.so 
LD_PRELOAD=$PWD/libssl.so ./Logic
```

