var hbsfy = require('hbsfy');

module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                options: {
                    transform: [hbsfy],
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    "build/dev/app.js": ['src/js/app.js']
                }
            },
            deploy: {
                options: {
                    transform: [hbsfy]
                },
                files: {
                    "build/deploy/app.js": ['src/js/app.js']
                }
            }
        },
        copy: {
            dev: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'build/dev/index.html'
                    },
                    {
                        expand: true,
                        cwd: 'src/public/',
                        src: ['**'],
                        dest: 'build/dev/'
                    }
                ]
            },
            deploy:  {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'build/deploy/index.html'
                    },
                    {
                        expand: true,
                        cwd: 'src/public/',
                        src: ['**'],
                        dest: 'build/deploy/'
                    }
                ]
            }
        },
        less: {
            development: {
                files: {
                    'build/dev/main.css': "src/less/main.less"
                }
            },
            deploy: {
                options: {
                    cleancss: true
                },
                files: {
                    'build/deploy/main.css': "src/less/main.less"
                }
            }
        },
        connect: { // local server with livereload support
            all: {
                options: {
                    port: 7070,
                    base: ['build/dev'],
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
        },
        clean: [ 'build'],
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            prod: {
                files: {
                    'build/deploy/app.js': ['build/deploy/app.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('compile', ['clean', 'copy', 'browserify', 'less', 'uglify']);
    grunt.registerTask('server', ['compile', 'connect:all', 'watch']);
    grunt.registerTask('default', ['compile']);
};