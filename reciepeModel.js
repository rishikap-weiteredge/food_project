const mongoose = require('mongoose');
const reciepeSchema = new mongoose.Schema({
     
        
            reciepestatus: { type: String, required: true },
            items:{ type: Array, required: true },
            description:{ type: String, required: true }

        
    
}, { collection: 'food_items' });
const model = mongoose.model("food_items", reciepeSchema);
module.exports = model