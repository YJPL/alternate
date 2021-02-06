# alternate Y2K20
:new_moon: this is the Jekyll theme used for [@alternatyves](https://alternatyves.com) portfolio site

![alternate screenshot](img/alternate-JKLL.png)

To check the Jekyll theme minus content, go to: [GitHub link](link)

# Get Started

```
git clone git://github.com/YJPL/alternate.git
cd alternate
(npm install tachyons)
npm start
```
That should do the trick.
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

`gulp build`

This runs a series of tasks: minifies CSS, images and Javascript.


To fire Jekyll with auto-regeneration, use:

`gulp watch`

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.(the project uses Gulp `CLI version 2.0.1` / Local version `4.0.0`)


## Optimize Images

run

`gulp images`

to optimize images from "Illustrations" folder into "img", which is the production folder.
Since you only need to run this once, you should remove pictures from the "Illustrations" folder before you add the next batch.

## Responsive images
For a portfolio, this aspect is important. Resized images are served by the [jekyll-picture-tag](https://github.com/rbuchberger/jekyll_picture_tag) plugin to `_site/images/generated`

The site also use a custom ruby plugin that will replace Markdown images eg. `![description](image.jpg)` with `{% picture %}` tag

It means that you no longer need to write special markup for responsive image such as `{% picture image.jpg --alt alt text for image --title image title %}`, and that, should you stop using the picture tag plugin, the site images would not break (assuming you keep the little `img_tag_transform.rb` ruby plugin in place, otherwise you’d need to write `![description](img/image.jpg)` for the images to display.

Make sure there there is no space in image names!!!

## Site Structure

In Terminal, CD `alternate` then run `Tree` to get a directory tree of the site files.

## Notes
Blog posts are in `alternate/_posts/`
There are three layouts, one for posts, one for other pages, and one for long form articles. Layouts are stored
in `alternate/_layouts/` Folders that begin with an underscore are not copied over to
`_site`. The home page has its own layout (root index.html file). Drafts are used for development & testing purpose.

## Collections

Collections include portfolio works and other -> see `_config.yml` frontmatter for specific configuration.

# Credits & thanks

Build with [Jekyll](https://jekyllrb.com) loosely based on [JKL + TACHYONS](https://github.com:mrmrs/jkl-tachyons), (c) 2015 @mrmrs

Thanks to [GitHub](https://github.com/) for code versioning and to [Netlify](https://www.netlify.com) for deployment and content delivery.

# Copyright / License

The content of this project itself, all illustrations & design works are (c) Yves JPL Capelle / [alternate outc.](https://alternate.com) / SOFAM. The underlying source code used to format and display that content is licensed under the MIT license.

# License

The MIT License (MIT)

Copyright (c) 2020 @YJPL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
