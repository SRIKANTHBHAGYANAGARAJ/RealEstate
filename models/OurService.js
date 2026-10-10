const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    // required: true,
  },
});

const model =
  mongoose.models.ourService || mongoose.model("ourService", schema);
export default model;
