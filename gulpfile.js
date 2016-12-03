//引入 gulp
var gulp=require("gulp");
//引入合并插件
var concat=require("gulp-concat");
//引入压缩插件
var uglify=require("gulp-uglify");
//启动服务
var webserver=require("gulp-webserver");
//引入SASS
var sass=require("gulp-sass");

//引入webpack
var webpack=require("gulp-webpack");

//引入named
var named=require("vinyl-named");

//引入minify
var minify=require("gulp-minify-css");
//引入rev
var rev=require("gulp-rev");
//引入revCollector
var revCollecotr = require("gulp-rev-collector");

// 引入url
var url = require("url");

// 引入fs 
var fs = require("fs");



//构建一个复制文件

gulp.task("index-copy",function(){
	gulp.src("./index.html")
		.pipe(gulp.dest("./app"))
})

//合并文件
gulp.task("concat",function(){
	gulp.src(["./app/js/demo1.js","./app/js/demo2.js"])
		.pipe(concat("demo.js"))
		.pipe(gulp.dest("./app/js"))
})

//压缩文件
gulp.task("uglify",function(){
	gulp.src("./app/js/iscroll4.js")
		.pipe(uglify())
		.pipe(gulp.dest("./app"))
})



//启动服务
gulp.task("webserver",function(){
	gulp.src("./")
		.pipe(webserver({
			port:80,
			livereload:true,
			directoryListing:{
				enable:true,
				path:"./"
			}
		}))
})


//编译sass
var sassFiles=["./app/src/styles/**/*.scss"];
var cssFiles = ["./app/src/styles/*.css"];
var jsFiles = ["./app/src/scripts/app.js"];

gulp.task("sass",function(){
	gulp.src(sassFiles)
	    .pipe(sass())
	    .pipe(minify())
        .pipe(gulp.dest("./app/prd/styles"));
})

// 编译CSS
gulp.task("css",function(){
	gulp.src(cssFiles)
	    .pipe(minify())
	    .pipe(gulp.dest("./app/prd/styles"));
})


//js模块化
gulp.task("packJS",function(){
	gulp.src(jsFiles)
	    .pipe(named())
	    .pipe(webpack({
	    	output:{
	    		filename:'[name].js'
	    	},
	    	modules:{
	    		loaders:[
	              {
	              	test:/\.js$/,
	              	loader:'imports?define=>false'
	              }
	    		]
	    	}
	    }))
	    .pipe(uglify().on("error",function(e){
	        console.log("\x07",e.lineNumber,e.message);
	        return this.end();
	    }))
	    .pipe(gulp.dest("./app/prd/scripts/"));
})

//版本控制
var cssDistFiles = ["./app/prd/styles/style.css"];
var jsDistFiles = ["./app/prd/scripts/app.js"];
gulp.task("ver",function(){
    gulp.src(cssDistFiles)
        .pipe(rev())   // 生成name-md5文件
        .pipe(gulp.dest("./app/prd/styles"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./app/ver/styles"))
    gulp.src(jsDistFiles)
        .pipe(rev())   // 生成name-md5文件
        .pipe(gulp.dest("./app/prd/scripts"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./app/ver/scripts"))
})



// 让html文件名替换为md5加密之后的名称
gulp.task("html",function(){
	gulp.src(["./app/ver/**/*.json","./app/*.html"])
	    .pipe(revCollecotr())
	    .pipe(gulp.dest("./app"));
})

gulp.task("min",["ver","html"]);




//监测文件
gulp.task("watch",function(){
	gulp.watch("./index.html",["index-copy"])
	//gulp.watch("./app/js/scripts/*.js",["concat"])
	gulp.watch(sassFiles,["sass"])
	gulp.watch(cssFiles,["css"])
	gulp.watch("./app/src/scripts/**/*.js",["packJS"])
})


//ÉèÖÃÄ¬ÈÏÈÎÎñ
gulp.task("default",["watch","webserver"]);