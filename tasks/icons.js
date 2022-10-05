const {src, dest} = require('gulp');

const path = require('../config/path.js');

const icons = () => {
  return src(path.icons.src)
  .pipe(dest(path.icons.dest))
}

module.exports = icons;