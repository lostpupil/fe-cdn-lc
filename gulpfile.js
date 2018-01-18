var fs = require('fs');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var crypto = require("crypto-js");
// AV Config
var cfg = require('./config/config.js');
var AV = require('leancloud-storage');
var appId = cfg.leancloud.appid;
var appKey = cfg.leancloud.appkey;

AV.init({
    appId: appId,
    appKey: appKey
});

gulp.task('default', () => {
    console.log('hey I am banana')
});

gulp.task('dev', () => {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.dev.config.js')))
        .pipe(gulp.dest('public/dist/dev'));
});

gulp.task('prod', () => {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.prod.config.js')))
        .pipe(gulp.dest('public/dist/prod'));
});

gulp.task('lc-dev', () => {
    var dev_dir = "./public/dist/dev"
    fs.readdir(dev_dir, (err, files) => {
        files.forEach(fname => {
            console.log(fname)
            fs.readFile(`${dev_dir}/${fname}`, function(err, data) {
                if (err) throw err;
                var f = new AV.File(fname, data)
                var assets = new AV.Object('Assets')
                assets.set('application', cfg.application.name)
                assets.set('stage', 'development')
                assets.set('digest', fname)
                assets.set('file', f)
                return assets.save().then(() => {
                    console.log('Banana Rocks')
                })
            });
        })
    })
})

gulp.task('lc-prod', () => {
    var dev_dir = "./public/dist/prod"
    fs.readdir(dev_dir, (err, files) => {
        files.forEach(fname => {
            console.log(fname)
            fs.readFile(`${dev_dir}/${fname}`, function(err, data) {
                if (err) throw err;
                var f = new AV.File(fname, data)
                var assets = new AV.Object('Assets')
                assets.set('application', cfg.application.name)
                assets.set('stage', 'production')
                assets.set('digest', fname)
                assets.set('file', f)
                return assets.save().then(() => {
                    console.log('Banana Rocks')
                })
            });
        })
    })
})