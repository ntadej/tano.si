---
layout: post
title: How to support retina screens in Qt?
date: 2013-10-26 18:09:00
categories: [Development, Blog]
tags: [Qt, Qt, retina, tip]
topicId: 17
---

As a single developer on my open-source player Tano, I have always supported the primary platform that I worked on. A while ago, my old Dell finally gave out - fried USB controller after 8 years of usage - and I invested in a Macbook Pro. Why retina? I got discount as this was a previous model and people in our part are famous to save money ;)

The first thing that bothered me was that my application looked ugly! All icons and graphics were pixelated or worse. So I started adapting my Qt application to HiDPI and OS X overall. This report may be a little late but someone may still need to adapt a application to retina.

<!--more-->
{% img /resources/2013/mute-volume.png|Example of proper mute icon from theme and low-res volume indicator|right %}

There were three main aspects to be adapted for retina: <strong>integrated icons</strong> (in a resource file), <strong>icon theme</strong> and <strong>painted</strong> elements.


<h3>Integrated icons</h3>
Since Qt 5.1 (this is the Qt version I stared working on on OS X) there supposed to be full HiDPI support. I use integrated icons as a pure QIcon or converted to QPixmap. Qt uses Apple's <strong>@2x</strong> notation for detecting bigger icons, thus detecting the high-resolution image and replacing it automatically. So I added all double-sized icons to my resources and this fixed the rendering issues - almost. Converting to QPixmap from ui files did not work, so I added icons directly in the code passing the desired pixmap size at conversion.

{% highlight c++ linenos %}
ui->labelIcon->setPixmap(QIcon(":/logo/64x64/logo.png").pixmap(64));
{% endhighlight %}

<h3>Icon theme</h3>
I use icon themes for icons so Linux users can use their default system theme. What to do now with retina? Qt was smart enough to automatically use larger icons but I use <a title="Faenza" href="https://www.google.si/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=10&amp;cad=rja&amp;ved=0CEIQFjAJ&amp;url=http%3A%2F%2Ftiheum.deviantart.com%2Fart%2FFaenza-Icons-173323228&amp;ei=2-prUte_Hojoswatr4CwDQ&amp;usg=AFQjCNGBzaAiRZjl90E9kVF69u7fa9viSw&amp;sig2=j_VA7gGx3xcjNPhR0rdvNw&amp;bvm=bv.55123115,d.Yms" target="_blank">Faenza</a> icon theme, which uses different icons for smaller sizes. Being open-source, I generated all icons in 2x size and created tano-default@2x theme. On runtime I check if pixel ratio is large enough and change icon theme.

{% highlight c++ linenos %}
void Tano::Style::setIconName()
{
    QScopedPointer<Settings> settings(new Settings());
    if (!settings->icons().isEmpty()) {
        QString name = settings->icons();
#if defined(Q_OS_MAC)
        if (qApp->devicePixelRatio() >= 2)
            name.append("@2x");
#endif
        QIcon::setThemeName(name);
    }
}
{% endhighlight %}

I also experienced Qt bug with data detection so I needed to add the following code to detect deployed icons in Tano.app/Contents/Resources/icons

{% highlight c++ linenos %}
#if defined(Q_OS_MAC)
    paths.prepend(QCoreApplication::applicationDirPath().replace("MacOS", "Resources") + "/icons");
#endif
{% endhighlight %}

<h3>Painting</h3>
{% img /resources/2013/dialogs.png|Strange icons in dialogs|right %}

This part was simple. You just need to be sure to multiply all sizes with <strong>devicePixelRatio()</strong> and it will render properly.

&nbsp;

There are still many parts of Tano not retina-ready at the moment that are my fault (non existing high-resolution images) or Qt's (default painted items, dialog icons).

Next step? Adding proper retina support to my new webpage.
