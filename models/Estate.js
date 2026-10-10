const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    minLength: 4,
    maxLength: 200,
    required: true,
  },
  img: {
    type: String,
    minLength: 5,
    required: true,
  },
  roomCount: {
    type: Number,
    min: 0,
    max: 30,
    required: true,
  },
  meterage: {
    type: Number,
    min: 10,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  Seller: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
});

const model = mongoose.models.estate || mongoose.model("estate", schema);
export default model;
