// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username : {
        type: 'string',
        required: true,
        min: 6,
        max: 255
    },

    email : {
        type: 'string',
        required: true,
        min: 6,
        max: 255
    },

    password : {
        type: 'string',
        required: true,
        max: 1024
    },

    role : {
        type: 'string',
        default: 'user',
        enum: ['user','admin']
    },

    date : {
        type : Date,
        default: Date.now
    }

});

export default mongoose.model('Users', userSchema);