var gulp = require('gulp'),
watch = require('gulp-watch'),
browsrSync = require('browser-sync').create();

gulp.task('watch', function() {

    browsrSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });  

    watch('./app/index.html', function() {
       browsrSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject')
    });
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});


gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browsrSync.stream());
}); 

gulp.task('scriptsRefresh', ['scripts'], function() {
    browsrSync.reload();
});

