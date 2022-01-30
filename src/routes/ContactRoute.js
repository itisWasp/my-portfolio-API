const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const privateRoute = require('../middlewares/verifyToken');


router.post('/contact', ContactController.submitForm);
router.get('/contact', privateRoute.authAdmin , ContactController.getForm);
router.get('/contact/:id', privateRoute.authAdmin , ContactController.getFormById);
router.delete('/contact/:id', privateRoute.authAdmin , ContactController.deleteForm);

module.exports = router;