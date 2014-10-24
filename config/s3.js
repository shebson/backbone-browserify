var awsConfig = require('./aws-credentials'),
    getUploader = function (bucket) {
        "use strict";
        return {
            options: {
                bucket: awsConfig.buckets[bucket],
                differential: true // Only uploads changed files
            },
            files: [
                {expand: true, cwd: 'build/deploy/', src: ['**'], dest: ''}
                // Note: If you set up cache busting, you will want to set long-expiring cache-headers for
                //       everything except index.html here
            ]
        };
    },
    getCleaner = function (bucket) {
        "use strict";
        return {
            options: {
                bucket: awsConfig.buckets[bucket],
                differential: true
            },
            files: [
                {dest: '/', 'action': 'delete', cwd: "build/deploy/", src: ['**']}
            ]
        };
    },
    s3Config = {
        options: {
            accessKeyId: awsConfig.credentials.access,
            secretAccessKey: awsConfig.credentials.secret,
            region: awsConfig.region,
            uploadConcurrency: 5,
            downloadConcurrency: 5
        }
    },
    bucket;

if (awsConfig.buckets) {
    for (bucket in awsConfig.buckets) {
        if (awsConfig.buckets.hasOwnProperty(bucket)) {
            s3Config[bucket] = getUploader(bucket);
            s3Config[bucket + '_cleaner'] = getCleaner(bucket);
        }
    }
}

module.exports = s3Config;
