const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 4001;

const User = require('../Models/user.js');
const Event = require('../Models/event.js');
// add one for booking

const app = express();
app.use(express.json()); 

//MongoDB Atlas connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
  