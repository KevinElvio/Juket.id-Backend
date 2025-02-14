const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
// const accessValidation = require('../middleware/accessValidation');

router.get('/', UserController.readUser)

module.exports = router;