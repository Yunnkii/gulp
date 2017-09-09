// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
// var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// gulp.task('lint',function (){
// 	gulp.src('src/script/*.js')
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('default'));
// });
gulp.task('less',function (){
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dest/css'))
});
gulp.task('scripts',function (){
	gulp.src('src/script/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dest/dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
        .pipe(gulp.dest('dest/dist'));
});
gulp.task('default', function(){
    gulp.run('less', 'scripts');

    // 监听文件变化
    gulp.watch('src/script/*.js', function(){
        gulp.run('less', 'scripts');
    });
    
    gulp.watch('src/less/*.less', function(){
        gulp.run('less', 'scripts');
    });
});