const mongoose = require("mongoose");

let pageSchema = new mongoose.Schema({
  page_title: {
    type: String,
    default: "",
  },
  page_content: {
    type: String,
    default: "",
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
});

module.exports = mongoose.model("static_pages", pageSchema);
