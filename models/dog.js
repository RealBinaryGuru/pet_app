const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dog", dogSchema);
