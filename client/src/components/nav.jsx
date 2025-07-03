import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (

    <>
    <div className='flex justify-between items-center cursor-pointer h-12 shadow-md pr-5 pl-5'>
        <div className='flex'>
        <p className='text-lg font-bold'>Tech Gadget</p>
    </div>

    <div className='flex gap-4'> 
         <Link to='/' className='cursor-pointer'>Home</Link>
         <Link to='/login' className='cursor-pointer'>Shop</Link>
         <Link to='#' className='cursor-pointer'>Support</Link>
         <Link to='/register' className='cursor-pointer '>SignUp</Link>
    </div>
    </div>
    
    </>
  )
}

export default Nav