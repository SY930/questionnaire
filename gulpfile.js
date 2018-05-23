var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	/*cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),*/
   // imagemin = require('gulp-imagemin'),
    htmlmin  = require('gulp-htmlmin');

//gulp-rev-collector根据rev生成的json文件用来替换html 中的<link href=""/>
//gulp-rev用来给静态资源文件加上一个hash值
 gulp.task('css',function () {
	 return gulp.src('css/*.css')
		 .pipe(rev())
         .pipe(gulp.dest('dist/css'))
		 .pipe(rev.manifest())
		 .pipe(gulp.dest('rev/css'));
 });
gulp.task('css1',function () {
    return gulp.src('front/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/front/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/css1'));
});
 gulp.task('scripts',function () {
	 return gulp.src('js/*.js')
		 .pipe(rev())
         .pipe(gulp.dest('dist/js'))
		 .pipe(rev.manifest())
		 .pipe(gulp.dest('rev/js'))
 });
gulp.task('scripts1',function () {
    return gulp.src('front/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/front/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js1'))
});
gulp.task('scripts2',function () {
    return gulp.src('3/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/3'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js2'))
});
gulp.task('scripts3',function () {
    return gulp.src('3.2/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/3.2'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js3'))
});
gulp.task('scripts4',function () {
    return gulp.src('3.3/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/3.3'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js4'))
});
gulp.task('revImg', function(){
    return gulp.src(['imgs/**/*.png','imgs/**/*.jpg','imgs/**/*.gif'])
        .pipe(rev())
        .pipe(gulp.dest('dist/imgs'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/images'));
});
gulp.task('revImg1', function(){
    return gulp.src('imgs/**/front/*')
        .pipe(rev())
        .pipe(gulp.dest('dist/imgs'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/image'));
});
gulp.task('revImg2', function(){
    return gulp.src('front/images/*')
        .pipe(rev())
        .pipe(gulp.dest('dist/front/images'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/img'));
});
/*gulp.task('testImagemin', function () {
    gulp.src('imgs/!*.{png,jpg,gif,ico}')
        .pipe(gulp.dest('dist/imgs'));
});*/
gulp.task('revHtml',function () {
    var options = {
       // removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
       // minifyJS: true,//压缩页面JS
       // minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['rev/**/*.json','**/*.html'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

gulp.task('dev',function (done) {
	condition = false;
	runSequence(
		['css'],
        ['css1'],
		['scripts'],
		['scripts1'],
        ['scripts2'],
        ['scripts3'],
        ['scripts4'],
		['revImg'],
		['revImg1'],
        ['revImg2'],
		['revHtml'],
	done);
});

gulp.task('default',['dev']);