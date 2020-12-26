---
title: Theme setup
author: author
layout: post
description_markdown: >-
  Start your site using Jekyll + the alternate theme.
date: 2020-12-25 12:48:59 +0100
categories: [Jekyll, tutorial]
text-button: I demand Supply!
---
## Getting started with Jekyll + *alternate*
alternate was designed as a portfolio theme for [alternatyves](https://alternatyves.com), but you can use this theme to start a regular Jekyll blog and tweak it any way you like.

## Setup

1. Install [Jekyll](https://jekyllrb.com/docs/installation/)
2. Add your site and author details in `_config.yml`.
3. Get a workflow going to see your site's output with Jekyll locally using Jekyll commands or Gulp.

*Supply* was built with [Jekyll](http://jekyllrb.com/) version 4.0.0, and should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

### Config
Add your custom configuration in the ```_config``` file.

### Navigation

Exposed as a data file to give clients better access
Set in the *Data* / *Navigation* section, look for ```navigation.yml``` in  ```_data```.

### Footer
Look for ```footer.html``` in ```_includes``` to add your footer links.

## Develop

### Tachyons

You can change the site styling using [Tachyons](http://tachyons.io), look for `sup-theme` in the `src` folder.

Please refer to Tachyons documentation, you can also start with [https://github.com/dwyl/learn-tachyons](https://github.com/dwyl/learn-tachyons)

### Gulp commands with browser reload

In the terminal, simply run

~~~bash
gulp build
~~~

to build your site concatenate your css (in `asset` -> `css`)


Use


~~~bash
gulp watch
~~~

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.


Preview your site with browser reload at: [localhost:3000](http://localhost:3000)
Use the address localhost:3001 for additional help like grid preview, css highlight and more during development.


## Editing

### Posts

* Add, update or remove a post in the *Posts* collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Collections

Read about [collections](https://jekyllrb.com/docs/collections/) in the Jekyll documentation.
{: .notice}
