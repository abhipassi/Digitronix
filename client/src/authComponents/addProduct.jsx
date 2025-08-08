import React from 'react'
import Sidebar from './sidebar'
import { useState } from 'react'
function AddProducts() {

  const [productDetails, setProdductDetails] = useState({
    
  })

  return (
    <>
      <Sidebar>
        <h1 className='font-bold text-2xl text-center'>Add Product</h1>
        <br />

        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" required className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input type="number" required className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select required className="w-full border border-gray-300 rounded-md p-2 mt-1">
              <option value="">Select Category</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
            <input
              type="file"
              className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-5 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
            />
            <input
              type="file"
              className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-5 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
            />
            <input
              type="file"
              className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-5 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
        
      </Sidebar>
    </>
  )
}

export default AddProducts