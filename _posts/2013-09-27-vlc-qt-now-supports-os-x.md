---
layout: post
title: VLC-Qt now supports OS X
date: 2013-09-27 19:59:00
categories: [Development]
tags: [OS X, release, VLC-Qt]
postid: 142 http://blog.tano.si/?p=142
---

VLC-Qt 0.9.0 has been released with major new feature - OS X support. I will support OS X 10.6 and later, 64-bit only. Binaries are not yet available due to absolute linking. You need to use <i>macdeployqt</i> tool on your application bundle to fix includes.

There were also some other general fixes, most important of them was encoding fix for Windows. Release and debug builds are available for Windows in both 32 and 64-bit flavours. They are based on MSVC2012, Qt 5.1.1 and VLC 2.0.8.

Ubuntu packages are also available. Arch packages are coming later with Tano 2.0 Beta so we do not break compatibility.