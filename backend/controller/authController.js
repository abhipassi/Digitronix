import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// route for checking 
export const demo = (req, res) => {
  res.json('Live');
};

// function for user login 
export const userLogin = (req,res) =>{
  let {email, password} = req.body
  res.json("Done")
  console.log(req.body);
}


// function for user sign up 

export const userSignUp = (req,res) =>{
  let {fullname, email, password} = req.body
  res.json("Done")
  console.log(req.body);
  
}