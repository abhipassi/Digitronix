import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'
import categoryModel from '../models/category.js'
import { sendVerificationCode } from '../middleware/email.js';
import { application } from 'express';


// function for checking 
export const demo = (req, res) => {
  res.json('Live');
};

// function for user login 
export const userLogin = async (req, res) => {
  let { email, password } = req.body

  if (!email || !password) {
    return res.status(404).json("Kindly provide the data")
  }

  try {
    const checkUserFromDb = await userModel.findOne({ email: email })
    if (checkUserFromDb) {
      const encryptedPassword = checkUserFromDb.password
      const isMatch = await bcrypt.compare(password, encryptedPassword)

      if (isMatch) {
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET)
        res.cookie('token', token)
        return res.status(200).json({ message: "Login Successful" })
      }

      else if (!isMatch) {
        return res.status(401).json({ message: "Wrong Password" })
      }
    }
    else {
      return res.status(400).json("User not found")
    }
  } catch (error) {
    return res.status(500).json(error)
  }
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
  console.log(verificationCode);


  if (!verificationCode) {
    res.status(400).json({ message: 'verification code is required.' })
  }

  try {
    const user = await userModel.findOne({ email: email })
    const encryptedCode = user.verificationCode

    const isMatch = await bcrypt.compare(verificationCode, encryptedCode)

    if (isMatch) {
      // res.json("Done")
      const token = jwt.sign({ email: email }, process.env.JWT_SECRET)
      res.cookie('token', token)
      return res.status(200).json({ message: "Verified" })
    }
    else if (!isMatch) {
      return res.status(401).json({ message: "Wrong OTP" })
    }
    else {
      return res.status(404).json({ message: "Invalid or expired verification code." })
    }
  } catch (error) {
    console.error('OTP verification error:', error);
    return res.status(500).json({ message: 'Server error during verification.' });
  }
}

export const createCategory = async (req, res) => {
  const { categoryName, categoryDescription } = req.body
  //  categoryName = categoryName.trim();
  //   categoryDescription = categoryDescription.trim();
  try {
    const isExistingCategory = await categoryModel.findOne({ categoryName })
    if (isExistingCategory) {
      return res.status(400).json({ msg: "Category already exist" })  
    }

    await categoryModel.create({
      categoryName: categoryName.trim(),  
      categoryDescription: categoryDescription.trim()
    })
    return res.status(200).json({ msg: "Category created successfuly" })
  }
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const showCategory = async (req, res) => {
  try {
    const category = await categoryModel.find()
    res.json(category)
  } catch (error) {
    console.log(error);
  }
}

export const deleteCategory = async(req,res) =>{
  const {categoryName} = req.body
  try {
    await categoryModel.deleteOne({categoryName})
    return res.status(200).json({msg:"Category Deleted Successfuly"})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateCategory = async (req,res) =>{
const categoryName = req.body.categoryName
const categoryDescription = req.body.categoryDescription
// console.log(req.params.id);
try {
  let updateCategory = await categoryModel.findByIdAndUpdate(
    req.params.id,
    {$set:req.body},
    {new:true}
  )

  res.status(200).json("Updated")
} catch (error) {
  console.log(error);
}

res.json("Done")
}

export const addProducts = async(req,res) =>{
  console.log(req.body)
  
  res.json("Done")
}