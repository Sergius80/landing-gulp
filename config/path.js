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

  fonts: {
    src: pathSrc + '/fonts/*.*',
    watch: pathSrc + '/fonts/**/*.*',
    dest: pathDest + '/fonts'
  },

  icons: {
    src: pathSrc + '/icon-fonts/*.*',
    watch: pathSrc + '/icon-fonts/**/*.*',
    dest: pathDest + '/icon-fonts'
  },

  images: {
    src: pathSrc + '/images/**/*.*',
    watch: pathSrc + '/images/**/*.*',
    dest: pathDest + '/images'
  },
}