var hbsfy = require('hbsfy');

module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            app: {
                options: {
                    transform: [hbsfy],
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    "build/app.js": ['src/js/app.js']

                }
            }
        },
        copy: {
            main: {
                src: 'src/index.html',
                dest: 'build/index.html'
            }
        },
        less: {
            development: {
                files: {
                    'build/main.css': "src/less/main.less"
                }
            }
        },
        connect: { // local server with livereload support
            all: {
                options: {
                    port: 7070,
                    base: ['build'],
                    livereload: true
                }
            }
        },
        watch: {
            livereload: {
                files: ["src/**/*"],
                tasks: ['compile'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('compile', ['copy', 'browserify', 'less:development']);
    grunt.registerTask('server', ['compile', 'connect:all', 'watch']);
    grunt.registerTask('default', ['compile']);
};