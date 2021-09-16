// const express = require('express');
// const router = express.Router();
const router = require('./auth.route')
const userController = require('../controller/UserController')

router.get('/home', userController.showHome);

module.exports = router;
