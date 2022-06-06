const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(5000, ()=> {
    try {
        console.log("Connection Established!");
        console.log("Listening to Port 5000!");
    } catch (error) {
        console.log("Error",error);
    }
})

