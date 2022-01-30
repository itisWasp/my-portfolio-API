const Joi = require('@hapi/joi');


const registerValidation = (data) => {
    let schema;
    return schema = Joi.object({
        UserName: Joi.string().min(6).max(255).trim().required(),
        Email: Joi.string().min(6).max(255).trim().required().email(),
        Password: Joi.string().min(6).trim().required()
    }).validate(data, schema);

    // return schema.validate(data, schema);

}

const loginValidation = (data) => {
    let schema;
    return schema = Joi.object({
        Email: Joi.string().min(6).max(255).trim().required().email(),
        Password: Joi.string().min(6).trim().required()
    }).validate(data, schema);

}

const registerAdminValidation = (data) => {
    let schema;
    return schema = Joi.object({
        UserName: Joi.string().min(6).max(255).trim().required(),
        Email: Joi.string().min(6).max(255).trim().required().email(),
        Password: Joi.string().min(6).trim().required()
    }).validate(data, schema);

    // return schema.validate(data, schema);

}

const loginAdminValidation = (data) => {
    let schema;
    return schema = Joi.object({
        Email: Joi.string().min(6).max(255).trim().required().email(),
        Password: Joi.string().min(6).trim().required()
    }).validate(data, schema);

}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

module.exports.registerAdminValidation = registerAdminValidation;
module.exports.loginAdminValidation = loginAdminValidation;
