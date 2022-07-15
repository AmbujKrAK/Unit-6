const { default: axios } = require("axios");
const express = require("express");


const ArticleController = require("./controllers/article.controller.js")

const app = express();



app.use(express.json());

app.use("/users" , ArticleController)


module.exports = app;