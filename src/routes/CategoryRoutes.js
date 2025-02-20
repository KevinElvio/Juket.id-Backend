const express = require('express')
const router = express.Router()
const categoryController = require('../controller/CategoryController')
const accessValidation = require('../middleware/accessValidation');

router.post('/',accessValidation, categoryController.create)
router.get('/', categoryController.read)
router.put('/:id',accessValidation, categoryController.update)
router.delete('/:id',accessValidation, categoryController.destroy)

module.exports = router