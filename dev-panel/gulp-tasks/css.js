const gulp = require('gulp');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpConcat = require('gulp-concat');
const gulpSass = require('gulp-sass');
const gulpAutoprefixer = require('gulp-autoprefixer');

const path = './app/**/*.css';

gulp.task('css', () => {
  gulp.watch(path, () => (
    css()
  ));
  return css();
});

const css = () => (
  gulp.src(path)
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/']
    }).on('error', gulpSass.logError))
    .pipe(gulpAutoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpConcat('main.css'))
    .pipe(gulpSourcemaps.write('./'))
    .pipe(gulp.dest('build/'))
);
