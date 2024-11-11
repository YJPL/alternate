---
title: Theme setup
author: author
layout: post
description_markdown: >-
  Start your site using Jekyll + the alternate theme.
date: 2024-11-11 12:48:59 +0100
categories: [Jekyll, tutorial]
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

You can change the site styling using [Tachyons](http://tachyons.io), look for the CSS in the `sup-theme` file, located in the `src` folder.

Tachyons is a CSS toolkit and design system based on using components. Please refer to [Tachyons documentation](http://tachyons.io/docs/), you can also start with [https://github.com/dwyl/learn-tachyons](https://github.com/dwyl/learn-tachyons)

Once you are done with your style changes, run:

Run the npm run 
~~~bash
build:css
~~~

That will process all your CSS files in one readable file located in `assets/css/alt-tachyons.css`. 

to minify your css you can run 

```
npm run minify-css
```

or 

```
npm run start
```

to minify and build the site locally.

### npm commands with browser reload

Supply uses a couple of custom Postcss npm scripts. Make sure your dependencies are installed: `npm install`. Type `npm outdated` to see if you have outdated versions, then install any outdated dependencies.

Once that is done, to build your site & concatenate your CSS (in `assets` -> `CSS`), simply run:

```
npm run start
```

This command builds the site locally on port 4000, you can quickly revise design changes thanks to `livereload`.


## Editing

### Posts

* Add, update or remove a post in the *Posts* collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Collections

Read about [collections](https://jekyllrb.com/docs/collections/) in the Jekyll documentation.
{: .notice}
