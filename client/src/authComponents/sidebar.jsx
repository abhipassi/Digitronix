import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
} from 'lucide-react';

function Sidebar() {
  const navigate = useNavigate()
  const [showProducts, setShowProducts] = useState(false);

  const handleDasboard = () =>{
    navigate('/adminDashboard')
  }

  return (
    <div className="h-screen w-60 bg-gray-900 text-white p-4">
      <ul className="space-y-2">
        <li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer">
          <LayoutDashboard size={18} />
          <input type="button" value="Dashboard" onClick={handleDasboard}/>
        </li>

        {/* Products Dropdown */}
        <li>
          <div
            className="flex items-center justify-between hover:bg-gray-800 p-2 rounded cursor-pointer"
            onClick={() => setShowProducts(!showProducts)}
          >
            <div className="flex items-center gap-2">
              <Package size={18} />
              <span>Products</span>
            </div>
            {showProducts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {showProducts && (
            <ul className="pl-8 mt-1 space-y-1 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">All Products</li>
              <li className="hover:text-gray-300 cursor-pointer">Add New</li>
              <li className="hover:text-gray-300 cursor-pointer">Categories</li>
            </ul>
          )}
        </li>

        <li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer">
          <ShoppingCart size={18} />
          <span>Orders</span>
        </li>

        <li className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded cursor-pointer">
          <Settings size={18} />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
