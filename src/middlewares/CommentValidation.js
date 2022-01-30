const Joi = require('@hapi/joi');

const commentSchema = Joi.object({

    Comment : Joi.string().min(6).trim()
})

module.exports = commentSchema;