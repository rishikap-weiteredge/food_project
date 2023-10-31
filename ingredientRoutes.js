const express = require('express')
const router = express.Router();
const ingredientController = require('../controllers/ingredientController')

router.get('/getitems',ingredientController.ingredients)
router.post('/selectdata',ingredientController.data)
module.exports = router;
