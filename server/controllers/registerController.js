const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const duplicate = await User.findOne({ email }).exec();
  if (duplicate)
    return res.status(409).json({ message: "This email already exists" });

  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPwd,
    });

    await User.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
};

module.exports = { handleNewUser };
