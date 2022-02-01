'use strict';

/**
 * Set the 'production' environment configuration object
 * @link http://docs.mongolab.com/migrating/
 */

export default {
    db: process.env.DB_CONNECT,
    // set this to build
    // dir: 'build/',
    dir: 'client/',
    fileDir: 'files/',
    sessionSecret: process.env.SESSION_SECRET || 'MEAN',
    adminAccountUsername: process.env.ADMIN_ACCOUNT_USERNAME || 'Israel',
    adminAccountEmail: process.env.ADMIN_ACCOUNT_EMAIL || 'admin@admin.com',
    adminAccountPassword: process.env.ADMIN_ACCOUNT_PASSWORD || 'password'
}