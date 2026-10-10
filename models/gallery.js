const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.gallery || mongoose.model("gallery", schema);
export default model;
