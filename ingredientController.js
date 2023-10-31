const ingredientSchema = require('../models/ingredientModel');

exports.ingredients = async (req, res) => {
  try {
    const ingredients = await ingredientSchema.find({});
    res.json(ingredients);
  } catch (err) {
    console.error(err);
    res.json({ error: 'An error occurred while fetching ingredients.' });
  }
};

exports.data = async (req, res) => {
  try {
    const ingredients = req.body.ingredients;
    console.log(ingredients);

    if (
      !ingredients ||
      !Array.isArray(ingredients) ||
      ingredients.length === 0
    ) {
      res.json({ error: 'Please provide an array of ingredients.' });
      return;
    }

    const existingIngredients = await ingredientSchema.find({
      ingredients: { $in: ingredients },
    });

    if (existingIngredients.length > 0) {
      res.json({
        message: 'Ingredients already exist',
        ingredients: existingIngredients,
      });
    } else {
      const newIngredients = ingredients.map((ingredient) => ({
        ingredients: ingredient,
      }));
      const createdIngredients = await ingredientSchema.insertMany(
        newIngredients,
      );
      res.json({
        message: 'Ingredients added successfully',
        ingredients: createdIngredients,
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      error: 'An error occurred while adding/selecting the ingredients.',
    });
  }
};
