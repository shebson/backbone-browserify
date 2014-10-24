module.exports = {
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
};