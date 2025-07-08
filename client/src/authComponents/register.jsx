import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Register() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
    

  const handleFullName = (e) =>{
    setFullName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    let data = {fullname, email, password}
    console.log(data);
    
    try {
      let response = await axios.post('http://localhost:5000/register',data)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <div>
        <h1 className='flex justify-center mt-15 font-bold text-2xl'>Create Your Account</h1>
      </div>
      <br />
      <br /><br />
  
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full name</label>
          <input type="text" onChange={handleFullName} id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Full Name " required />
        </div>
        <div className="mb-5">
          <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 ">Email Address</label>
          <input type="email" onChange={handleEmail} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email " required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" onChange={handlePassword} placeholder="Create Password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mb-5">
          <label htmlFor="confirmPassword"  className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
          <input type="password" onChange={handleConfirmPassword} placeholder="Confirm password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" className="text-white bg-blue-200 hover:bg-blue-300 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:focus:ring-blue-400">Sign Up</button>
      </form>

    </>
  )
}

export default Register