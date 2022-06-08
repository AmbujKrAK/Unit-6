const express = require('express');
const mongoose = require('mongoose');
const app = express();

const FoodModel = require('./models/Food.Model');

app.use(express.json());


var username = "Ambuj123";
var pass = "Ambuj123";
let database = "food";


const connect = () => {
    mongoose.connect(`mongodb+srv://${username}:${pass}@cluster0.xn7wc.mongodb.net/${database}?retryWrites=true&w=majority`)
}


app.get('/',  (req,res=> {
    const food = new FoodModel({FoodName : 'pizza', FoodPlates: 2});
    try {
         food.save();
    } catch (err) {
        console.log("Error",err)
    }
}))



app.listen(3000, ()=> {
    try {
        console.log("Connection Established !")
        console.log("Listening to Port 3000 !");
    } catch (err) {
        console.log("Error", err);
    }
})