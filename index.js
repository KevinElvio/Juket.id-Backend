require('dotenv').config()
const express = require('express')
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
app.use('/user', UserRoutes)
app.use('/auth', AuthRoutes)
app.use('/seller', SellerRoutes)
app.use('/category', CategoryRoutes)
app.use('/product', ProductRoutes)


app.listen(PORT, () => {
  console.log(`Juket.id API listening on port ${PORT}`)
})  