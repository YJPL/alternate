// We no longer use Gulp4 or Gulp at all
"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const cp = require("child_process");
const cssnano = require("cssnano");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const basswork = require("gulp-basswork");
const size = require("gulp-size");
const uglify = require("gulp-uglify");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}


// CSS task
function css() {
  return gulp
    .src("./src/alt-tachyons.css")
    .pipe(plumber())
    .pipe(basswork())
    .pipe(gulp.dest("./css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(size({gzip: false, showFiles: true, title:"cssnano css"}))
    .pipe(size({gzip: true, showFiles: true, title:"cssnano gzipped css"}))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/**/*", css);
  gulp.watch(
    [
      "*.html",
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_comics/**/*",
      "./_character-design/**/*",
      "./_whiteboard-animation/**/*",
      "./_branding/**/*",
      "./_portfolio/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
}

// Tasks
gulp.task("css", css);
gulp.task("jekyll", jekyll);

// build
gulp.task(
  "build",
  gulp.series(gulp.parallel(css, jekyll))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));
