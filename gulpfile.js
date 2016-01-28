const gulp = require('gulp');
const dest = require('gulp-dest');
const gutil = require("gulp-util");
const babelify = require('babelify');
const connect = require('gulp-connect');
const webpack = require('gulp-webpack');
const source = require('vinyl-source-stream');
const eslint = require('eslint/lib/cli');

gulp.task('connect', () => {
    connect.server({
        port: 8888
    });
});

gulp.task('build', () => {
    return gulp.src('js/index.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('lint', done => {

    eslint.execute('--ext .js,.jsx .');
    done();

});

gulp.task('default', ['build', 'connect']);
