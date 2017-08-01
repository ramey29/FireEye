var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// for browser sync
var browserSync = require('browser-sync').create();
// for concatenation
var useref = require('gulp-useref')
// for minification of js
var uglify = require('gulp-uglify');
// for minification of css
var cssnano = require('gulp-cssnano');
// if conditions for css and js files...
var gulpIf = require('gulp-if');
// image minification
var imagemin = require('gulp-imagemin');
// cache
var cache = require('gulp-cache');
// for non used file clean up
var del = require('del');
// run sequence
var runSequence = require('run-sequence');




gulp.task('configureApp', function(){
console.log('hello');
});


gulp.task('sass', function(){
    return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream:true
    }))
});

 gulp.task('watch',['browserSync','sass'], function(){
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('./*.html',browserSync.reload);
    gulp.watch('js/*.js',browserSync.reload);
 });

 gulp.task('browserSync', function(){
     browserSync.init({
         server:{
             baseDir: './'
         }
     })
 });

gulp.task('useref', function(){
    return gulp.src('./*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('./*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('./*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('./*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

//copying fonts if any
gulp.task('fonts', function() {
  return gulp.src('./fonts/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('default', ['sass','watch','browserSync','useref','images','fonts']);
gulp.task('build', ['sass','watch','browserSync','useref','images','fonts']);

