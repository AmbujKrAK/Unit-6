const express = require("express");
const Getdata = require("../apicall/callapi.js");
const Article = require("../models/article.model.js");
// const Article = require("../models/article.model.js")
const app = express();


// -------------------------------------- User Schema ------------------------------------ //


app.get("", async (req, res) => {
    try {
        // Getdata()
        const user = await Article.find()
        return res.status(200).send({ users: user });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});


app.post("/create", async (req, res) => {
    try {
        // Getdata()
        const article = await Article.create(req.body);
        return res.status(201).send(article);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});


// ------------------------------ Update Id --------------------------------//

app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body, {new: true});
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
});



module.exports = app;