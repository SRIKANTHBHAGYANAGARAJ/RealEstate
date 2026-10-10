import aboutUsModel from "@/models/aboutUs";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const aboutUs = await aboutUsModel.find({});
    return res.json(aboutUs);
  }
};
export default handler;
