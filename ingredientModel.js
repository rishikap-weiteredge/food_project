const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    ingredients: [
        {
            bread: { type: String, required: true },
            biscuit: { type: String, required: true },
            egg: { type: String, required: true },
            // milk: { type: String, required: true },
            // chocolate: { type: String, required: true },
            // maggie: { type: String, required: true },
            // oil: { type: String, required: true },
            // veggies: { type: String, required: true }
        }
    ]
}, { collection: 'list-food' });
const model = mongoose.model("list-food", ingredientSchema);
module.exports = model;
