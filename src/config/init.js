'use strict';

var config = require('./production');
const User = require('../models/UsersModel')
const bcrypt = require('bcrypt')

module.exports = function() {
    return new Promise(function(resolve) {
        // var User = db.model('User');
        User.findOne({ email: config.adminAccountEmail}, function(err, user) {
            if (err) throw err;
            if (!user) {
                //Hash the Password
                // const salt = bcrypt.genSalt(10);
                // const hashedPassword = bcrypt.hash(config.adminAccountPassword, salt);
                var newAdmin = new User({
                    username: config.adminAccountUsername,
                    email: config.adminAccountEmail,
                    password: config.adminAccountPassword,
                    role: 'admin'
                });
                newAdmin.save(function(err) {
                    if (err) throw err;
                    resolve();
                })
            } else {
                resolve();
            }
        })
    })
};