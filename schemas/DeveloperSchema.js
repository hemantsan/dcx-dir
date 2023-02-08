const mongoose = require('mongoose');

const DeveloperModel = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  location: String,
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skill',
  },
  email: String,
});

const DeveloperSchema = mongoose.model('developer', DeveloperModel);

module.exports = DeveloperSchema;
