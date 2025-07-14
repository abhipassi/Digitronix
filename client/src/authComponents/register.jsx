import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Register() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  let navigate = useNavigate()

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\\-+=()])(?=\\S+$).{8,20}$");
  let passError = "Password must be 8-20 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.No spaces allowed"

  const handleFullName = (e) => {
    setFullName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = { fullname, email, password }
    console.log(data);
    sessionStorage.setItem("email", email)

    if (password !== confirmPassword) {
      return toast.error("Password does not match!")
    }

    else if (!regex.test(email)) {
      return toast.error("Kindly enter valid email address")
    }
    else if (!passRegex.test(password)) {
      return toast.error(passError)
    }
    else {
      try {
        let response = await axios.post('http://localhost:5000/register', data)
        if (response.status === 200 || response.status === 201) {
          toast.success("OTP sent")
          navigate('/otp')
        }
        // console.log(response);
      } catch (error) {
        if (error.response.status === 400 ){
          return toast.error("This email is already in use")
        }
        else if(error.response.status === 500){
          return toast.error("Internal server error")
        }
        else{
          return toast.error("Something went wrong")
        }
        // console.log(error);
      }
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
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email Address</label>
          <input type="email" onChange={handleEmail} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email " required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" onChange={handlePassword} placeholder="Create Password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
          <input type="password" onChange={handleConfirmPassword} placeholder="Confirm password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" className="text-white bg-blue-200 hover:bg-blue-300 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:focus:ring-blue-400">Sign Up</button>
      </form>
    </>
  )
}

export default Register