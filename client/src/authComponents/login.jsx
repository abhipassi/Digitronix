import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }

  const handleCredentialSubmit = async(e) =>{
    e.preventDefault()
    let data = {email, password}

    try {
      let response = await axios.post('http://localhost:5000/login',data)
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <h1 className='flex justify-center mt-15 font-bold text-2xl'>Welcome back</h1>
      </div>
      <br />
      <br /><br />
      <form onSubmit={handleCredentialSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input type="email" onChange={handleEmail} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please Enter your email " required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" onChange={handlePassword} placeholder="Enter your password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" className="text-white bg-blue-200  hover:bg-blue-300 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:focus:ring-blue-400">Login </button>
      </form>

    </>
  )
}

export default Login