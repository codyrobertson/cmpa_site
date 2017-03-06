// NOTE:

var gulp = require('gulp'),
    cssbeautify = require('gulp-cssbeautify');

gulp.task('css', function() {
    return gulp.src('./styles/modules/**/**.css')
        .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(gulp.dest('./styles/dist/'));;
});
