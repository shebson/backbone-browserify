var awsConfig = require('./aws-credentials');

module.exports = {
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
};