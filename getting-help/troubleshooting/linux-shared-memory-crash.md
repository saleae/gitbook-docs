# Linux Shared Memory Crash

This article specifically addresses a Linux crash bug that causes the software to crash on launch, usually until the system is restarted.

Error message in log file:

`Error: Unable to create shared memory to hold instance number, Qt error code: 1, Qt error string: QSharedMemoryPrivate::initKey: unable to set key on lock`

## **Background Information**

The application uses a shared memory segment to manage specific single instance resources, mainly the protocol search database file.

Every time the application launches, it either attaches to an existing shared memory segment or creates a new one. When the last instance of the software exits, the shared memory segment is removed.

If the application crashes, the shared memory segment is not removed. However, this is not usually a problem.

This bug only occurs when the software is launched multiple times from different user accounts, usually from the current user and the superuser account, like so:

* `./Logic`
* `sudo ./Logic`

When the software is run as the superuser and a shared memory segment is created, that shared memory segment will belong to the superuser. Other instances of the software run as the normal user will fail to attach and crash on launch.

Usually, this can be solved simply by closing all open instances of the software that were launched with sudo.

However, if the software launched with sudo crashes, the shared memory segment might not get released. Any instance of the software launched without root permissions will crash on launch with the above error.

## **Solution #1**

**The simplest way to solve this is to restart the computer.** Shared memory segments are not persisted between restarts.

## Solution #2

Alternatively, the problem can be solved by manually removing the shared memory segment and associated semaphore.

1.  List all shared memory segments and semaphores.

    ```
    sudo ipcs
    ```
2.  Locate the shared memory segment. The shared memory segment used by the Logic software will be owned by root and contain 4 bytes.

    ```
    ------ Shared Memory Segments --------
    key        shmid      owner      perms      bytes      nattch     status
    0x3b020040 4849684    root       600        4          1
    ```
3.  Locate the semaphore. The semaphore used by the Logic software is harder to identify. Odds are that it will be the only root-owned semaphore in the list. If it's not, you might want to try closing all other applications that are running as root.

    ```
    ------ Semaphore Arrays --------
    key        semid      owner      perms      nsems
    0x76020008 589825     root       600        1
    ```
4.  Delete the shared memory segment and the semaphore using their shmid and semid, respectively.

    ```
    ipcrm -s <semid>
    ipcrm -m <shmid>
    ```
5. Launch the Logic software as a normal user. It should not crash on launch. If it does, check the error logs to see if the same issue is occurring.

## Solution #3

Removing the following files from the /tmp directory may solve the issue (Note that the "..." in the file names below represents a unique 40 character hexadecimal code).

* /tmp/qipc\_sharedmemory\_qlipper...
* /tmp/qipc\_systemsem\_qlipper...
* /tmp/qipc\_systemsem\_sharedmemorylogicinstancecount...
