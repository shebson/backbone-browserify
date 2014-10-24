var hbsfy = require('hbsfy');

module.exports = {
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
    test: {
        options: {
            transform: [hbsfy],
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            "build/test/app.js": ['test/**/*.js', 'src/js/app.js']
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
};