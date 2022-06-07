const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connect = require('./src/config/db');

app.listen(5000, async ()=> {
    try {
        await connect();
        console.log("Connection Established!");
        console.log("Listening to Port 5000!");
    } catch (error) {
        console.log("Error",error);
    }
})

