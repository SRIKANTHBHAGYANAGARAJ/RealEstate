const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.feature || mongoose.model("feature", schema);
export default model;
