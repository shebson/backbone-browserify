// ============================================== CAUTION =================================================
// This is an example configuration file that enables deploys to Amazon S3 from Grunt
// To set this up, copy the module below into config/aws-credentials.js and add your AWS credentials
//
// NOTE: confi/aws-credentials.js is gitignored for a reason!
// Checking AWS credentials into a public repo is very dangerous - treat your AWS credentials like you would
// a credit card number.
// config/aws-credentials.js should always be gitignored
// ========================================================================================================

module.exports = {
    credentials: {
        access: 'MY-ACCESS-KEY',
        secret: 'MY-SECRET-KEY'
    },
    region: 'us-west-1',
    buckets: {
        production: "MY-BUCKET"
    }
};