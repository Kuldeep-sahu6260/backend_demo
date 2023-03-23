const mongoose = require("mongoose");
const titleSchema = new mongoose.Schema(
  {
  
    name: {
      type: String,
      required: true,
      trim: true,
    },
    categoryImage: { type: String },
   
}, { timestamps: true }
    
);

module.exports = mongoose.model("Title", titleSchema);