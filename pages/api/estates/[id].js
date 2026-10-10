import EstateModel from "@/models/Estate";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const { id } = req.query;
    const estates = await EstateModel.findOne({ _id: id });
    return res.json(estates);
  }
};
export default handler;
