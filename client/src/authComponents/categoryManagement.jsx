import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function CategoryManagement() {
  const [category, setCategory] = useState([])
  const [updatedCategoryName, setUpdatedCategoryName] = useState("")
  const [updatedCategoryDescription, setUpdatedCategoryDescription] = useState("")

  const [show, setShow] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  // const [selectedCategory, setSelectedCategory] = useState({
  //   categoryName: '',
  //   categoryDescription: ''
  // });

  useEffect(() => {
    axios.get('http://localhost:5000/showCategory')
      .then((response) => {
        setCategory(response.data)
      })
  }, [category])

  const handleDelete = async (e) => {
    const categoryName = e.target.value
    try {
      // alert(categoryName)
      const response = await axios.post("http://localhost:5000/deleteCategory", { categoryName })

      if (response.status == 200) {
        return toast.success("Category deleted successfully")
      }
    } catch (error) {
      if (error.response.status === 500) {
        return toast.error("Internal server error")
      }
      else {
        return toast.error("Something went wrong")
      }
    }
  }

  const handleUpdate = (e) => {
    // console.log(e.categoryName, e.categoryDescription)
    setSelectedCategory(e)
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleUpdatedCategoryName = (e) => {
    // setUpdatedCategoryName(e.target.value)
    setSelectedCategory(prev => ({
      ...prev,
      categoryName: e.target.value
    }));

  }

  const handleUpdatedCategoryDescription = () => {

  }
  return (
    <>
      <Sidebar>
        {show && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative bg-white w-96 rounded-2xl shadow-2xl p-6 flex flex-col items-center animate-fade-in">

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>

              <h1 className="font-bold text-2xl text-center mb-6">Update Category</h1>

              <form className="w-full space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category Name
                  </label>
                  <input
                    type="text"
                    required
                    // value={selectedCategory.categoryName}
                    value={selectedCategory?.categoryName || ""}
                    onChange={handleUpdatedCategoryName}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedCategory.categoryDescription}
                    onChange={handleUpdatedCategoryDescription}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="p-4">
          <div className='flex justify-between'>
            <h1 className="text-xl font-bold mb-4">Category Management</h1>
            <Link to="/addCategory" className='border rounded-3xl mb-1 bg-gray-300 p-2 hover:bg-gray-400'>Add Category</Link>
          </div>
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Category Name</th>
                <th className="p-2 border">Category Description</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.map((cat) => (
                <tr key={cat._id} className="border">
                  <td className="p-2 border">{cat.categoryName}</td>
                  <td className="p-2 border">{cat.categoryDescription}</td>
                  <td className="p-2 border">
                    <button className="text-blue-600 hover:underline" onClick={() => handleUpdate(cat)}>Edit</button> |{" "}
                    <button className="text-red-600 hover:underline" value={cat.categoryName} onClick={handleDelete} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Sidebar>
    </>
  );

}

export default CategoryManagement