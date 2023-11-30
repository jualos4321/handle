import mongoose from 'mongoose'


mongoose.pluralize(null)

const collecion = 'products'

const schema = new mongoose.Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: Boolean, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
})

const productsModel = mongoose.model(collecion, schema)

export default productsModel