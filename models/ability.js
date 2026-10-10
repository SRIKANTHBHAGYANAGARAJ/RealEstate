const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  header: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.ability || mongoose.model("ability", schema);
export default model;
