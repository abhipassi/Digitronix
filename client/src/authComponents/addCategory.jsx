import React, { useState } from 'react'
import Sidebar from './sidebar'
import axios from "axios"
import { toast } from 'react-toastify';

function AddCategory() {
  const [categoryName, setCategoryName] = useState()
  const [categoryDescription, setCategoryDescription] = useState()

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value)
  }
  const handleCategoryDescription = (e) => {
    setCategoryDescription(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { categoryName, categoryDescription }

    try {
      const response = await axios.post("http://localhost:5000/createCategory", data)
      if (response.status === 200) {
        return toast.success("Category Created Successfuly")
      }
    } catch (error) {
      if (error.response.status === 400) {
        return toast.error("Category already exist")
      }
      else {
        return toast.error("Something went wrong")
      }
    }
  }

  return (
    <>
      <Sidebar >
        <h1 className='font-bold text-2xl text-center'>Add Category</h1>
        <br />
        <br />
        <br />
        <br /><br />

        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md p-2 mt-1" onChange={handleCategoryName} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md p-2 mt-1" onChange={handleCategoryDescription} />
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

export default AddCategory