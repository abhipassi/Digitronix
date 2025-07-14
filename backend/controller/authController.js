import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'
import { sendVerificationCode } from '../middleware/email.js';


// route for checking 
export const demo = (req, res) => {
  res.json('Live');
};

// function for user login 
export const userLogin = (req, res) => {
  let { email, password } = req.body
  res.json("Done")
  console.log(req.body);
}


// function for user sign up 

export const userSignUp = async (req, res) => {
  let { fullname, email, password } = req.body
  console.log(req.body);

  if (!fullname || !email || !password) {
    return res.status(404).json("Kindly Provide the data")
  }

  try {

    const isExistingUser = await userModel.findOne({ $or: [{ fullname }, { email }] })

    if (isExistingUser) return res.status(400).json({ msg: "User already exist" })

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedPassword = await bcrypt.hash(password, 10)

    const hashedverificationCode = await bcrypt.hash(verificationCode, 10)

    await userModel.create({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      verificationCode: hashedverificationCode
    })
    res.status(200).json({ msg: "User Created Successfully" })
    // console.log("Done");
    try {
      sendVerificationCode(email, verificationCode);
    } catch (emailErr) {
      res.status(201).json({
        msg: "User registered, but verification email failed to send",
        emailError: emailErr.message,
      });
    }

  }
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}


export const otpVerification = async (req, res) => {
  const { email, verificationCode } = req.body

  if (!verificationCode) {
    res.status(400).json({ message: 'verification code is required.' })
  }

  try {
    const user = await userModel.findOne({ email: email })
    const encryptedCode = user.verificationCode

    const isMatch = await bcrypt.compare(verificationCode, encryptedCode)

    if (isMatch) {
      const token = jwt.sign({ email: email }, process.env.JWT_SECRET)
      res.cookie('token', token)
      return res.status(200).json({ message: "Verified" })
    }
    else {
      return res.status(404).json({ message: "Invalid or expired verification code." })
    }
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ message: 'Server error during verification.' });
  }
}

// export const getEmailForVerification =  async (req,res) =>{
//   let {email} =req.body
//   console.log(req.body);
//   res.json("Got it")
// }