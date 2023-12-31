---
sidebar_position: 0
---

# Event Layout and Info Section

Every **kunai** event gets a set of common fields shared between all the events. These fields give various information which might be used for advanced purposes such as event identification, grouping or correlation.

For the general event layout, every event will have a `data` section and an `info` section. The `data` section might be different for every event family while the `info` section will always be common (contains the same fields) across all the event types. This page only explains the `info` section as `data` sections will be addressed separately for each event documented.

:::info Process and Threads in Linux
In the Linux kernel, there is no notion of **process** or **thread**, everything is a **task**. So in the rest of the documentation we will consider that a **process** is made of **one** or **several** **tasks** belonging to the same **thread-group**.
:::

```json
{
  "data": {
        ...
    },
  "info": {
    // Host related information
    "host": {
      // Hostname of the workstation/container
      "hostname": "bionic-container",
      // Kind of container
      "container": "lxc"
    },
    // Event related information
    "event": {
      // A string which can be used by external tools to identify kunai's logs
      "source": "kunai",
      // Event type identifier
      "id": 1,
      // Event type name
      "name": "execve",
      // Unique identifier for an event
      "uuid": "605639f8-37b5-7df7-c52f-eda680a38124",
      // Not relevant, here for diagnosis purposes
      "batch": 21957
    },
    // Information about the task generating this event
    "task": {
      // Task name
      "name": "systemd-tmpfile",
      // Identifier of the task (process or thread)
      "pid": 4308,
      // Thread Group ID of the task (same for all threads of a process)
      // When pid == tgid we are in the main thread.
      "tgid": 4308,
      // A uuid common to all the events generated by the same
      // task group/process (i.e. all threads). You can search by
      // this value in order to see the whole activity of a process
      "guuid": "6629cda0-7300-0000-ba5f-b80ed4100000",
      // Effective uid of the task
      "uid": 1000000,
      // Effective gid of the task
      "gid": 1000000,
      // Information about Linux namespaces
      "namespaces": {
        // mnt namespace id
        "mnt": 4026532389
      },
      // task_struct flags https://elixir.bootlin.com/linux/v6.6.5/source/include/linux/sched.h#L767
      // combination of process flags https://elixir.bootlin.com/linux/v6.6.5/source/include/linux/sched.h#L1726
      "flags": "0x400000"
    },
    // Information about the parent task. This section
    // contains the same kind of information as the task section
    "parent_task": {
      "name": "systemd",
      "pid": 4154,
      "tgid": 4154,
      "guuid": "13729d78-7300-0000-ba5f-b80e3a100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      },
      "flags": "0x400000"
    },
    // Time at which the event gets processed and printed.
    "utc_time": "2023-06-26T07:12:55.030695982Z"
  }
}
```

:::danger container type is not identified properly
If you generated some activity within a container and the container type is not
correct or empty please explain precisely your setup and we will fix this. Container identification is based on several string matching so every specific container implementation needs to be hardcoded. Even if the container type is not correct, all the rest of the event is correct and relative to your container.
:::
