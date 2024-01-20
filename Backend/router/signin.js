const { Router } = require("express");
const UserController = Router();
const bcrypt = require("bcrypt");
const JWT = require("json-web-token");
const { LoginModel } = require("../model/signIn.Model");
const { SingUpModel } = require("../model/singUp.Model");
require("dotenv").config();

//  SingUp

UserController.post("/signup", async (req, res) => {
  const { password, email, name, mobilenumber } = req.body;
  if (password !== "" && email !== "" && mobilenumber !== "" && name !== "") {
    bcrypt.genSalt(password, 6, async (err, hash) => {
      if (err) {
        res.send("Something Went Wrong");
      } else {
        const user = new SingUpModel({
          name,
          password: hash,
          mobilenumber,
          email,
        });
        await user.save();
        res.status(200).send("Sign Up SucessFully");
      }
    });
  } else {
    res.status(400).send("Something Went Wrong");
  }
});

// Login
UserController.post("/login", (req, res) => {
  const { password, email } = req.body;
  if (password === "" || email === "") {
    res.send("Invalid Credential");
    return;
  }
  const user = LoginModel.findOne({ email });
  let hash = user.password;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      const token = JWT.sign({ userid: user.id }, "SecretKey");
      res.status(200).json({ token, status: "Login Sucessfully" });
    } else {
      res.status(400).send("Try Again");
    }
  });
});
