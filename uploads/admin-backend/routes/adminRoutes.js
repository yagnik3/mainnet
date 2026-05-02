const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    // ❌ Email not found
    if (!admin) {
      return res.status(401).json({ message: "Invalid Email or Password ❌" });
    }

    // ❌ Password wrong
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid Email or Password ❌" });
    }

    // ✅ Success
    res.json({ message: "Login Successful ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server Error ❌" });
  }
});
// ADD ADMIN (only once use karvu)
router.post("/create", async (req, res) => {
    const { email, password } = req.body;
  
    const admin = new Admin({ email, password });
    await admin.save();
  
    res.json({ message: "Admin created ✅" });
  });

module.exports = router;