import EstateModel from "@/models/Estate";
const { default: connectToDB } = require("@/utils/db");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    const estates = await EstateModel.find({});
    return res.json(estates);
  } else if (req.method === "POST") {
    try {
      const {
        title,
        img,
        roomCount,
        meterage,
        price,
        address,
        phoneNumber,
        email,
        Seller,
      } = req.body;
      if (!title.trim() || title.length < 4) {
        return res.status(422).json({ message: "title is not valid !!!" });
      } else if (!img.trim() || img.length < 5) {
        return res.status(422).json({ message: "img is not valid !!!" });
      } else if (
        !roomCount.trim() ||
        roomCount.length < 0 ||
        roomCount.length > 30
      ) {
        return res.status(422).json({ message: "roomCount is not valid !!!" });
      } else if (!meterage.trim() || meterage.length < 10) {
        return res.status(422).json({ message: "meterage is not valid !!!" });
      }
      await EstateModel.create({
        title,
        img,
        roomCount,
        meterage,
        price,
        address,
        phoneNumber,
        email,
        Seller,
      });
      return res.status(201).json({ message: "estate added successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "internal server error !!!", error: err });
    }
  }
};
export default handler;
