const express = require('express');
const router = express.Router();
const authController = require('../controller/AuthController')
const userController = require('../controller/UserController')
const userRegistValidator = require('../middleware/userRegistValidator');

router.get('/', authController.showLoginPage);
router.get('/register', authController.showRegisterPage);
router.post('/register', userRegistValidator, userController.showHome);
// router.get('/home', userController.showHome);


module.exports = router;
