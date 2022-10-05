const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// configs
const path = require('./config/path.js');

// tasks
const clear = require('./tasks/clear');
const pug = require('./tasks/pug');
const scss = require('./tasks/scss');
const fonts = require('./tasks/fonts');
const icons = require('./tasks/icons');
const images = require('./tasks/images');
const js = require('./tasks/js');

// server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

// watcher
const watcher = () => {
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.fonts.watch, fonts).on('all', browserSync.reload);
  watch(path.icons.watch, icons).on('all', browserSync.reload);
  watch(path.images.watch, images).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
}

exports.pug = pug;
exports.scss = scss;
exports.fonts = fonts;
exports.icons = icons;
exports.images = images;
exports.js = js;
exports.clear = clear;

exports.dev = series(
  clear,
  parallel(pug, scss, fonts, icons, images, js),
  parallel(watcher, server)
);

