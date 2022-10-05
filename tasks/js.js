const {src, dest} = require('gulp');
const path = require('../config/path.js');

const js = () => {
  return src(path.js.src, {sourcemaps: true})
  .pipe(dest(path.js.dest, {sourcemaps: true}))
}

module.exports = js;