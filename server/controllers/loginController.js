const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required" });

    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    await foundUser.save();

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
};

module.exports = { handleLogin };
