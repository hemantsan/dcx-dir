const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb://localhost:27017/dcx-dir',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000,
  },
  (error) => {
    if (error) {
      console.log(`DB Error => ${error}`);
    } else {
      console.log('DB instance successfully connected');
    }
  }
);
