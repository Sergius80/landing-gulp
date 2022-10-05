const {src, dest} = require('gulp');

const path = require('../config/path.js');

const images = () => {
  return src(path.images.src, {sourcemaps: true})
  .pipe(dest(path.images.dest, {sourcemaps: true}))
}

module.exports = images;