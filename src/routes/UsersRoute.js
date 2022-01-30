const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/AuthController');
const privateRoute = require('../middlewares/verifyToken');

router.post('/register', UsersController.saveUser);
router.get('/users', privateRoute.authAdmin, UsersController.getUsers);
router.post('/login', UsersController.userLogin);
//Admin Registration Route
// router.post('/Admin-Register', UsersController.saveAdmin);
//Admin Login Route
router.post('/admin', UsersController.AdminLogin);
//Admin Profile

module.exports = router;