import GalleryModel from "@/models/gallery";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const galleries = await GalleryModel.find({});
    return res.json(galleries);
  }
};
export default handler;
