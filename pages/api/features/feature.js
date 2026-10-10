import featureModel from "@/models/feature";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const features = await featureModel.find({});
    return res.json(features);
  }
};
export default handler;
