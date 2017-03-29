const fs = require('fs');

const gulp = require('gulp');
const gulpPandoc = require('gulp-pandoc');
const gulpJustReplace = require('gulp-just-replace');
const gulpRename = require('gulp-rename');

/**
 * TODO： minify JS's files and CSS's files.
 */

gulp.task('docs', () => {
  return gulp.src('./org/**/*.org')
    .pipe(gulpPandoc({
      from: 'org',
      to: 'html5',
      ext: '.html'
    }))
    .pipe(gulp.dest('./htmls'));
});

gulp.task('compile-zh', () => {
  return compile('zh');
});

gulp.task('compile-en', () => {
  return compile('en');
});

gulp.task('default', ['docs'], () => {
  gulp.start('compile-zh');
  gulp.start('compile-en');
});

function compile(lang) {
  return fs.readdir(`./htmls/${lang}`, (err, files) => {
    if (err) {
      throw err;
    }
    return files.forEach((v) => {
      fs.readFile(`./htmls/${lang}/` + v, (err, data) => {
        if (err) {
          throw err;
        }
        return gulp.src('./src/stencil.html')
          .pipe(gulpJustReplace(/%article%/, data.toString()))
          .pipe(gulpRename(v))
          .pipe(gulp.dest(`./blog/${lang}`));
      });
    });
  });
}
