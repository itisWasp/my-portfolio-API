// const express = require('express');
// const router = express.Router();
// const ContactController = require('../controllers/ContactController');
// const privateRoute = require('../middlewares/verifyToken');

import express from 'express';
const router = express.Router();
import ContactController from '../controllers/ContactController.js';
import privateRoute from '../middlewares/verifyToken.js';

router.post('/contact', ContactController.submitForm);
router.get('/contact', privateRoute.authAdmin , ContactController.getForm);
router.get('/contact/:id', privateRoute.authAdmin , ContactController.getFormById);
router.delete('/contact/:id', privateRoute.authAdmin , ContactController.deleteForm);

export default router;