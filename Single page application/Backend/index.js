const express = require("express");
const mongoose = require("mongoose");
const app = express();


var username = "Ambuj123";
var pass = "Ambuj123";
let database = "Employees";


const connect = () => {
    mongoose.connect(`mongodb+srv://${username}:${pass}@cluster0.xn7wc.mongodb.net/${database}?retryWrites=true&w=majority`)
}



app.listen(5000, async ()=> {
    try {
        await connect();
        console.log("Connection Established!");
        console.log("Listening to Port 5000!");
    } catch (error) {
        console.log("Error",error);
    }
})

