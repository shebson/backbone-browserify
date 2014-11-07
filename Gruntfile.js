module.exports = function (grunt) {
    "use strict";
    var initConfig = require('./config/get-config.js')(grunt);

    grunt.initConfig(initConfig);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('lint', ['jslint']);
    grunt.registerTask('compile-test',  ['clean:test', 'copy:test', 'browserify:test', 'less:test']);
    grunt.registerTask('compile-dev',  ['clean:dev', 'copy:dev', 'browserify:dev', 'less:dev']);
    grunt.registerTask('compile-deploy',  ['clean:deploy', 'copy:deploy', 'browserify:deploy', 'less:deploy', 'uglify']);
    grunt.registerTask('compile', ['compile-dev', 'compile-deploy']);
    grunt.registerTask('server', ['compile-dev', 'connect:all', 'watch']);
    grunt.registerTask('default', ['compile']);

    if (initConfig.aws_s3) {
        grunt.loadNpmTasks('grunt-aws-s3');
        if (initConfig.aws_s3.production) {
            grunt.registerTask('deploy', ['compile-deploy', 'aws_s3:production', 'aws_s3:production_cleaner']);
        }
        if (initConfig.aws_s3.stage) {
            grunt.registerTask('stage', ['compile-deploy', 'aws_s3:staging', 'aws_s3:staging_cleaner']);
        }
    }
};