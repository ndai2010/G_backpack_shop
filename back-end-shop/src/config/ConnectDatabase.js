import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/travel_shop');
        console.log('connect success');
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    connect
}