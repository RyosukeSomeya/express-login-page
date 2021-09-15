const express = require('express');
const router = express.Router();
const authController = require('../controller/AuthController')

/* GET users listing. */
router.get('/', authController.login);
router.get('/register', authController.registUser);

module.exports = router;
