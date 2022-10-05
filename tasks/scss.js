const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const path = require('../config/path.js');

const scss = () => {
  return src(path.scss.src, {sourcemaps: true})
  .pipe(sass())
  .pipe(dest(path.scss.dest, {sourcemaps: true}))
}

module.exports = scss;