const express = require('express')
const router = express.Router()
const SellerController = require('../controller/SellerController')

router.post('/', SellerController.create)

module.exports = router