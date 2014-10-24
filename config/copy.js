module.exports = {
    test: {
        files: [
            {
                src: 'src/index.html',
                dest: 'build/test/index.html'
            },
            {
                expand: true,
                cwd: 'src/public/',
                src: ['**'],
                dest: 'build/test/'
            }
        ]
    },
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
};