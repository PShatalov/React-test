var moment = require('moment');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var to5ify = require('babelify');
var util = require('gulp-util');

var path = {
    OUT: 'build.js',
    VENDOR: 'vendor.js',
    DEST_SRC: './app/dist/js',
    ENTRY_POINT: './app/src/js/components/main.jsx'
};

var dependencies = [
    'jquery',
    'react',
    'react-router',
    'react-bootstrap',
    'react-router-bootstrap',
    'moment'
];

var buildTask = function(options) {
    if (options.development) {
        process.env.NODE_ENV = 'development';
    } else {
        process.env.NODE_ENV = 'production';
    }
    var watcher  = browserify({
        entries: [path.ENTRY_POINT],
        debug: options.development,
        cache: {}, packageCache: {}, fullPaths: false
    });
    watcher
        .transform(to5ify.configure({ optional: ["utility.inlineEnvironmentVariables", "utility.deadCodeElimination"] }))
    ;

    watcher.external(dependencies);

    var updater = function() {
        console.log('[' + moment().format("H:m:s") +'][INFO][Gulp]: Build');
        if (options.development) {
            watcher
                .bundle()
                .on('error', util.log)
                .pipe(source(path.OUT))
                .pipe(gulp.dest(path.DEST_SRC))
            ;
        } else {
            watcher
                .bundle()
                .pipe(source(path.OUT))
                .pipe(streamify(uglify()))
                .pipe(gulp.dest(path.DEST_SRC))
        }
    };
    if (options.development) {
        watcher = watchify(watcher);
        watcher.on('update', updater);
    }
    updater();
    var vendorsBundler = browserify({
        debug: options.development,
        require: dependencies
    });
    vendorsBundler.transform(to5ify.configure({ optional: ["utility.inlineEnvironmentVariables", "utility.deadCodeElimination"] }))
    if (options.development) {
        vendorsBundler
            .bundle()
            .on('error', util.log)
            .pipe(source(path.VENDOR))
            .pipe(gulp.dest(path.DEST_SRC))
    } else {
        vendorsBundler
            .bundle()
            .on('error', util.log)
            .pipe(source(path.VENDOR))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(path.DEST_SRC))
    }
};

gulp.task('watch', function() {
    buildTask({
        development: true
    });
});
gulp.task('deploy', function(){
    buildTask({
        development: false
    })
});

gulp.task('default', ['watch']);