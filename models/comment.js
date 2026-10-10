const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.comment || mongoose.model("comment", schema);
export default model;
