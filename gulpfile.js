 var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');


// All Sass files here.
var sassSources = ['src/sass/style.scss'];

// All js files that are to be concatenated:
var jsSources = [
	'src/app/**/*.js'
];

var htmlSources = [
	'deploy/views/*.html',
	'*.html'
];

// Concatenate all the jsSources files into script.js.
// Use connect.reload() on the last line to signal the server when a change is made here.
gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('deploy/js'))
		.pipe(connect.reload())
});


// Compass is a sass framework with built-in mixins. Using connect.reload() on the last line to signal the server when a change is made here.
gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			css: './deploy/css',
			sass: 'src/sass',
			image: 'src/img',
			comments: true,
			style: 'expanded'
		}))
		.on('error', gutil.log)
		// .pipe(gulp.dest('./deploy/css'))
		.pipe(connect.reload())
});


gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']),
	gulp.watch('./src/sass/**/*', ['compass']),
	gulp.watch(htmlSources, ['html'])
});


// Gulp Connect is a node module that allows you to start the server and includes a livereload option.
gulp.task('connect', function() {
	connect.server({
		root: 'deploy',
		livereload: true
	});
});


// Ensure livereload is watching html files.
gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())
});


gulp.task('default', ['html', 'js', 'compass', 'connect', 'watch'])
