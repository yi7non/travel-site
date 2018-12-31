const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if(err) {
            console.log('yinon we have a problem here: ', err.toString());
        }
        console.log('Yep Webpack completed! ;)', stats.toString());
        callback();
    });
});