const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// configs
const path = require('./config/path.js');

// tasks
const clear = require('./tasks/clear');
const pug = require('./tasks/pug');
const scss = require('./tasks/scss');
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
  watch(path.js.watch, js).on('all', browserSync.reload);
}

exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.clear = clear;

exports.dev = series(
  clear,
  parallel(pug, scss, js),
  parallel(watcher, server)
);

