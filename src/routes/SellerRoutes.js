const express = require('express')
const router = express.Router()
const SellerController = require('../controller/SellerController')

router.get('/', SellerController.read)
router.get('/:id', SellerController.readById)
router.post('/', SellerController.create)
router.put('/:id', SellerController.update)
router.delete('/:id', SellerController.delete)

module.exports = router