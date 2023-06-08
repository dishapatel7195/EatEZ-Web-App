"use strict";
exports.__esModule = true;
exports.CartDetailController = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CartDetailController = /** @class */ (function () {
    function CartDetailController() {
        this.createSchema();
        this.createModel();
    }
    CartDetailController.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            _id: Number,
            custEmailId: String,
            restaurantId: String,
            itemId: Number,
            itemName: String,
            itemPrice: Number,
            qty: Number,
            itemImageUrl: String
        }, { collection: 'CartDetail' });
    };
    CartDetailController.prototype.createModel = function () {
        this.model = mongooseConnection.model("Cart", this.schema);
    };
    CartDetailController.prototype.retrieveCartDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    CartDetailController.prototype.retrieveAllCartDetails = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    CartDetailController.prototype.deleteCartItem = function (response, filter) {
        var query = this.model.remove(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    CartDetailController.prototype.deleteAllCartItem = function (response) {
        var query = this.model.remove();
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return CartDetailController;
}());
exports.CartDetailController = CartDetailController;
