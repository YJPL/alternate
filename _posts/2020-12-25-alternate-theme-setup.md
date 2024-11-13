---
title: Theme setup
author: author
layout: post
description_markdown: >-
  Start your site using Jekyll + the alternate theme.
date: 2020-12-25 12:48:59 +0100
last_modified_at: "2024-11-13"
categories: [Jekyll, tutorial]
---
## Getting started with Jekyll + *alternate*
alternate was initially designed as a portfolio theme for [alternatyves](https://alternatyves.com). You can use this theme to start a regular Jekyll blog and tweak it any way you like.

## Features
- [x] Image index start page
- [x] Blog
- [x] [jekyll-archives](https://github.com/jekyll/jekyll-archives) to build and sort through categories & tags pages
- [x] RSS/Atom feed
- [x] SEO tags
- [x] Microdata markup
- [x] Jekyll `livereload` + NPM for fast development
- [x] Built-in site search (does not work with GitHub Pages)


## Get Started

Install [Jekyll](https://jekyllrb.com/docs/installation/)

```
git clone git://github.com/YJPL/alternate.git
cd alternate
(npm install tachyons)
npm start
```
That should do the trick.
Add your site and author details in `_config.yml`.
Get a workflow going to see your site's output with Jekyll locally using Jekyll commands or Gulp.

Then open another tab in terminal and run

```
bundle exec jekyll serve --watch
```

This will build the site.

This sets up a Jekyll server for dev on port 4000. The site is regenerated every time you save a file.
NOTE: Changing ```_config.yml``` will require a restart of the Jekyll server to see changes.

To restart server, go to terminal tab that server is running in then press

`ctrl+C ⇧  enter`
then

To fire Jekyll with auto-regeneration, use:

`npm run start`

This runs a series of tasks: minifies CSS, images and Javascript.

This command builds the site locally on port 4000, with livereload so you can quickly revise design changes.


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
