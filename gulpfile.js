let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var config = {
    stylesPath: 'src/styles',
    scriptsPath: 'src/scripts',
    nodeModules: 'node_modules'
}

gulp.task('sass', () => {
    console.log('Compiling Sass');
    gulp.src(config.stylesPath + '/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest((f) => {
            return f.base;
        }));
});

gulp.task('Bootstrap', () => {
    console.log('Bootstrap');
    gulp.src(config.nodeModules + '/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(config.stylesPath + '/bootstrap/css'));

    gulp.src(config.nodeModules + '/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(config.scriptsPath + '/vendors'));
});

gulp.task('jQuery', () => {
    console.log('jQuery');
    gulp.src(config.nodeModules + '/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(config.scriptsPath + '/vendors'));
});

gulp.task('Popper', () => {
    console.log('jQuery');
    gulp.src(config.nodeModules + '/popper.js/dist/popper.min.js')
        .pipe(gulp.dest(config.scriptsPath + '/vendors'));
    gulp.src(config.nodeModules + '/popper.js/dist/popper.min.js.map')
        .pipe(gulp.dest(config.scriptsPath + '/vendors'));
});

gulp.task('minify-css', () => {
    console.log('Minification')
    gulp.src(config.stylesPath + '/app.css')
        .pipe(cleanCSS({ compatibility: 'ie9' }))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(config.stylesPath));
});

gulp.task('default', ['sass', 'minify-css', 'Bootstrap', 'jQuery', 'Popper'], () => {
    gulp.watch(config.stylesPath + '/**/*.scss', ['sass', 'minify-css']);
})

gulp.task('prod', () => {
    console.log('Minification')

    // gulp.src(['dist/*.js', '!dist/*.min.js'])
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(minify({
    //     ext:{
    //         src:'.js',
    //         min:'.js'
    //     },
    // }))
    // .pipe(gulp.dest('dist'))
    return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/final'));
})