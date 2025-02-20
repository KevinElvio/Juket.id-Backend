const express = require('express')
const router = express.Router()
const SellerController = require('../controller/SellerController')
const accessValidation = require('../middleware/accessValidation');

router.get('/', SellerController.read)
router.get('/:id', SellerController.readById)
router.post('/', accessValidation, SellerController.create)
router.put('/:id', accessValidation, SellerController.update)
router.delete('/:id', accessValidation, SellerController.destroy)

module.exports = router