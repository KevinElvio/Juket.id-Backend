const express = require('express')
const router = express.Router()
const SellerController = require('../controller/SellerController')

router.get('/', SellerController.read)
router.get('/:id', SellerController.readById)
router.post('/', SellerController.create)

module.exports = router