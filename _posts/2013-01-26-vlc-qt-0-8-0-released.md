---
layout: post
title: VLC-Qt 0.8.0 released
date: 2013-01-26 14:20:00
categories: [Development]
tags: [Qt, Qt5, release, VLC-Qt]
feed: false
---

After a while, I finally released a new version of VLC-Qt. This version is mainly a bugfix release but also features some important changes.

The library has been separated into core and widgets part, because if used in QML, we do not need a dependency on QtWidgets module. Video widget has also been reworked a little bit.

VLC-Qt now supports both Qt4 and Qt5. I currently provide MSVC 2010 builds for Windows for both Qt versions, Ubuntu packages and Arch AUR. You can <a href="http://projects.tano.si/vlc-qt/" target="_blank">download</a> VLC-Qt from new SourceForge mirror or wait for all packages to be updated.