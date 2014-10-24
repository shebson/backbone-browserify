module.exports = function (grunt) {
    "use strict";
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        browserify: require('./browserify'),
        copy: require('./copy'),
        less: require('./less'),
        connect: require('./connect'),
        watch: require('./watch'),
        clean: require('./clean'),
        uglify: require('./uglify'),
        jslint: require('./jslint')
    };
    if (grunt.file.exists('config/aws-credentials.js')) {
        config.aws_s3 = require('./s3');
    }
    return config;
};