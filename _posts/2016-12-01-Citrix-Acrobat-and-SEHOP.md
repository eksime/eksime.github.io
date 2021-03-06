---
layout: post
title: Citrix, Acrobat and SEHOP
---

One of our users requires the use of Acrobat pro for editing PDFs. Normally they'd run Acrobat on their own machine, but we've recently switched to running Citrix XenDesktop on Windows Server 2012 R2. While most software worked fine, Acrobat DC would always crash on startup. 
<!--more-->

The crash was occuring in PDApp.exe, which is the Adobe Application Manager, and gave the following information: 

    Application Error 1000 :
 
    Faulting application name: PDApp.exe
    Faulting module name: KERNELBASE.dll
    Exception code: 0x40010006
    Fault offset: 0x0000c54f

    Faulting application path: C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\core\PDApp.exe
    Faulting module path: C:\Windows\syswow64\KERNELBASE.dll

After contacting Adobe, who *insisted* installing Adobe Application Manager 10 would fix it (It didn't - AAM 10 was alreay installed) we spent a long time trying many different 'fixes' to no avail.

We were looking at issues within Adobe Reader/Acrobat that could cause this, but until we had the 'aha' moment of realising the crash was occuring in kernelbase.dll we hadn't thought of checking if Windows was interfering. After much prodding and poking with [Process Monitor](https://technet.microsoft.com/en-us/sysinternals/processmonitor.aspx) we determined the process was being terminated by SEHOP protection in EMET, which is enabled by default on Windows Server 2012 R2 ([More info here](https://krebsonsecurity.com/2013/06/windows-security-101-emet-4-0/)). To fix the issue, SEHOP needs to be disabled for PDApp.exe, which is done via a registry key.

You can 'Save link as...' the 'view raw' link to download a .reg file to create the keys for you, or create the following manually:

{% gist bb1350679b70c513ba075dceef8d9e02 %}
