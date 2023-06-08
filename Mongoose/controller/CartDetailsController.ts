import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ICartDetails} from '../interfaces/ICartDetails';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CartDetailController {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

  
    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                _id: Number,
                custEmailId: String,
                restaurantId: String,
                itemId: Number,
                itemName: String,
                itemPrice: Number,
                qty: Number,
                itemImageUrl: String,
            }, {collection: 'CartDetail'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ICartDetails>("Cart", this.schema);
    }

    public retrieveCartDetails(response:any, filter:Object ) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }


    public retrieveAllCartDetails(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public deleteCartItem(response:any, filter:Object) {
        var query = this.model.remove(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public deleteAllCartItem(response:any) {
        var query = this.model.remove();
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}

export {CartDetailController};