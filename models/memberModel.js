const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  yearOfStudying: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  motivation: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("Member", memberSchema);
