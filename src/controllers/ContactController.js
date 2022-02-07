// // const Contacts = require('../models/ContactModel');
// // const schema = require('../middlewares/ContactValidation');

import Contacts from '../models/ContactModel.js';
import schema from '../middlewares/ContactValidation.js';

// // import Contacts from '../models/ContactModel';
// // import schema from '../middlewares/ContactValidation'


class ContactController{
    static submitForm = async (req, res) => {

        //Let's validate the data before we send the data
        const { error } = schema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        
        const contact = new Contacts({
        fullname: req.body.FullName,
        email: req.body.Email,
        messages: req.body.Messages,
        });

        try{
            await contact.save();
            res.status(200).json(contact);
        } catch(err){
            res.status(400).json({message : err});
        }
        
        
    }

    static getForm = async (req, res) => {
        try{
            const contact = await Contacts.find()
            res.status(200).json(contact);
        } catch(err){
            res.status(404).json({message :err});
        }
    }

    static getFormById = async (req, res) => {
        try {
            const contact = await Contacts.findOne({_id: req.params.id});
            res.status(200).json(contact);
        }

        catch (err) {
            res.status(404);
            res.json({err: 'The Form Doesn\'t exist'});
        }
    }

    static deleteForm = async (req, res) => {
        try{
            await Contacts.deleteOne({_id: req.params.id});
            res.status(200).json();
        }
        catch(err){
            res.status(404).json({error: 'The Form Doesn\'t exist'});
        }
    }

}

export default ContactController;