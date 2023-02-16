import dbConnection from "../../lib/database";
import User from "../../lib/models";

const getUser = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const user = await User.find();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ msg: err.message });
      }
      break;

    case "POST":
      try {
        const message = req.body.message;

        if (message.length < 10) {
          res
            .status(400)
            .json({ msg: "Pesan terlalu pendek, minimal 10 karakter" });
          break;
        }
        const create = await new User({
          name: req.body.name,
          message: req.body.message,
          presence: req.body.presence,
          attend: req.body.attend,
          createdAt: req.body.createdAt,
        });
        create.save();
        res.status(200).json(create);
      } catch (err) {
        res.status(500).json({ msg: "error boss" });
      }
      break;
    default:
      res.status(500).json({ msg: "Access Denied" });
  }
};

export default dbConnection(getUser);