module.exports = {
    client: {
        src: [
            'src/js/**/*.js',
            'test/**/*.js',
            'config/*.js',
            'Gruntfile.js'
        ],
        directives: {
            browserify: true,
            browser: true,
            globals: {
                "require": false,
                "module": false
            },
            nomen: true,
            plusplus: true
        },
        options: {
            edition: 'latest',
            errorsOnly: false,
            failOnError: true
        }
    }
};