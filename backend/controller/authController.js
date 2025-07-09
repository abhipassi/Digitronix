import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'


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
      fullname:fullname,
      email:email,
      password: hashedPassword,
      verificationCode: hashedverificationCode
    })
    res.status(200).json({ msg: "User Created Successfully" })
    console.log("Done");
  }
  catch (error) {
    res.status(500).json({ error: error.message })
  }

}