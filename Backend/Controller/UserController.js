import User from "../Models/User.js";
import validator from "validator";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const token = (id) => {
  return jwt.sign({ id }, process.env.JWTKEY);
};

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "user not found" });
    }
    const userPassword = await bcrypt.compare(password, user.password);
    if (!userPassword) {
      res.status(404).json({ success: false, message: "Password incorrect" });
    }
    const userToken = token(user._id);
    res
      .status(200)
      .json({ success: true, message: "Login Successfully", userToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    // Validate password length
    if (password.length<4) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password with salt

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Save user to database
    const user = await newUser.save();

    const userToken = token(user._id);
    res.json({
      success: true,
      message: "User registered successfully",
      user,
      userToken,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error", error });
  }
};

const AdminLogin = async (req,res) => {
  try {
    const {email,password}=req.body;
    if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
      const token=jwt.sign(email+password,process.env.JWTKEY)
      res.status(200).json({success:true,message:"admin login success",token})
    }
    else{
  res.status(404).json({message:"invalid credentials"})
    }
  } catch (error) {
    res.json({message:"something went wrong"})
  }
 
};



export { UserLogin, Register, AdminLogin };
