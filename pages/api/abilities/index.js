import abilityModel from "@/models/ability";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const abilities = await abilityModel.find({});
    return res.json(abilities);
  }
};
export default handler;
