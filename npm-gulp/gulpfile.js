var gulp = require('gulp');

//引入组件
var minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'), //合并文件
    rename = require('gulp-rename'),
    clean = require('gulp-clean'), //清空文件夹
    minhtml = require('gulp-htmlmin'),
    jshint = require('gulp-jshint'), //js代码规范性检查
    imagemin = require('gulp-imagemin');

gulp.task('html', function(){
  gulp.src('./src/*.html')
      .pipe(minhtml({collapseWhitespce: true}))
      .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
      .pipe(concat('merge.css'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minifycss())
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function(){
  gulp.src('./src/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('merge.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', function(){
  gulp.src('./src/imgs/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/imgs'));
});

gulp.task('bulid', ['html', 'css', 'js', 'img'])