import mongoose from "mongoose";
const Schema = mongoose.Schema


const User = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    gender: { type: String },
    role: { type: String },
    age: { type: Number },
    address: { type: String },
    phone: { type: String },
    avatar: { type: Buffer },
    createdAt: { type: Date },
    updateAt: { type: Date }
});

module.exports = mongoose.model('User', User)