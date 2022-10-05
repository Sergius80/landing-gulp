const {src, dest} = require('gulp');
const pugHtml = require('gulp-pug');

const path = require('../config/path.js');
const app = require('../config/app.js');

const pug = () => {
  return src(path.pug.src)
  .pipe(pugHtml(app.pug))
  .pipe(dest(path.pug.dest))
}

module.exports = pug;