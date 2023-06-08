import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as session from 'express-session';

import {RestaurantController} from './controller/RestaurantController';
import {RestaurantMenuController} from './controller/RestaurantMenuController';
import {OrderDetailController} from './controller/OrderDetailController';
import {CartDetailController} from './controller/CartDetailsController';

import {DataAccess} from './DataAccess';
import { isThisTypeNode } from 'typescript';
const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require ('cookie-parser')
import GooglePassport from './sso/googlePassport';
import GoogleStrategy from 'passport-google-oauth20'
import {IRestaurant} from './interfaces/IRestaurant';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Restaurant:RestaurantController;
  public RestaurantMenu:RestaurantMenuController;
  public OrderDetail:OrderDetailController;
  public CartDetails: CartDetailController;
  public rIdGenerator: number;
  public mIdGenerator: number;
  public orderIdGenerator: number;
  public cartIdGenerator: number;
  public googlePassportObj:GooglePassport;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.expressApp.use(cors());
    this.middleware();
    this.routes();
    this.Restaurant = new RestaurantController();
    this.RestaurantMenu = new RestaurantMenuController();
    this.OrderDetail = new OrderDetailController();
    this.CartDetails = new CartDetailController();
    this.rIdGenerator = 100;
    this.mIdGenerator = 100;
    this.orderIdGenerator = 100;
    this.cartIdGenerator = 100;
    this.googlePassportObj = new GooglePassport();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    this.expressApp.use(cookieParser());
    this.expressApp.use(cookieSession({secret: 'EatEZ secret' }));
    this.expressApp.use(passport.initialize());
    this.expressApp.use(passport.session());
  }

  private validateAuth(req, res, next):void {
    if (req.isAuthenticated()) { console.log("user is authenticated"); return next(); }
    console.log("user is not authenticated");
    res.redirect('/');
  }


  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
  
  router.get('/auth/google', 
  passport.authenticate('google', {scope: ['profile', 'email']}));


  router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' } ),
    (req, res) => {
      this.Restaurant.model.findOne({ownerId : req.user.id}).then((restaurant) => {
                        if (restaurant) {

                        let obj: IRestaurant = JSON.parse(JSON.stringify(restaurant));
                        res.redirect('/#/restaurantOwner/'+obj._id+'?name='+req.user.displayName+'&email='+req.user.emails[0].value);
                        } else {
                            res.json(null);
                        }
                    })
    } 
  );

  router.get('/auth/logout',(req,res,next)=>{
    req.logout();
    res.redirect('/#/restaurantOwnerLogin');
  });
    //Add restaurant
    router.post('/app/addRestaurant/', (req, res) => {​​
      console.log(req.body);
      var jsonObj = req.body;
      jsonObj._id = this.rIdGenerator;
      this.Restaurant.model.create([jsonObj], (err) => {​​
      if (err) {​​
              console.log('Restaurant not added  ', err);
              return;
                }​​
              }​​);
      res.send(this.rIdGenerator.toString());
      this.rIdGenerator++;
      }​​);

    //Display restaurant with specific id
    router.get('/app/restaurantList/:restaurantId', (req, res) => {
        var id = req.params.restaurantId;
        console.log('Query single restaurant with id: ' + id);
        this.Restaurant.retrieveRestaurantDetails(res, {_id: id});
    });

    //Display all restaurant List
    router.get('/app/restaurantList/', (req, res) => {
        console.log('Query All Restaurants');
        this.Restaurant.retrieveAllRestaurantLists(res);
    });


     //Display menu of a specific restaurant
 router.get('/app/restaurantMenuForUser/:restaurantId', (req, res) => {
      
    console.log("User loggedin")
  var id = req.params.restaurantId;
  console.log('Query single restaurant menu with id: ' + id);
  this.RestaurantMenu.retrieveMenuDetails(res, {restaurantId: id});
  
});
 //Display menu of a specific restaurant
 router.get('/app/restaurantMenu/:restaurantId', (req, res) => {
      
  if(!req.user){
    console.log("User not loggedin");
    //res.redirect('/#/restaurantOwnerLogin');
    return res.status(401).send({
      message: 'Unauthorized user!'
   });
  }
  else {
    console.log("User loggedin")
  var id = req.params.restaurantId;
  console.log('Query single restaurant menu with id: ' + id);
  this.RestaurantMenu.retrieveMenuDetails(res, {restaurantId: id});
  }
});

  //Display a specific menu from restaurant menu
  router.get('/app/restaurantMenuItem/:itemId', (req, res) => {
    var id = req.params.itemId;
    this.RestaurantMenu.retrieveMenuDetails(res, {_id: id});
});




//Add menu for a specific restaurant

router.post('/app/addRestaurantMenuItem/', (req, res) => {​​
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj._id = this.mIdGenerator;
        
        this.RestaurantMenu.model.create([jsonObj], (err)=>
        {​​
        if (err) {​​
        console.log('Menu Item not added  ', err);
        return;
        }​​
        }​​);
        res.send(this.mIdGenerator.toString());
        this.mIdGenerator++ 
        }​​);



//Delete a specific menu from specific restaurant 
router.delete('/app/restaurantMenuItem/:itemId', (req, res) => {

  var id = req.params.itemId;
  this.RestaurantMenu.deleteMenuItem(res, {_id : id});

});

//Delete a specific restauarant
router.delete('/app/deleteRestaurant/:restaurantId', (req, res) => {
    var id = req.params.restaurantId;
    console.log('Restaurant deleted');
    this.Restaurant.deleteRestaurant(res, {_id: id});
});

//Get order details for specific order Id
router.get('/app/orderDetails/:orderID', (req, res) => {
  var id = req.params.orderID;
  this.OrderDetail.retrieveOrderDetails(res, {_id: id});
});


//Create order
router.post('/app/addOrder/', (req, res) => {​​
  console.log(req.body);
  var jsonObj = req.body;
  jsonObj._id = this.orderIdGenerator;
  this.OrderDetail.model.create([jsonObj], (err) => {​​
    if (err) 
    {​​
      console.log('Order could not be created', err);
      return;
    }​​
  }​​);
  res.send(this.orderIdGenerator.toString());
  this.orderIdGenerator++;
  }​​);

   //Display all order details
router.get('/app/OrderDetails/', (req, res) => {
  console.log('Query All Orders');
  this.OrderDetail.retrieveAllOrderDetails(res);
});

   //Display specific order details
   router.get('/app/OrderDetails/:emailId', (req, res) => {
    var emailId = req.params.emailId;
    console.log("Email id = " +emailId);
    this.OrderDetail.retrieveOrderDetails(res, {emailId: emailId});
  });
 

  router.get('/app/restaurantList/', (req, res) => {
    console.log('Query All Restaurants');
    this.Restaurant.retrieveAllRestaurantLists(res);
});

   //Display specific order details
   router.get('/app/AllCartDetails/', (req, res) => {
    this.CartDetails.retrieveAllCartDetails(res);
  });

     //Display specific order details
     router.get('/app/cartDetails/:custEmailId', (req, res) => {
      var custEmailId = req.params.custEmailId;
      console.log("Email id = " +custEmailId);
      this.CartDetails.retrieveCartDetails(res, {custEmailId: custEmailId});
    });

  //Create order
  router.post('/app/addCartDetails/', (req, res) => {​​
    console.log(req.body);
    var jsonObj = req.body;
    jsonObj._id = this.cartIdGenerator;
    this.CartDetails.model.create([jsonObj], (err) => {​​
      if (err) 
      {​​
        console.log('Order could not be created', err);
        return;
      }​​
    }​​);
    res.send(this.cartIdGenerator.toString());
    this.cartIdGenerator++;
    }​​);

    //Delete a specific restauarant
  router.delete('/app/deleteCart/:cartId', (req, res) => {
    var id = req.params.cartId;
    console.log('CartItem deleted');
    this.CartDetails.deleteCartItem(res, {_id: id});
});

  //Delete entire specific restauarant
  router.delete('/app/deleteCart/', (req, res) => {
    var id = req.params.cartId;
    console.log('CartItem deleted');
    this.CartDetails.deleteAllCartItem(res);
});

  

this.expressApp.use('/', router);
this.expressApp.use('/', express.static(__dirname+'/dist/EatEZ'));
this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
this.expressApp.use('/images', express.static(__dirname+'/img'));
this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};