const express = require('express');
import cart from "./routes/cart"
import product from "./routes/product"
import handlebars from "express-handlebars"

const port = 8080

const app = express();
app.engine('handlebars', handlebars.engine())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cart', cart)
app.use('/api/product', product)

app.listen(port, () => {
    console.log(`Servicio activo en puerto ${port}`)
})


