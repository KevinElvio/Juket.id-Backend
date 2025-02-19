const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.post("/", ProductController.create)
router.get("/", ProductController.read)
router.get("/:id", ProductController.readById)
router.put("/:id", ProductController.update)

module.exports = router