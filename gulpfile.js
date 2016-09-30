const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename'); 

const siteRoot = '_site';
const cssFiles = 'assets/css/*.?(s)css';

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('assets'));
});

gulp.task('minify', function () {
   gulp.src([
        './assets/js/scripts.js',
   ])
      .pipe(uglify())
      .pipe(rename('scripts.min.js'))
      .pipe(gulp.dest('./assets/js/')) // It will create folder client.min.js
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  //gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['minify', 'jekyll', 'serve']);