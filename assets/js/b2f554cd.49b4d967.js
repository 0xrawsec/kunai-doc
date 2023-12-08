"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"bpf-door-case-study","metadata":{"permalink":"/blog/bpf-door-case-study","source":"@site/blog/2023-11-02-bpf-door/index.md","title":"BPFDoor case study","description":"This blog post is meant to give an insight of how to use Kunai for detection engineering.","date":"2023-11-02T13:37:00.000Z","formattedDate":"November 2, 2023","tags":[{"label":"malware","permalink":"/blog/tags/malware"},{"label":"detection-engineering","permalink":"/blog/tags/detection-engineering"}],"readingTime":14.605,"hasTruncateMarker":true,"authors":[{"name":"Quentin Jerome","title":"Kunai Maintainer","url":"https://github.com/qjerome","imageURL":"https://github.com/qjerome.png","key":"quentin"}],"frontMatter":{"slug":"bpf-door-case-study","title":"BPFDoor case study","authors":["quentin"],"tags":["malware","detection-engineering"],"date":"2023-11-02T13:37"},"nextItem":{"title":"Announcing Kunai","permalink":"/blog/announcing-kunai"}},"content":"This blog post is meant to give an insight of how to use Kunai for detection engineering.\\n\\nFor those who didn\'t have the opportunity to attend the Kunai workshop at [Hack.lu 2023 edition](https://hack.lu) this is a way to catch up on a big part of what we have been doing during this session. For those who actually attended the workshop, you can take a read anyway because the post goes even more into the details, as we were limited in time.\\n\\n\x3c!-- truncate --\x3e\\n\\n## About the Sample Studied in this Post\\n\\n**BPFDoor** has been chosen for this case study as it has been described, when it got discovered, as something not trivial to detect. The difficulties to detect mostly being depicted as the fact that it uses BPF based packet filtering to implement a nice backdoor. I will not deep dive in the description of what this malware is doing and how it works. If you want to know more about those topics, please find a non-exhaustive list of related posts and documents about BPFDoor malware in [references section](#about-bpfdoor).\\n\\n<table>\\n  <tr>\\n    <td><b>Filename</b></td>\\n    <td>bpfdoor.mwr</td>\\n  </tr>\\n  <tr>\\n    <td><b>md5</b></td>\\n    <td>0017f7b913ce66e4d80f7e78cf830a2b</td>\\n  </tr>\\n  <tr>\\n    <td><b>sha1</b></td>\\n    <td>f1bf775746a5c882b9ec003617b2a70cf5a5b029</td>\\n  </tr>\\n  <tr>\\n    <td><b>sha256</b></td>\\n    <td>fa0defdabd9fd43fe2ef1ec33574ea1af1290bd3d763fdb2bed443f2bd996d73</td>\\n  </tr>\\n  <tr>\\n    <td><b>sha512</b></td>\\n    <td>ff5dd28ba3f5ce1f85f85fa9b65f9f30fbd300f2ca238cb2713da7077b7a0a8ff094cff4d7de9381726925abdd9ea065fa75ccd02fa5a816b71a6f91479363c1</td>\\n  </tr>\\n</table>\\n\\n## Experiment Description\\n\\nYou can find here after the methodology followed in order to make our experiment. This methodology is not specific to this sample, so it can be used to study any malware you want with **Kunai**.\\n\\n1. Run **Kunai** in such a way you capture the output (redirect output to file or configure output file)\\n2. Run malware\\n3. Interact with the malware if needed/possible\\n\\nFor the sake of simplicity, I\xa0have prepared everything for you. You can find the Kunai\'s output for this sample in the following file [bpfdoor.jsonl](./assets/bpfdoor.jsonl). To improve the readability of that file, it went through a step of filtering so that it contains only the events related to the sample.\\n\\n:::info re-doing the experiments yourself\\nIt is possible, but you have to known that the events in the file got generated with the latest git (under development) version of **Kunai**. Therefore, some events will be missing if you take the latest release (i.e. **0.1.0**).\\n:::\\n\\n:::tip running BPFDoor\\n* run the sample as priviledged user otherwise it won\'t work\\n* the malware checks if an instance already running (you can know that by inspecting the source code or **stracing** the process)\\n:::\\n\\n:::caution running malware must be done with care\\n* always do it in a dedicated machine (i.e. VM), preferably **isolated** from the Internet\\n* Linux container isolation is not enough (the kernel is shared between host and containers)\\n* it is always better to know a bit what to expect from the sample (i.e. make sure it does not exploit your hypervisor)\\n:::\\n\\n## The Suspicious Events\\n\\nThe aim of this analysis is not necessarily to understand exactly what the malware is doing, as it can be achieved by other means (sandboxing, strace ...). The goal is to identify actionable events, on which we can build efficient detection rules. \\n\\n:::tip suspicious events\\nThe notion of a suspicious event is sometimes universal, sometimes subjective and sometimes depends on the context. So you might find more/less events suspicious than me while you look at the logs. Anyway any detection rule built on top of those events should be tested before being put into production.\\n:::\\n\\n### The Story of a Weird Command Line\\n\\nThe first event which should really catch our attention is the following. We see that a binary `/tmp/bpfdoor.mwr`, which should be qualified as unknown in a real infection, runs a rather suspicious one-liner command line.\\n\\n```json\\n{\\n  \\"data\\": {\\n    \\"ancestors\\": \\"/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr\\",\\n    \\"parent_exe\\": \\"/tmp/bpfdoor.mwr\\",\\n    \\"command_line\\": \\"sh -c /bin/rm -f /dev/shm/kdmtmpflush;/bin/cp ./bpfdoor.mwr /dev/shm/kdmtmpflush && /bin/chmod 755 /dev/shm/kdmtmpflush && /dev/shm/kdmtmpflush --init && /bin/rm -f /dev/shm/kdmtmpflush\\",\\n    \\"exe\\": {\\n      \\"file\\": \\"/usr/bin/dash\\",\\n      \\"md5\\": \\"1e6b1c887c59a315edb7eb9a315fc84c\\",\\n      \\"sha1\\": \\"803ffdb71aa236aa25009bef97db1b8ad0e3c62b\\",\\n      \\"sha256\\": \\"64e48365207d0c19008ba7d53d75c0de3fcd5a1590e4c40fc69c677663fedc20\\",\\n      \\"sha512\\": \\"0d261d7a8d615d080e20f1e1b294f168107dc2740da1a037d9519215e67e7a72dcc0f56c0006e5fdc04b7dbbd339171e9d2bf15f8e31f295d37aff499e1bc928\\",\\n      \\"size\\": 129816\\n    }\\n  },\\n  \\"info\\": {\\n    ...\\n    \\"event\\": {\\n      \\"source\\": \\"kunai\\",\\n      \\"id\\": 1,\\n      \\"name\\": \\"execve\\",\\n      \\"uuid\\": \\"8f2fab25-ef70-3898-b52e-da2eaca820cc\\",\\n      \\"batch\\": 27\\n    },\\n    ...\\n  }\\n}\\n```\\n\\nWe clearly understand from this command line that the sample is copying itself to `/dev/shm` with a new name, changes its permissions, executes the new file and deletes it straight after. What else do we need to trigger the alarm ? This is already a good start, so lets extract some ideas out of this and continue our journey.\\n\\n:::info /dev/shm\\nThis is usually a **tmpfs** (in memory) filesystem so files running from that place will not persist on disk. Copying itself there, before executing and deleting itself could be seen as an attempt to evade malware cleaning run by an AV or any protection software.\\n:::\\n\\n:::tip detection takeaways\\n* a command line with `cp`, `chmod`, `exec`, `rm` happening in this order might be considered as a suspicious one-liner\\n  * increase severity if `ancestors` contains a binary of a service exposed on the Internet\\n  * increase severity if `command_line` contains `/dev/shm`\\n:::\\n\\n### Not Leaving Traces is Suspicious\\n\\nThe next event looking suspicious is the following and is strongly linked to the previous one. As it is the execution of the malware after it copied itself into `/dev/shm`.\\n\\n```json\\n{\\n  \\"data\\": {\\n    \\"ancestors\\": \\"/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr|/usr/bin/dash\\",\\n    \\"parent_exe\\": \\"/usr/bin/dash\\",\\n    \\"command_line\\": \\"/dev/shm/kdmtmpflush --init\\",\\n    \\"exe\\": {\\n      \\"file\\": \\"/dev/shm/kdmtmpflush\\",\\n      \\"md5\\": \\"\\",\\n      \\"sha1\\": \\"\\",\\n      \\"sha256\\": \\"\\",\\n      \\"sha512\\": \\"\\",\\n      \\"size\\": 0,\\n      \\"error\\": \\"file not found\\"\\n    }\\n  },\\n  \\"info\\": {\\n    ...\\n    \\"event\\": {\\n      \\"source\\": \\"kunai\\",\\n      \\"id\\": 1,\\n      \\"name\\": \\"execve\\",\\n      \\"uuid\\": \\"38789315-0485-9af9-f511-27fe97b21a1c\\",\\n      \\"batch\\": 43\\n    },\\n    ...\\n  }\\n}\\n```\\n\\nWhat makes that event suspicious is that **Kunai**, did not managed to compute hashing information out of the executable path. The reason for this is simple, and the event is self explanatory, the **file is not found**. As we have seen previously the malware deletes the file straight after the execution. This type of things (quickly modifying a file) after its execution races **Kunai**, and this is sad. I will not go into the technical details but this is not really something we can change. However, the important thing is that when such thing happens **Kunai** tells it to you. So even if some information is missing from that event, we can still use it as a reliable source of suspiciousness.\\n\\n:::tip detection takeaways\\n* a binary for which we could not compute hashing information is suspicious, it means the file got modified/deleted straight after its execution\\n* a binary running from `/dev/shm` with priviledged user\\n* a known bad hash (not directly applicable to this event but to any event containing hashing information)\\n:::\\n\\n### Changing its own Task Name\\n\\nThe next suspicious candidate is the malware changing its task name. It does it using the `prctl` syscall, passing the `PR_SET_NAME` option as a first argument.\\n\\n```json\\n{\\n  \\"data\\": {\\n    \\"exe\\": \\"/dev/shm/kdmtmpflush\\",\\n    \\"command_line\\": \\"/dev/shm/kdmtmpflush --init\\",\\n    \\"option\\": \\"PR_SET_NAME\\",\\n    \\"arg2\\": \\"0x605368\\",\\n    \\"arg3\\": \\"0x0\\",\\n    \\"arg4\\": \\"0x6e75722d646c6168\\",\\n    \\"arg5\\": \\"0x3\\",\\n    \\"success\\": true\\n  },\\n  \\"info\\": {\\n    ...\\n    \\"event\\": {\\n      \\"source\\": \\"kunai\\",\\n      \\"id\\": 7,\\n      \\"name\\": \\"prctl\\",\\n      \\"uuid\\": \\"c8be60da-fa83-4a6c-aa8a-cbf1d38f8520\\",\\n      \\"batch\\": 45\\n    },\\n    \\"task\\": {\\n      \\"name\\": \\"hald-runner\\", // this is the new task name\\n      \\"pid\\": 1747,\\n      \\"tgid\\": 1747,\\n      \\"guuid\\": \\"7d64f958-4500-0000-82bb-77d6d3060000\\",\\n      \\"uid\\": 0,\\n      \\"gid\\": 0,\\n      \\"namespaces\\": {\\n        \\"mnt\\": 4026531840\\n      },\\n      \\"flags\\": \\"0x00400000\\"\\n    },\\n    ...\\n  }\\n}\\n```\\n\\nChanging task name cannot be considered as suspicious per se, you would probably see a lot of processes cloning/forking, changing their task names. So we have to use a bit more the data of this event to identify whether it is suspicious or not. We can observe two suspicious things though:\\n* our good old `/dev/shm` friend being in executable path\\n* `hald-runner` being used as a new task name, this is clearly an attempt to mimic a legit process/service task name in order to fool people looking at running processes\\n\\n:::tip detection takeaways\\n* a binary located in `/dev/shm` changing its task name should raise an alert\\n* a task name being changed to mimic a legit binary\\n* it might be interesting to tag unknown (non whitelisted) binaries doing this and understand why they do so\\n:::\\n\\n### Attaching BPF Filter on a Raw Socket + Bonus\\n\\nFinally, the one we all expected and which gave its name to that malware ! We see that the executable is attaching a BPF\xa0filter to a raw socket `SOCK_RAW`.\\n\\n```json\\n{\\n  \\"data\\": {\\n    \\"command_line\\": \\"hald-runner\\",\\n    \\"exe\\": \\"/dev/shm/kdmtmpflush\\",\\n    \\"socket\\": {\\n      \\"domain\\": \\"AF_PACKET\\",\\n      \\"type\\": \\"SOCK_RAW\\"\\n    },\\n    \\"filter\\": {\\n      \\"md5\\": \\"19c9f9f52a7d7bf1f9c26dc57034873b\\",\\n      \\"sha1\\": \\"c97c5ad700f7426432dbe4d6478f362714e835f0\\",\\n      \\"sha256\\": \\"1a23f76646d1741946afd2d6d3ce3d0deae14198b544b09322a540c345953988\\",\\n      \\"sha512\\": \\"af9fce79e05316999ae3ef82ea7a04ce299c611cb46e27154e455b9f9bea42631a5293dd42cb0d332d5e10b8ed924930321cb3433b7989e6fe9042d97338d477\\",\\n      \\"len\\": 30,\\n      \\"size\\": 240\\n    },\\n    \\"attached\\": true\\n  },\\n  \\"info\\": {\\n    ...\\n    \\"event\\": {\\n      \\"source\\": \\"kunai\\",\\n      \\"id\\": 22,\\n      \\"name\\": \\"bpf_socket_filter\\",\\n      \\"uuid\\": \\"839aa10e-243a-3238-b221-9f7d0c1cac95\\",\\n      \\"batch\\": 51\\n    },\\n    \\"task\\": {\\n      \\"name\\": \\"hald-runner\\",\\n      \\"pid\\": 1748,\\n      \\"tgid\\": 1748,\\n      \\"guuid\\": \\"ff313459-4500-0000-82bb-77d6d4060000\\",\\n      \\"uid\\": 0,\\n      \\"gid\\": 0,\\n      \\"namespaces\\": {\\n        \\"mnt\\": 4026531840\\n      },\\n      \\"flags\\": \\"0x00400140\\"\\n    },\\n    \\"parent_task\\": {\\n      \\"name\\": \\"systemd\\", // this is init on this system\\n      \\"pid\\": 1,\\n      \\"tgid\\": 1,\\n      \\"guuid\\": \\"4b0dc405-0000-0000-82bb-77d601000000\\",\\n      \\"uid\\": 0,\\n      \\"gid\\": 0,\\n      \\"namespaces\\": {\\n        \\"mnt\\": 4026531840\\n      },\\n      \\"flags\\": \\"0x00400100\\"\\n    },\\n    \\"utc_time\\": \\"2023-09-05T09:33:07.600987330Z\\"\\n  }\\n}\\n```\\n\\nAttaching a BPF\xa0filter to a raw socket is definitely something suspicious ! But another thing interesting can be observed in this event. Our malware has suddently `systemd` as `parent_task`, while previously it was itself `hald-runner` (you have to look at the logs to verify that). So what the hell, happened ?\\n\\n:::info zombie process\\nA zombie process, is a process still running while it\'s parent is dead. When that happens the Linux Kernel makes the `init` process become the parent of the zombie process. Becoming a zombie is not something usually done on purpose as it is often the symptom of a bug. But if you are a malware you might use that trick to make people think your parent process is `init` binary (systemd in my case) and that you are a legitimate service.\\n:::\\n\\nSo this zombie process information is definitely something we can use to detect something strange is going on. In the log file, this event is the only one you will see with `systemd` as parent. This is because after that event the malware listen up for packets arriving on the raw socket. But don\'t worry, I\xa0can guarantee that any subsequent activity of this malware would have exactly the same anomaly and would give you even more opportunities to catch it.\\n\\n:::tip detection takeaways\\n* a binary attaching a BPF\xa0filter to a `SOCK_RAW`\\n* a binary attaching a BPF\xa0filter to a socket\\n  * increase severity if running in `/dev/shm`\\n  * increase severity if task name changed\\n    * increase severity if mimics a legit service\\n* any zombie process (parent_task became init pid=1)\\n  * increase severity if running in `/dev/shm` or unknown service binary\\n:::\\n\\n### Going Further, for Even More Detection Possibilities\\n\\nIf you looked at the logs, you have probably noticed that the [previous event](#attaching-bpf-filter-on-a-raw-socket--bonus) we described is one of the last interesting things we see. Afer, everything looks to cleanup events. This is not all with this malware at all, as you may have also observed that the task with pid 1748 didn\'t exit.\\n\\n```\\nroot@ebpf-ubuntu-20:/tmp# ps aux | grep 1748\\nroot        1748  0.0  0.0   2496    84 ?        Ss   Sep05   0:00 hald-runner\\n```\\n\\nThis is the task listening on the raw socket and waiting for commands. So the malware is still running and all we have analyzed so far are only the events generated when the malware is spawned on a system, we did not interact with the malware whatsoever. This is because I\xa0did not take the time to reverse-engineer the sample to know the password it expects when it receives packets on its raw socket. \\n\\n:::tip homework\\n* reverse the sample, find the key and send expected packets to the sample\\n* compile the malware from [sources][bpfdoor-src-code] (not guaranteed of being the exact same one) with a key you know and send packets to the sample\\n:::\\n\\nWhat we can see from the [BPFDoor sources][bpfdoor-src-code], is that we can expect even more detection possibilities:\\n\\n* the sample runs specific `iptables` commands\\n* it again changes task name, to `/usr/libexec/postfix/master`\\n* it can execute abitrary commands and very likely suspicious ones, which should not be ran from anything else than an interactive shell (`whoami`, `cat` ...). Programmers usually prefer using APIs rather than parsing shell outputs.\\n* we would see a binary located in `/dev/shm` communicating over the network\\n\\nAnother blind spot we have in this analysis is the original infection vector. I may have missed it but I\xa0didn\'t find this information online either. Anyway, what is important here is that knowing the infection vector would have been very likely an additional way to catch this sample. This is purely fictional but if we assume it went through a web server compromise, we would have seen at some point a `/dev/shm/kdmtmpflush` [execve event](/docs/events/execve) with a web server binary being in it\'s `ancestors` field.\\n\\n:::tip detection takeaways\\n* something executed from `/dev/shm` running commands\\n  * increase severity if running commands such as `iptables`, `whoami`, `cat`\\n* a binary using a shell to execute commands (might need some whitelisting)\\n* something running in `/dev/shm` communicating over the Internet\\n* any service that has an exposed port on the Internet executing an unexpected binary\\n:::\\n\\n### Bonus: Detecting the Mistakes made by BPFDoor Authors\\n\\nSomething I\xa0observed while running several times this BPFDoor sample is that it sometimes renames its task with something containing `/` (the Linux path separator). Such an example can be observed below. \\n\\n```json\\n{\\n  \\"data\\": {\\n    \\"exe\\": \\"/dev/shm/kdmtmpflush\\",\\n    \\"command_line\\": \\"/dev/shm/kdmtmpflush --init\\",\\n    \\"option\\": \\"PR_SET_NAME\\",\\n    \\"arg2\\": \\"0x605368\\",\\n    \\"arg3\\": \\"0x0\\",\\n    \\"arg4\\": \\"0x8\\",\\n    \\"arg5\\": \\"0x3\\",\\n    \\"success\\": true\\n  },\\n  \\"info\\": {\\n    ...\\n    \\"event\\": {\\n        ...\\n        \\"id\\": 7,\\n        \\"name\\": \\"prctl\\",\\n        ...\\n    },\\n    ...\\n    \\"task\\": {\\n      // new task name\\n      \\"name\\": \\"/usr/sbin/conso\\",\\n      ...\\n    },\\n    ...\\n}\\n```\\n\\nThis is even more obvious when looking at the [malware source code][bpfdoor-src-code], the name of the process is changed by randomly picking an entry in the following array.\\n\\n```c\\nchar *self[] = {\\n        \\"/sbin/udevd -d\\",\\n        \\"/sbin/mingetty /dev/tty7\\",\\n        \\"/usr/sbin/console-kit-daemon --no-daemon\\",\\n        \\"hald-addon-acpi: listening on acpi kernel interface /proc/acpi/event\\",\\n        \\"dbus-daemon --system\\",\\n        \\"hald-runner\\",\\n        \\"pickup -l -t fifo -u\\",\\n        \\"avahi-daemon: chroot helper\\",\\n        \\"/sbin/auditd -n\\",\\n        \\"/usr/lib/systemd/systemd-journald\\"\\n};\\n```\\n\\nThis caught my attention because this is not something you see very often in Linux and luckily for us there is a good explaination for that. The Linux Kernel, when performing execve it calls [begin_new_exec](https://elixir.bootlin.com/linux/latest/C/ident/begin_new_exec), itself calling [__set_task_comm(me, kbasename(bprm->filename), true)](https://elixir.bootlin.com/linux/latest/source/fs/exec.c#L1366). What it does is simple, `__set_task_comm` assigns the new task name with `kbasename(some_filename)`. And guess what, [kbasename](https://elixir.bootlin.com/linux/latest/C/ident/kbasename) is actually taking the [basename](https://en.wikipedia.org/wiki/Basename) out of a path.\\n\\n:::info\\ntask name is always **16 bytes** so any longer string is truncated. This is why in our event we see task name `/usr/sbin/conso`instead of `/usr/sbin/console-kit-daemon --no-daemon`\\n:::\\n\\nAll this to say that it should not be considered as normal to have a task name containing `/`. The `PR_SET_NAME` option of the prctl syscall is meant to change the task name. By convention (this is not enforced) task names does not contain any `/`. So it is not really a mis-use of the `prctl` syscall the malware authors did but they rather forgot/didn\'t know that Linux task name are not supposed to contain `/`. This anomaly could be used to detect such a bad programming practice, that I hope is seen only in malware !\\n\\n:::tip detection takeaways\\n* a task name containing `/` is abnormal (programming mistake)\\n* a task name not contained in the `exe` filename is suspicious for unknown binary. Some whitelisting would be needed as threaded programs often rename their threads with custom names.\\n:::\\n\\n## Conclusion\\n\\nAssuming we have Kunai running on our machine, would it be complicated to detect this kind of sample knowing what we know now ? I would say no as there are enough suspicious things we can rely on and which should not trigger that many false positives.\\n\\nThis is always easy to say that we can detect things a posteriori. In order to have a chance to catch such sample in the wild, relevant generic rules and eventually heuristics need to be built. This is why it is very important to make as much as possible this kind of exercise as it would help us filling the gaps in detection rules. Sorry for all the guys who think they are protected because they bought an expensive commercial solution but you\'d have to do this kind of work too, especially if you are a valuable target to attackers. I will not argue for hours about this but the main argument is that commercial solution are not bad per se, but they have to be generic enough to satisfy the more use cases as possible. Satisfying use cases is usually synonym of not having too many false positives, at the cost of discarding some true positives under some very specific/targetted environment. So if you have a commercial solution, do this job and enrich your detection rules, it won\'t be lost and you will probably make one of your engineers happy to use his brain.\\n\\nIn the reports, everyone tends to agree on one thing: this kind of malware is difficult to detect. Is it a question of stealthiness of the malware ? I\xa0don\'t think so, because we have seen it does a lot of very suspicious things, and we can expect many others (we did not interact with the shell). I rather think the issue is the lack of visibility most of the people have, at least those who cannot afford an EDR. So according to this absolutely impartial argument, it gives you a very good reason to use **Kunai**.\\n\\nHappy Threat Detection and Hunting\\n\\n## References\\n\\n### About BPFDoor\\n* [Source code (probably not exactly the same one)][bpfdoor-src-code]\\n* https://www.countercraftsec.com/blog/a-step-by-step-bpfdoor-compromise/\\n* https://exatrack.com/public/Tricephalic_Hellkeeper.pdf\\n* https://www.trendmicro.com/en_us/research/23/g/detecting-bpfdoor-backdoor-variants-abusing-bpf-filters.html\\n\\n[bpfdoor-src-code]: https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c"},{"id":"announcing-kunai","metadata":{"permalink":"/blog/announcing-kunai","source":"@site/blog/2023-06-23-announcing-kunai/index.md","title":"Announcing Kunai","description":"Why Kunai","date":"2023-06-23T00:00:00.000Z","formattedDate":"June 23, 2023","tags":[{"label":"announcement","permalink":"/blog/tags/announcement"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Quentin Jerome","title":"Kunai Maintainer","url":"https://github.com/qjerome","imageURL":"https://github.com/qjerome.png","key":"quentin"}],"frontMatter":{"slug":"announcing-kunai","title":"Announcing Kunai","authors":["quentin"],"tags":["announcement"]},"prevItem":{"title":"BPFDoor case study","permalink":"/blog/bpf-door-case-study"}},"content":"## Why Kunai\\n\\nBecause you guys are ninjas !"}]}')}}]);