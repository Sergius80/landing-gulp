const rimraf  = require('rimraf');
const path = require('../config/path.js');

const clear = (cb) => {
  return rimraf(path.root, cb);
}

module.exports = clear;