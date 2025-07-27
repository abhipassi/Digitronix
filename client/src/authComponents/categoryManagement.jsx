import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'

function CategoryManagement() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/showCategory')
      .then((response) => {
        setCategory(response.data)
      })
  }, [])

    const handleDelete = (e) => {
      
    }
  return (
    <>
      <Sidebar>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Category Management</h1>
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