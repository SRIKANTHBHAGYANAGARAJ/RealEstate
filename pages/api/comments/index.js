import commentModel from "@/models/comment";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const comments = await commentModel.find({});
    return res.json(comments);
  }
};
export default handler;
