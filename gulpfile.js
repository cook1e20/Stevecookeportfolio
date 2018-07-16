const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  styles: {
    src: 'stylesheets/**/*.sass',
    dest: 'stylesheets',
  },
};


function style() {
  return gulp.src('paths.syles.src')

    .pipe(sass()).on('error', sass.logError)

    .pipe(gulp.dest('paths.syles.dest'));
}

exports.style = style;

function watch() {
  gulp.watch('paths.syles.src', style);
}

exports.watch = watch;
