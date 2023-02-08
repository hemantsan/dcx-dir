const mongoose = require('mongoose');

const SkillModel = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
});

const SkillSchema = mongoose.model('skill', SkillModel);

module.exports = SkillSchema;
