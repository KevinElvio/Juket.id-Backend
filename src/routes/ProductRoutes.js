const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')
const accessValidation = require('../middleware/accessValidation');

router.post("/", accessValidation, ProductController.create)
router.get("/", ProductController.read)
router.get("/search", ProductController.search)
router.get("/:id", ProductController.readById)
router.put("/:id", accessValidation, ProductController.update)
router.delete("/:id", accessValidation, ProductController.destroy)

module.exports = router