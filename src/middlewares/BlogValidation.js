const Joi = require('@hapi/joi');

const schema = Joi.object({
    Title: Joi.string().min(6).trim().required(),
    Body: Joi.string().min(6).trim().required(),
    ImageLink: Joi.string().min(6).trim().uri().required()
});

module.exports = schema;