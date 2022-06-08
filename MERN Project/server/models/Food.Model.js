const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
  FoodName: { type: String, required: true },
  FoodPlates: { type: Number, required: true },
})

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;