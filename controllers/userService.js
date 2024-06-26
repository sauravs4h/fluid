const { Usermodel } = require("../models/User.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  const { firstName, lastName, userName, email, mobile_no, password } =
    req.body;

  try {
    let userAvailable = await Usermodel.findOne({ email });

    if (userAvailable) {
      res.status(401).json({ message: "user already available" });
    } else {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }
        const payload = {
          firstName,
          lastName,
          userName,
          email,
          mobile_no,
          password:hash,
        };

        const newUser = new Usermodel(payload);
        await newUser.save();

        res.status(200).json({ message: "signup successfull" });
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userAvailable = await Usermodel.findOne({ email });

    if (userAvailable) {
      const hashPassword = userAvailable.password;
      const userName= userAvailable.userName

      bcrypt.compare(password, hashPassword, function (err, result) {
        if (err) {
          res.status(500).json({ message: err });
        }
        if (result) {
          const expirationTime = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour
          var token = jwt.sign({ foo: "bar", exp: expirationTime }, "shhhhh");
          res.status(200).json({ msg: "Login Successfull ", token: token,userName });
        } else {
            res.status(401).json({message:"Wrong craditionals"})
        }
      });
    } else {
      res.status(401).json({ message: "Please signup first" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { signUp, logIn };