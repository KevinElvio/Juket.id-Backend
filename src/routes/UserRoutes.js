const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const accessValidation = require('../middleware/accessValidation');

router.get('/',accessValidation, UserController.readUser)
router.put('/:id',accessValidation, UserController.updateUser)

module.exports = router;