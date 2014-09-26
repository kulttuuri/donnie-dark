# Donnie Dark

Donnie Dark is dark, responsive, customizable theme for [Ghost](http://ghost.org) 0.5+ blogs. Name of the theme is hats-off for a great movie. **See it live [here](http://kulttuuri.me)!**

![Donnie Dark Screenshot](http://i.imgur.com/f1TBcLx.jpg)

## Features

* [JQuery](http://jquery.com/) (shipped with Ghost)
* [Bootstrap](http://getbootstrap.com/) 3.2.0
* [Pure](http://purecss.io/) 0.5
* [Tooltipster](http://iamceege.github.io/tooltipster/) 3.2.6
* [Wow.js](http://mynameismatthieu.com/WOW/)
* [Animate.css](http://daneden.github.io/animate.css/)
* [Font-Awesome](http://fortawesome.github.io/Font-Awesome/) 4.2.0
* Elegant [Disqus](https://disqus.com/) and [Google Analytics](http://www.google.com/analytics/) integration.

## Installation

See [this documentation](https://www.digitalocean.com/community/tutorials/how-to-change-themes-and-adjust-settings-in-ghost) on installing themes for Ghost blog.

## Customizing

This theme includes a javascript configuration file that can be edited to elegantly utilize Google Analytics and Disqus. It is also possible to easily edit header of the page, changing links and social icons to your liking.

### Enabling Google Analytics or Disqus

* Open file ```your_ghost_installation/content/themes/donnie-dark/assets/js/config.js```.
* To add Google Analytics to your site, add your google analytics key to  ```donnie_dark_config_google_analytics_key = ''```.
* To add Disqus to your site, add your disqus shortname to ```donnie_dark_config_disqus_shortname = ''```.

To read more about how this configuration file works and / or how you can add similar to your theme, [read my blog post about it](http://kulttuuri.me/elegant-disqus-and-google-analytics-integration-for-ghost-blog/).

### Editing page header

Page header is contained in ```default.hbs```. By default the page header contains left and right sections. On the left you have blog name and links to static pages. On the right you have social icons and blog cover image. You can find all social icons from the [font-awesome webpage](http://fortawesome.github.io/Font-Awesome/icons/#brand).

## Thank You

* Took example of ghost theme structure from [sheet](https://github.com/brianokeefe/sheet) theme by brianokeefe.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
