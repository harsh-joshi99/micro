import knex from "../util/knex.js";
import bcrypt from "bcrypt";

class AuthenticationController {
  login = async (req, res, next) => {
    // const user = await knex("users").where("email", "ankit@hello.com").first();
    return res.json({ msg: "All ok", user: {} });
  };
  register = async (req, res, next) => {
    try {
      const { email, username, password } = req.body;
      if (!email && !username && !password) {
        return res
          .status(400)
          .json({ msg: "Bad request! required fields are missing" });
      }

      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await knex("users").insert(req.body);
      return res.json({ msg: "All ok" });
    } catch (error) {
        next(error);
    }
  };
}

export default new AuthenticationController();
