const { Module } = require('module');
const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    id :Number,
    name :String,
    price :Number,
    quantity: Number 
},
{
    strict : false
}
)
const Products= mongoose.model('products',productSchema);
module.exports = Products ;