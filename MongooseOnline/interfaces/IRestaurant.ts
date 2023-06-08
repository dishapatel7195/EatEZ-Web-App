import Mongoose = require("mongoose");

interface IRestaurant extends Mongoose.Document {
    _id: Number,
    restaurantName: string,
    restaurantAddress: string,
    phoneNumber: string,
    restaurantImageUrl:string,
    ownerId:string,
    restaurantOwner:string
}
export {IRestaurant};