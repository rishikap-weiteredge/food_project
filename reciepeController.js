const reciepeSchema = require('../models/reciepeModel');

exports.hihi = async (req, res) => {
    try {
        const food = await reciepeSchema.aggregate([
            {
                $addFields: {
                    itemCount: { $size: "$items" } 
                }
            },
            {
                $match: {
                    itemCount: { $gt: 3 } 
                }
            },
            {
                $project: {
                    _id: 0, 
                    items: 1,
                    reciepestatus: 1,
                    description:1
                }
            }
        ]);
        console.log(food);
        res.json(food);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching food items.' });
    }
};

exports.Createreciepe = async (req, res) => {
    try {
      const { reciepestatus, items, description } = req.body;
      const existing = await reciepeSchema.findOne({ description });
  
      if (existing) {
        return res.json({ status: 'error', message: 'Description name already exists' });
      }
      const newReciepe = new reciepeSchema({
        reciepestatus,
        items,
        description
      });  
      await newReciepe.save();

      return res.json({ status: 'success', message: 'New reciepe is created successfully' });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({ status: 'error', message: 'An error occurred while creating the new reciepe' });
    }
  };

 
exports.byebye = async (req, res) => {
    try {
      const collectionName = 'food_items'; 
      const { items } = req.body;
      if (!Array.isArray(items) || items.length < 3) {
        return res.json({ error: 'Please provide at least 3 items in the request body.' });
      }
      const match = await reciepeSchema.find({
        items: { $in: items }
      }).select('reciepeStatus description');
  
      if (match.length === 0) {
        res.json({ error: 'No matching recipes found for the provided ingredients.' });
      } else {
        res.json(match);
      }
    } catch (err) {
      console.error(err);
      res.json({ error: 'An error occurred while fetching ingredients.' });
    }
  };