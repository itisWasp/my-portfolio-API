// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    fullname : {
        type: 'string',
        required: true,
        min: 6,
        max: 255
    },
    email : {
        type: 'string',
        required: true,
        min:6,
        max: 255
    },
    messages : {
        type: 'string',
        required: true,
        min: 6,
        max: 2000
    },
    date :{
        type: 'date',
        default: Date.now
    }
});

export default mongoose.model('Contacts', contactSchema);