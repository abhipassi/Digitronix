import React from 'react'

function Register() {
    console.log("hii");
    
  return (
    <>
      <div>
        <h1 className='flex justify-center mt-15 font-bold text-2xl'>Create Your Account</h1>
      </div>
      <br />
      <br /><br />
      <br />
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Full name</label>
          <input type="text" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Full Name " required />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email Address</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email " required />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" placeholder="Create Password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
          <input type="password" placeholder="Confirm password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        {/* <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div> */}

        <button type="submit" class="text-white bg-blue-200  hover:bg-blue-300 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:focus:ring-blue-400">Sign Up</button>
      </form>

    </>
  )
}

export default Register