const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const accessValidation = require('../middleware/accessValidation');

router.get('/', accessValidation, UserController.readUser)

exports.router = router;