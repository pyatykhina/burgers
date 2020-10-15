const gulp = require('gulp');

const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const paths = {
    root: './build',
    templates: {
        src: 'src/templates/index.pug'
    },
    styles: { 
        src: 'src/styles/main.scss'
    },    
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/images/'
    },    
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/fonts/'
    },
    scripts: {
        src: 'src/scripts/main.js'
    }
}

// pug
function templates() {
    return gulp.src(paths.templates.src)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root))
}

// scss
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.root))
}

// images 
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest))
}

// fonts 
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
}
  
// clear
function clear() {
    return del(paths.root)
}

// watch
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}

// local server and lifereload
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '**/*.*', browserSync.reload);
}

// scripts
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(paths.root))
}

gulp.task('default', gulp.series(
    clear,
    gulp.parallel(styles, templates, images, fonts, scripts),
    gulp.parallel(watch, server)
))
 