require('dotenv').config()
const express = require('express')
const multer = require('multer')
const path = require('path')
const UserRoutes = require('./src/routes/UserRoutes')
const AuthRoutes = require('./src/routes/AuthRoutes')
const SellerRoutes = require('./src/routes/SellerRoutes')
const CategoryRoutes = require('./src/routes/CategoryRoutes')
const ProductRoutes = require('./src/routes/ProductRoutes')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors");

app.use(express.json())
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)

  }
})
const upload = multer({ storage })

app.use('/user', UserRoutes)
app.use('/auth', AuthRoutes)
app.use('/seller', SellerRoutes)
app.use('/category', CategoryRoutes)
app.use('/product',upload.single('image'), ProductRoutes)


app.listen(PORT, () => {
  console.log(`Juket.id API listening on port ${PORT}`)
})  