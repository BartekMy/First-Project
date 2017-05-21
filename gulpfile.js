var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('tusk', function() {
    console.log("Hello World!");
});

gulp.task('sass', function() {
            return gulp.src(['scss/partOne/style.scss', 'scss/partTwo/me.scss'])
                .pipe(sourcemaps.init())
                .pipe(sass({
                    errLogToConsole: true,
                    outputStyle: 'expanded'
                }))
								.pipe(sourcemaps.write('../maps'))
                .pipe(gulp.dest('css'))
                });

        gulp.task('watch', function() {
            gulp.watch('scss/**/*.scss', ['sass']);
        });
