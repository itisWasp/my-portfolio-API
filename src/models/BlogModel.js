const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({

    title : {
        type: 'string',
        required: true,
        min : 6,
        max : 255
    },

    body : {
        type:'string',
        required: true,
        min:6,
        max:10000
    },

    imgLink : {
        type: 'string',
        required: true,
        min : 6,
        max : 1255
    },

    public_id : {
        //
    },

    comment : {
        type: 'Array',
        default : []
    },

    likes : [
        {
          user :  {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Users'
            }

        }
    ],

    date : {
        type: 'date',
        default: Date.now
    }

});

module.exports = mongoose.model('BlogPost', blogSchema);