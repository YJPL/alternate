---
title: Theme development
layout: post
description_markdown: >-
  Custom commands, styling and development notes for alternate.
author: author
date: 2020-12-26 12:48:59 +0100
last_modified_at: "2024-11-13"
categories: [Jekyll, tutorial]
---
## Develop


### includes

The ```_includes``` folder is where you can change the functions of your blog.


### Layouts
The ```_layouts``` folder is where you can change the structure of your pages layout.

### Collections
By default, products are showcased in `_products` collection, all or only highlighted templates are show on the home page. You can also add Gumroad overlay for products in posts thanks to an include. You'll find a few product pages as samples

### Styling with Tachyons


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

Preview your site with browser reload at: [localhost:3000](http://localhost:3000)
Use the address localhost:3001 for additional help like grid preview, css highlight and more during development.

## Contribute
alternate code is freely available and contributions are welcome.
If you find a bug or have an idea how to improve this theme, please [open a pull request on GitHub](https://github.com/YJPL/alternate/pull/new/master).

Contribute to *alternate* [alternate repo](https://github.com/YJPL/alternate/)
{: .notice}
