const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, ()=> {
    try {
        console.log("Connected!")
    } catch (error) {
        console.log("Error",error);
    }
})

