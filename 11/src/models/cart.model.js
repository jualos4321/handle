import mongoose from 'mongoose'


mongoose.pluralize(null)

const collecion = 'cart'

const schema = new mongoose.Schema ({
    products: {type: String, required: true},
    quantity: {type: Number, required: true}
})

const cartModel = mongoose.model(collecion, schema)

export default cartModel