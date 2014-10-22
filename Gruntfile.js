var hbsfy = require('hbsfy'),
    awsConfig = require('./aws-config');

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
            dev: {
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
        clean: {
            dev: ['build/dev'],
            deploy: ['build/deploy']
        },
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
        },
        aws_s3: {
            options: {
                accessKeyId: awsConfig.credentials.access,
                secretAccessKey: awsConfig.credentials.secret,
                region: awsConfig.region,
                uploadConcurrency: 5,
                downloadConcurrency: 5
            },
            production: {
                options: {
                    bucket: awsConfig.buckets.production,
                    differential: true // Only uploads changed files
                },
                files: [
                    {expand: true, cwd: 'build/deploy/', src: ['**'], dest: ''}
                    // Note: If you set up cache busting, you will want to set long-expiring cache-headers for
                    //       everything except index.html here
                ]
            },
            clean_production: {
                options: {
                    bucket: awsConfig.buckets.production,
                    differential: true
                },
                files: [
                    {dest: '/', 'action': 'delete', cwd: "build/deploy/", src: ['**']}
                ]
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
    grunt.loadNpmTasks('grunt-aws-s3');

    grunt.registerTask('compile-dev',  ['clean:dev', 'copy:dev', 'browserify:dev', 'less:dev']);
    grunt.registerTask('compile-deploy',  ['clean:deploy', 'copy:deploy', 'browserify:deploy', 'less:deploy', 'uglify']);

    grunt.registerTask('compile', ['compile-dev', 'compile-deploy']);
    grunt.registerTask('server', ['compile-dev', 'connect:all', 'watch']);
    grunt.registerTask('deploy', ['compile-deploy', 'aws_s3:production', 'aws_s3:clean_production']);

    grunt.registerTask('default', ['compile']);
};