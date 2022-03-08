import mongoose from "mongoose";
const Schema = mongoose.Schema


const Product = new Schema({
    name: { type: String },
    idProduct: { type: String },
    idmManufacturer: { type: String },
    type: { type: String },
    amount: { type: Number, min: 0 },
    price: { type: Number },
    descriptiong: { type: String },
    picture: { type: Buffer },

    createdAt: { type: Date },
    updateAt: { type: Date }
});

module.exports = mongoose.Product('User', Product)