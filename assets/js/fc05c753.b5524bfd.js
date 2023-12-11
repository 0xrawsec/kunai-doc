"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[8e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"Configuration with Rules"},o=void 0,l={unversionedId:"advanced/rule_configuration",id:"advanced/rule_configuration",title:"Configuration with Rules",description:"Using Kunai to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some Kunai users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation.",source:"@site/docs/advanced/rule_configuration.md",sourceDirName:"advanced",slug:"/advanced/rule_configuration",permalink:"/docs/next/advanced/rule_configuration",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuration with Rules"},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/next/advanced/"},next:{title:"Compatibility",permalink:"/docs/next/compatibility"}},s={},m=[{value:"Detection Rules",id:"detection-rules",level:2},{value:"Example",id:"example",level:3},{value:"Filtering Rules",id:"filtering-rules",level:2},{value:"Example",id:"example-1",level:3},{value:"Memo about <strong>Kunai</strong> Rules",id:"memo-about-kunai-rules",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," is configured with some detection/filtering rules, ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," the events matching at least one rule will be shown.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"I intentionally do not go too deep into the rule format as it will be part of a dedicated documentation in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/0xrawsec/gene-rs"},"gene-rs project"))),(0,i.kt)("h2",{id:"detection-rules"},"Detection Rules"),(0,i.kt)("p",null,"Detection rules are made to detect ",(0,i.kt)("strong",{parentName:"p"},"suspicious/malicious security events")," happening on a running system. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"detection rules")," will make modifications to the matching events to provide information about the matching rule(s)")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here after you can find an example of a detection rule to detect an ",(0,i.kt)("inlineCode",{parentName:"p"},"execve")," event with a task name looking like\na typical Linux kernel task name. This is a technique sometimes used by malware to hide themselves."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# name of the rule\nname: mimic.kthread\n# metadata information\nmeta:\n    # tags of the rule\n    tags: [ 'os:linux' ]\n    # MITRE ATT&CK\xa0ids\n    attack: [ T1036 ]\n    # authors of the rule\n    authors: [ 0xrawsec ]\n    # comments about the rule\n    comments:\n        - tries to catch binaries masquerading kernel threads\n# acts as a pre-filter to speed up engine\nmatch-on:\n    events:\n        # we match on kunai execve and execve_script event ids\n        kunai: [1, 2]\nmatches:\n    # 0x200000 is the flag for KTHREAD\n    $task_is_kthread: .info.task.flags &= '0x200000'\n    # common kthread names \n    $kthread_names: .info.task.name ~= '^(kworker)'\n# if task is NOT a KTHREAD but we have a name that looks like one\ncondition: not $task_is_kthread and $kthread_names\n# severity is bounded to 10\xa0so it is the maximum score\nseverity: 10\n")),(0,i.kt)("p",null,"If you want to try the above rule and see\nhow ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," behaves when loaded with detection rules, you can do it easily:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dump the above rule in a file"),(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"kunai -r path_to_your_file")),(0,i.kt)("li",{parentName:"ol"},"open another terminal and trigger the rule by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"cp /usr/bin/ls /tmp/kworker && /tmp/kworker"))),(0,i.kt)("p",null,"If you have made the experiment, you may have noted that when the rule matches the event is modified and contains a new section named ",(0,i.kt)("inlineCode",{parentName:"p"},"detection"),". "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"View modified event"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",\n    "parent_exe": "/usr/bin/zsh",\n    "command_line": "/tmp/kworker",\n    "exe": {\n      "file": "/tmp/kworker",\n      "md5": "5a657abb15a5c469936ec86f420f7b39",\n      "sha1": "5d08746413e0e5f3242fe768266e39796007ca2d",\n      "sha256": "b97ab6fabafba27199d50a190a2ad6513ccf8ee722558e86d2a45fd2ac535c67",\n      "sha512": "eed4577694e87932beff79898f7abe5dfb672b7d4d4c02a57d86f96f62826f92bdd1514c80e0329d4f9861946cfb80563584074d64fbaf4ce2ee386f28d55433",\n      "size": 137848\n    }\n  },\n  "detection": {\n    "rules": [\n      "mimic.kthread"\n    ],\n    "tags": [\n      "os:linux"\n    ],\n    "attack": [\n      "T1036"\n    ],\n    "severity": 10\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 1,\n      "name": "execve",\n      "uuid": "d21cc4e6-35f9-4193-e879-84fdd4ce74f3",\n      "batch": 12\n    },\n    "task": {\n      "name": "kworker",\n      "pid": 1368247,\n      "tgid": 1368247,\n      "guuid": "2d83bc47-d838-0300-a6a2-85b0b7e01400",\n      "uid": 1000,\n      "gid": 1000,\n      "namespaces": {\n        "mnt": 4026531841\n      },\n      "flags": "0x400000"\n    },\n    "parent_task": {\n      "name": "zsh",\n      "pid": 302186,\n      "tgid": 302186,\n      "guuid": "1ce53685-7339-0000-a6a2-85b06a9c0400",\n      "uid": 1000,\n      "gid": 1000,\n      "namespaces": {\n        "mnt": 4026531841\n      },\n      "flags": "0x400000"\n    },\n    "utc_time": "2023-12-11T10:04:49.301495661Z"\n  }\n}\n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"if several rules match a single event, rule name(s) will appear in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.rules")),(0,i.kt)("li",{parentName:"ul"},"matching rules' ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"attack")," (MITRE ATT&CK) ids will stack up respectively in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.tags")," and ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.attack")),(0,i.kt)("li",{parentName:"ul"},"severities of ",(0,i.kt)("strong",{parentName:"li"},"rules matching")," are summed and put in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.severity"),". Severity is bounded to ",(0,i.kt)("strong",{parentName:"li"},"10"),"."))),(0,i.kt)("h2",{id:"filtering-rules"},"Filtering Rules"),(0,i.kt)("p",null,"Filtering rules on the other hand are made to ",(0,i.kt)("strong",{parentName:"p"},"select")," the logs we want ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," to show.\nWith those you can be very granular on the kind of logs you want to filter in/out.\nThe difference between a detection and a filtering rule is very little, it is just a switch\nto toggle in the rule."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Events matching ",(0,i.kt)("strong",{parentName:"p"},"ONLY filtering rules")," will be shown ",(0,i.kt)("strong",{parentName:"p"},"as is"),", which means that there will\nnot be any ",(0,i.kt)("inlineCode",{parentName:"p"},"detection")," section in the event.")),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Let's design a filtering rule to log every ",(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," event but the ones made by\na browser. Indeed any software using JIT\xa0is very likely to turn some memory pages protection\nto execute code."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," are interesting events to detect dynamic\ncode execution, such as shellcode. However, those events may be very noisy if you\nhave a browser running or any application making extensive use of JIT. So the following example\ncan be used as a base for a custom configuration to observe unknown ",(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," events.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: log.mprotect_exec\nparams:\n    # flag to set so that the rule is used as a filter\n    filter: true\nmatch-on:\n    events:\n        # kunai mprotect_exec event id\n        kunai: [ 40 ]\nmatches:\n    # exe matches regex\n    $browser: .data.exe ~= '/usr/lib/(firefox/firefox|chromium/chromium)'\n# if exe is neither firefox nor chromium\ncondition: not $browser\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Adapt the ",(0,i.kt)("inlineCode",{parentName:"li"},"$browser")," match if needed"),(0,i.kt)("li",{parentName:"ul"},"You can try to reverse the condition (remove ",(0,i.kt)("inlineCode",{parentName:"li"},"not"),") and see the difference"))),(0,i.kt)("h2",{id:"memo-about-kunai-rules"},"Memo about ",(0,i.kt)("strong",{parentName:"h2"},"Kunai")," Rules"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"rules are written in ",(0,i.kt)("a",{parentName:"li",href:"https://yaml.org/"},"YAML")),(0,i.kt)("li",{parentName:"ol"},"several rules can be defined in a single file (see ",(0,i.kt)("a",{parentName:"li",href:"https://yaml.org/spec/1.2.2/#chapter-9-document-stream-productions"},"YAML documents"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"put ",(0,i.kt)("strong",{parentName:"li"},"a line")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"---")," before rule starts and ",(0,i.kt)("strong",{parentName:"li"},"a line"),"  with ",(0,i.kt)("inlineCode",{parentName:"li"},"...")," after rule ends"))),(0,i.kt)("li",{parentName:"ol"},"one can use ",(0,i.kt)("strong",{parentName:"li"},"Kunai")," with rules either from from ",(0,i.kt)("a",{parentName:"li",href:"../configuration#configuration-file"},"config")," or from ",(0,i.kt)("a",{parentName:"li",href:"../configuration#advanced-cli-usage"},"cli")),(0,i.kt)("li",{parentName:"ol"},"a rule can either be a ",(0,i.kt)("strong",{parentName:"li"},"detection")," OR a ",(0,i.kt)("strong",{parentName:"li"},"filtering")," rule",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"filtering rules output event ",(0,i.kt)("strong",{parentName:"li"},"as is")),(0,i.kt)("li",{parentName:"ul"},"detection rules output event with ",(0,i.kt)("strong",{parentName:"li"},"detection information")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection")," section"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"match-on")," section is very important as it allow to quickly filter events"),(0,i.kt)("li",{parentName:"ol"},"every ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"matches")," must be in the form ",(0,i.kt)("inlineCode",{parentName:"li"},"$OPERAND: FIELD_PATH OPERATOR 'VALUE'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FIELD_PATH"),":\xa0",(0,i.kt)("strong",{parentName:"li"},"field's absolute path")," starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"."),", separated by ",(0,i.kt)("inlineCode",{parentName:"li"},".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPERATOR"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==")," : ",(0,i.kt)("strong",{parentName:"li"},"equality operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">="),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"li"},">"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<")," : ",(0,i.kt)("strong",{parentName:"li"},"comparison operators")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&=")," : ",(0,i.kt)("strong",{parentName:"li"},"flag checking operator")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~=")," : ",(0,i.kt)("strong",{parentName:"li"},"regex operator")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"string")," regex following ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/regex/latest/regex/#syntax"},"syntax")))),(0,i.kt)("li",{parentName:"ul"},"every ",(0,i.kt)("strong",{parentName:"li"},"field value")," found at ",(0,i.kt)("inlineCode",{parentName:"li"},"FIELD_PATH")," are expected to be of the same type than ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"condition")," supports ",(0,i.kt)("inlineCode",{parentName:"li"},"not"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," keywords")))}d.isMDXComponent=!0}}]);