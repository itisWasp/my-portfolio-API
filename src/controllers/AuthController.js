// const User = require('../models/UsersModel');
// // const schema = require('../middlewares/UserValidation');
// const { registerValidation , loginValidation, registerAdminValidation, loginAdminValidation} = require('../middlewares/UserValidation');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const config = require('../config/production');

import User from '../models/UsersModel.js';
import { registerValidation , loginValidation, registerAdminValidation, loginAdminValidation} from '../middlewares/UserValidation.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config/production.js';


class UsersController {

    static saveUser = async (req, res) => {

        //Let's validate the inputs.
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).json({message : error.details[0].message});  
        
        //check if a user is in the database
        const emailExists = await User.findOne({email: req.body.Email});
        if(emailExists) return res.status(400).json({message:'Email already Exists'});

        //Hash the Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.Password, salt);

        const user = new User({
            username : req.body.UserName,
            email : req.body.Email,
            password : hashedPassword
        });

        try {
            await user.save();
            res.status(200).json({user: user._id});
        } catch (err) {
            res.status(400).send(err);
        }

    }

    static getUsers = async (req, res) => {

        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(404).send(error);
        }

    }

    static userLogin = async (req, res) => {

        //Let's validate the inputs.
        const {error} = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message); 

            //check if a email is in the database
            const user = await User.findOne({email: req.body.Email});
            if(!user) return res.status(400).json({message:'Invalid Email Plz Try Again!'});

            //check if the password is correct.
            const validPass = await bcrypt.compare(req.body.Password, user.password);
            if(!validPass) return res.status(400).json({message:'Invalid Password Plz Try Again!'});

            // do the database authentication here, with user name and password combination.
            // const token = jwt.sign({_id: user.id}, config.secret, { expiresIn: config.tokenLife})
            // const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
            // const response = {
            //     "status": "Logged in",
            //     "token": token,
            //     "refreshToken": refreshToken,
            // }
            // tokenList[refreshToken] = response
            // res.status(200).json(response);


            //create and Assign a token
            const token = jwt.sign({ user : {id: user.id, role: user.role, username : user.username}}, process.env.TOKEN_SECRET, {expiresIn:3600});
            res.header('auth-token', token);

            res.status(200).json({success: 'Logged In Successfully :', accessToken: token});

    }


    //ADMIN SIDE
    
    // static saveAdmin = async (req, res) => {

    //     //Let's validate the inputs.
    //     const {error} = registerAdminValidation(req.body);
    //     if (error) return res.status(400).send(error.details[0].message);  
        
    //     //check if a admin is in the database
    //     const emailExists = await User.findOne({email: req.body.Email});
    //     if(emailExists) return res.status(400).send('Admin Email already Exists');

    //     //Hash the Password
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    //     const user = new User({
    //         username : req.body.UserName,
    //         email : req.body.Email,
    //         password : hashedPassword,
    //         role : 'admin'
    //     });

    //     try {
    //         await user.save();
    //         res.send({user: user._id});
    //     } catch (err) {
    //         res.status(400).send(err);
    //     }

    // }

    static AdminLogin = async (req, res) => {

        //Let's validate the inputs.
        const {error} = loginAdminValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message); 

            //check if a email is in the database
            const user = await User.findOne({email: req.body.Email});
            if(!user) return res.status(400).json({message:'Invalid Admin Email Plz Try Again!'});

            //check if the password is correct.
            // const validPass = await bcrypt.compare(req.body.Password, user.password);
            const validPass = req.body.Password === config.adminAccountPassword;
            if(!validPass) return res.status(400).json({message :'Invalid Admin Password Plz Try Again!'});

            // do the database authentication here, with user name and password combination.
            // const token = jwt.sign({_id: user.id}, config.secret, { expiresIn: config.tokenLife})
            // const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
            // const response = {
            //     "status": "Logged in",
            //     "token": token,
            //     "refreshToken": refreshToken,
            // }
            // tokenList[refreshToken] = response
            // res.status(200).json(response);


            //create and Assign a token
            
            const token = jwt.sign({ user : {id: user.id, role: user.role, username : user.username}}, process.env.TOKEN_SECRET, {expiresIn : 3600});
            res.header('auth-token', token);

            res.status(200).json({success: 'Admin Logged In Successfully :)', accessToken: token});

    }

}

export default UsersController;