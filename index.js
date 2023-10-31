const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ingredientRoutes = require('./src/routes/ingredientRoutes')
const reciepeRoutes = require('./src/routes/reciepeRoutes')
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/reciepe');

app.use('/auth', ingredientRoutes);
app.use('/home',reciepeRoutes)

app.listen(1990, () => {
  console.log('server started');
});
