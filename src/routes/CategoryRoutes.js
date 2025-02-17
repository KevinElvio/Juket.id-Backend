const express = require('express')
const router = express.Router()
const categoryController = require('../controller/CategoryController')

router.post('/', categoryController.create)
router.get('/', categoryController.read)

module.exports = router