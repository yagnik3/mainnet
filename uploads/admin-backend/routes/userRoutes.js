const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET USER
router.get("/user", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

// ADD / UPDATE USER
router.post("/user", async (req, res) => {
    const { userName, version, os } = req.body;
  
    const user = new User({ userName, version, os });
    await user.save();
  
    res.json(user);
  });

  // UPDATE SCORE BY USERNAME
router.post("/update-score", async (req, res) => {
    const { userName, score } = req.body;
  
    try {
      const user = await User.findOne({ userName });
  
      if (!user) {
        return res.status(404).json({ message: "User not found ❌" });
      }
  
      // 👉 score add (increment)
      user.totalScore += score;
  
      await user.save();
  
      res.json({ message: "Score updated ✅", user });
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;