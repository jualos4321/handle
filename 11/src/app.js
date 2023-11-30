const express = require('express');
import cart from "./routes/cart"
import product from "./routes/product"
import handlebars from "express-handlebars"
import mongoose from 'mongoose'

const port = 8080

const MONGOOSE_URL = 'mongodb+srv:jualos:GG53@cluster0.qkaoogh.mongodb.net/ecomerce'

const app = express();
app.engine('handlebars', handlebars.engine())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cart', cart)
app.use('/api/product', product)



try {
    await mongoose.connect(MONGOOSE_URL)
    app.listen(port, () => {
        console.log(`Backend activo puerto ${port} conectado a bbdd`)
    })
} catch(err) {
    console.log(`No se puede conectar con bbdd (${err.message})`)
}

