const express = require("express");
const { update } = require("../models/users");
const router = express.Router();
const User = require("../models/users");

router.get("/users", (req, res) => {
  User.find({}).exec((error, users) => {
    if (error) return res.status(400).json(error);
    if (users) {
      return res.status(200).json({ users });
    }
  });
});

router.post("/add-user", (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already registered",
      });

    const { id, firstName, lastName, email, contactNumber } = req.body;
    const _user = new User({
      id,
      firstName,
      lastName,
      email,
      contactNumber,
    });

    _user.save((error, data) => {
      if (error)
        return res.status(400).json({
          message: "Something went wrong",
        });

      if (data)
        return res.status(201).json({
          message: "User created successfully!",
        });
    });
  });
});

router.put("/update-user", async (req, res) => {
  const { _id, id, firstName, lastName, email, contactNumber } = req.body;

  try {
    await User.findById(_id, (err, updatedUser) => {
      updatedUser.id = id;
      updatedUser.firstName = firstName;
      updatedUser.lastName = lastName;
      updatedUser.email = email;
      updatedUser.contactNumber = contactNumber;
      updatedUser.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.findByIdAndRemove(id).exec();
  res.send("deleted");
});

module.exports = router;
