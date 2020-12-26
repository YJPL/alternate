---
title: Theme development
layout: post
description_markdown: >-
  Custom commands, styling and development notes for alternate.
author: author
date: 2020-12-26 12:48:59 +0100
categories: [Jekyll, tutorial]
---
## Develop

All the files

```
alternate % tree
.
├── 301.txt
├── Gemfile
├── Gemfile.lock
├── LICENSE
├── README.md
├── _config.yml
├── _data
│   ├── navigation.yml
│   └── theme.yml
├── _includes
│   ├── Gumroad-secured.html
│   ├── category_tag_list.html
│   ├── figure
│   ├── formcarry.html
│   ├── gumroad-embed.html
│   ├── gumroad-link.html
│   ├── gumroad-overlay.html
│   ├── navigation.html
│   ├── post_pagination.html
│   ├── product-styles.html
│   ├── relative-src.html
│   ├── site-search.html
│   ├── social-icon.html
│   └── video.html
├── _layouts
│   ├── archive.html
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   └── product.html
├── _pages
│   ├── 404.md
│   ├── about.md
│   ├── blog.html
│   ├── contact-success.html
│   ├── contact.html
│   ├── free-products.html
│   ├── privacy.md
│   └── support.md
├── _posts
│   ├── 2020-04-12-how-to-use-jekyll.md
│   ├── 2020-04-12-alternate-theme-setup.md
│   ├── 2020-04-14-theme-development.md
│   ├── 2020-04-15-add-a-product-page.md
│   ├── 2020-04-15-custom-variables.md
│   ├── 2020-04-16-post-formatting.md
│   ├── 2020-04-17-post-with-products.md
│   ├── 2020-04-18-gumroad-embed.md
│   ├── 2020-04-18-gumroad-hyperlink.md
│   ├── 2020-04-18-gumroad-overlay.md
│   ├── 2020-04-19-post-updated.md
│   ├── 2020-04-20-post-video.md
│   ├── 2020-04-21-code-blocks.md
│   └── 2020-04-24-built-in-site-search.md
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── assets
│   ├── css
│   │   ├── sup-tachyons.css
│   │   └── sup-tachyons.min.css
│   ├── js
│   │   └── fetch.js
│   └── search.json
├── browserconfig.xml
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── gulpfile.js
├── images
│   ├── image-1200.jpg
│   ├── image-600.jpg
│   ├── screenshot.png
│   └── templates
│       ├── assignments
│       │   └── assignments_tracker_spreadsheet.png
│       ├── free-pdf-storyboards
│       │   ├── Japanese_Anime_storyboard-template_1.85x1_A4-vertical.png
│       │   ├── storyboard-anime-template_1.85x1_A4-vertical_photoshop_preview.png
│       │   └── storyboard-anime-template_1.85x1_A4-vertical_print_preview.png
│       ├── jekyll
│       │   ├── Soon_Jekyll-template-sample.png
│       │   └── alternate-temp.png
│       └── screenplay
│           ├── Screenplay_Cole_Haag_template.png
│           └── Screenplay_Warner_Brothers_template.png
├── index.html
├── js
├── mstile-144x144.png
├── mstile-150x150.png
├── mstile-310x150.png
├── mstile-310x310.png
├── mstile-70x70.png
├── package-lock.json
├── package.json
├── robots.txt
├── safari-pinned-tab.svg
├── site.webmanifest
├── siteicon.png
└── src
    ├── _aspect-ratios.css
    ├── _background-position.css
    ├── _background-size.css
    ├── _border-colors.css
    ├── _border-radius.css
    ├── _border-style.css
    ├── _border-widths.css
    ├── _borders.css
    ├── _box-shadow.css
    ├── _box-sizing.css
    ├── _clears.css
    ├── _code.css
    ├── _colors.css
    ├── _coordinates.css
    ├── _debug-children.css
    ├── _debug-grid.css
    ├── _debug.css
    ├── _display.css
    ├── _flexbox.css
    ├── _floats.css
    ├── _font-family.css
    ├── _font-style.css
    ├── _font-weight.css
    ├── _forms.css
    ├── _heights.css
    ├── _hovers.css
    ├── _images.css
    ├── _letter-spacing.css
    ├── _line-height.css
    ├── _links.css
    ├── _lists.css
    ├── _max-widths.css
    ├── _media-queries.css
    ├── _module-template.css
    ├── _negative-margins.css
    ├── _nested.css
    ├── _normalize.css
    ├── _opacity.css
    ├── _outlines.css
    ├── _overflow.css
    ├── _position.css
    ├── _rotations.css
    ├── _skins-pseudo.css
    ├── _skins.css
    ├── _spacing.css
    ├── _styles.css
    ├── _tables.css
    ├── _text-align.css
    ├── _text-decoration.css
    ├── _text-transform.css
    ├── _type-scale.css
    ├── _typography.css
    ├── _utilities.css
    ├── _vertical-align.css
    ├── _visibility.css
    ├── _white-space.css
    ├── _widths.css
    ├── _word-break.css
    ├── _z-index.css
    ├── sup-tachyons.css
    ├── sup-theme.css
    └── tachyons.css
```

### includes

### Layouts
The ```_layouts``` folder is where you can change the structure of your pages layout.

### Collections
By default, products are showcased in `_products` collection, all or only highlighted templates are show on the home page. You can also add Gumroad overlay for products in posts thanks to an include. You'll find a few product pages as samples

### Styling with Tachyons

You can change the site styling thanks to [Tachyons](http://tachyons.io). All the theme's custom CSS are in a single place: look for `sup-theme` in the `src` folder.

Please refer to [Tachyons documentation](http://tachyons.io/docs/), you can also start with [https://github.com/dwyl/learn-tachyons](https://github.com/dwyl/learn-tachyons)

### Gulp commands with browser reload

To see your changes, in the terminal, simply run

~~~bash
gulp build
~~~

that will build your site and concatenate your css (in `asset` -> `css`)


then, use


~~~bash
gulp watch
~~~

to check your site locally.

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.


Preview your site with browser reload at: [localhost:3000](http://localhost:3000)
Use the address localhost:3001 for additional help like grid preview, css highlight and more during development.

## Contribute
alternate code is freely available and contributions are welcome.
If you find a bug or have an idea how to improve this theme, please [open a pull request on GitHub](https://github.com/YJPL/alternate/pull/new/master).

Contribute to *alternate* [alternate repo](https://github.com/YJPL/alternate/)
{: .notice}
