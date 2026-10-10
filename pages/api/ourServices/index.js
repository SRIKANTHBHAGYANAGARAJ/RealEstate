import ourServiceModel from "@/models/OurService";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const ourServices = await ourServiceModel.find({});
    return res.json(ourServices);
  }
};
export default handler;
