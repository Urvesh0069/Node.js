import User from "../models/auth.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ---------------- REGISTER ----------------
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check existing user
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User Already Exists." });

    // hash password
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });

    await user.save();

    // generate token on register
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- LOGIN ----------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
