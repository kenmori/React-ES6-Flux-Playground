var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');
function errorHandler(err) {
  console.log('Error: ' + err.message);
}

// 自動ブラウザリロード
gulp.task('browserSnyc',['nodemon'], function() {
  browserSync.init(null, {
    proxy:'http://localhost:3000',
    port: 8080
  });
  gulp.watch(["public/**", "dist/**"], function() {
    browserSync.reload();
  });
});

// Javascriptへのビルド
// ES6かつJSXなファイル群をbuild/bundle.jsへ変換する
gulp.task('browserify', function() {
  browserify(['./src/app.jsx','./src/index.js'], { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
});

// ローカルサーバーの起動
gulp.task('nodemon', function() {
  return nodemon({
    script : './server.js'
  }).on('restart', function(){
    setTimeout(function(){
      browserSync.reload();
    }, 500);
  });
});

gulp.task('watch', function() {
  gulp.watch(['./src/*.js', './src/*.jsx'], ['browserify'])
});



// ファイル監視
// ファイルに更新があったらビルドしてブラウザをリロードする
gulp.task('default',['browserify', 'watch', 'browserSnyc']);
