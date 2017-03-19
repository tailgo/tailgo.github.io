const gulp = require('gulp');
const gulpPandoc = require('gulp-pandoc');

gulp.task('docs', () => {
  gulp.src('./*.org')
    .pipe(gulpPandoc({
      from: 'org',
      to: 'html5',
      ext: '.html'
    }))
    .pipe(gulp.dest('./'));
});
