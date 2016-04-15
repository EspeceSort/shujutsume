var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/assets/sass/*scss')
            .pipe(sass({
                outputStyle : 'expanded'
            }))
            .on('error', function(err) {
                console.error('Error', err.message);
            })
            .pipe(gulp.dest("src/assets/css"));
});