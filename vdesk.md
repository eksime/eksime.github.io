---
layout: page
title: vDesk test
---

vDesk is a small utility to extend the functionality provided by Windows 10's Virtual Desktops. 

It allows you to open virtual desktops, and launch programs on other desktops via shortcuts.

#### Usage:

*Please note that VDesk requires Windows 10, and does not allow the use of virtual desktops on other versions of Windows*

Create n new desktops:

`vdesk create [n]`

Create up to n desktops:

`vdesk create-max [n]`

Run a program on a new desktop:

`vdesk run [command] [args]`

> **Note:** It is common for applications that have a background process (like Chrome / Skype) to not launch on the correct desktop when using a `run` or `run-on` command. Try using a `*-switch` command, and check the program's command line options for ways to create a new window - For example Chrome has the /new-window option, which allows it to work with `*-switch` commands.

Run a program on a new desktop, and switch to it:

`vdesk run-switch [command] [<args>]`

Run a program on desktop n:

`vdesk run-on [n] [command] [<args>]`

Run a program on desktop n, and switch to it:

`vdesk run-on-switch [n] [command] [<args>]`

Generally, prepending a shortcut's 'target' field with `vdesk run` will have it launch in its own virtual desktop. Command line arguments to applications should be preserved.

#### Examples:
To launch notepad on a new desktop:

`vdesk run notepad`

To launch notepad on desktop 3 and open `C:\some file.txt`:

`vdesk run-on 3 notepad "C:\some file.txt"`

To launch a new VirtualBox vm fullscreen on its own virtual desktop, and switch to it:

`vdesk run-switch "C:\Path to Vbox\VirtualBox.exe" --comment "VM" --startvm "vm-id-no" --fullscreen`

To open Github in a new Chrome window on a new virtual desktop:

`vdesk run-switch "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" /new-window "https://github.com"`

### Download:

Download the [Latest Release](https://github.com/eksime/VDesk/releases/latest) on Github!

Have a suggestion / contribution / bug report? See the [Github project page](https://github.com/eksime/VDesk).