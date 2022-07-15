
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        publishedAt: {
            type: String,
            require: true
        },
        source: {
            name:{
                type: String,
                require: true
            },
            url:{
                type: String,
                require: true
            }
        },

    },
    {
        versionKey: false,
        timestamps: true,
    }

);

const Article = mongoose.model("article", articleSchema);

module.exports = Article;