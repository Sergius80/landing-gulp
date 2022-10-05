const pathSrc = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,

  pug: {
    src: pathSrc + '/template/*.pug',
    watch: pathSrc + '/template/**/*.pug',
    dest: pathDest
  },
  
  scss: {
    src: pathSrc + '/styles/main.scss',
    watch: pathSrc + '/styles/**/*.scss',
    dest: pathDest + '/css'
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js'
  },

}