const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    img_id:{type:String, unique:true},
    img_url:{type:String, unique:true},
    name: {type:String, unique:true},
    description: {type: String, unique:true},
    price: {type: String},
    type: {type: String},
})
module.exports =  mongoose.model('products', productSchema);
