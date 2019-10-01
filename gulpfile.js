// plugins
const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const minifyCss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
// const sass = require('gulp-sass');
// const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
// const cssnano = require('cssnano');
// sass.compiler = require('node-sass');
const browsersync = require('browser-sync').create();

const distFolder = './dist';

const paths = {
  css: {
    src: './src/assets/css/**/*.css',
    dest: './dist/assets/css/',
  },
  html: {
    src: './src/**/*.html',
    dest: './dist/',
  },
  img: {
    src: './src/assets/img/**/*',
    dest: './dist/assets/img/',
  },
};

// test
/* function test(done) {
  console.log('un premier test qui ne sert à rien');
  done();
} */


function browserSync() {
  browsersync.init({
    server: {
      baseDir: distFolder,
    },
    port: 3000,
  });
}

// clean dist
function clear() {
  return del([distFolder]);
}

function html() {
  return (
    gulp
      .src(paths.html.src, { since: gulp.lastRun(html) })
      .pipe(plumber())
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(paths.html.dest))
      .pipe(browsersync.stream())
  );
}


function css() {
  return (
    gulp
      .src(paths.css.src, { since: gulp.lastRun(css) })
      .pipe(plumber())
      .pipe(autoprefixer({
        browsers: ['last 3 versions'],
      }))
      .pipe(minifyCss())
      .pipe(gulp.dest(paths.css.dest))
      .pipe(browsersync.stream())
  );
}


function images() {
  return (
    gulp
      .src(paths.img.src)
      .pipe(plumber())
      .pipe(imagemin())
      .pipe(gulp.dest(paths.img.dest))
      .pipe(browsersync.stream())
  );
}

function watchFiles() {
  // Ecoute ce qui se passe sur paths.css.src, et lance la fonction css s'il y a des modifs
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.img.src, images);
}

const build = gulp.series(clear, html, css, images);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));


// exports
exports.clear = clear;
exports.default = watch;



