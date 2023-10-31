const express = require('express')
const router = express.Router();
const reciepeController = require('../controllers/reciepeController')

router.get('/getitems/items',reciepeController.hihi)
router.post('/add',reciepeController.Createreciepe)
router.get('/bye',reciepeController.byebye)
module.exports = router;
