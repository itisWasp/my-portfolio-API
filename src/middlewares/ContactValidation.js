const Joi = require('@hapi/joi');

//server side validation
const schema = Joi.object({
    FullName:Joi.string().min(6).trim().required(),
    Email:Joi.string().min(6).trim().required().email(),
    Messages:Joi.string().min(6).trim().required()
});

module.exports = schema;