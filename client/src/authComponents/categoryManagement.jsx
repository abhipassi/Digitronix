import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function CategoryManagement() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/showCategory')
      .then((response) => {
        setCategory(response.data)
      })
  }, [category])

    const handleDelete = async(e) => {
      const categoryName = e.target.value
      try {
        // alert(categoryName)
        const response =  await axios.post("http://localhost:5000/deleteCategory", {categoryName})

        if(response.status == 200){
          return toast.success("Categroy deleted successfully")
        }
      } catch (error) {
        if(error.response.status === 500){
          return toast.error("Internal server error")
        }
        else{
          return toast.error("Something went wrong")
        }
      }

    }
  return (
    <>
      <Sidebar>
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
                    <button className="text-blue-600 hover:underline">Edit</button> |{" "}
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