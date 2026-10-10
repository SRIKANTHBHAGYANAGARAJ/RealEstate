const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.aboutUs || mongoose.model("aboutUs", schema);
export default model;
