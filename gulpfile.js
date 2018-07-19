const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  sty: {
    src: 'stylesheets/**/*.sass',
    dest: 'stylesheets',
  },
};


function style() {
  return gulp.src(paths.sty.src)

    .pipe(sass()).on('error', sass.logError)

    .pipe(gulp.dest(paths.sty.dest));
}

exports.style = style;

function watch() {
  gulp.watch(paths.sty.src, style);
}

exports.watch = watch;
