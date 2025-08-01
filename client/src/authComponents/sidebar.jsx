import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
} from 'lucide-react';

function Sidebar({ children }) {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar Menu */}
      <div className="w-60 bg-gray-900 text-white p-4">
        <ul className="space-y-2">
          <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
            <Link to="/adminDashboard" className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
          </li>

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
                <li className="hover:text-gray-300 cursor-pointer pt-2">
                  <Link to="/adminProducts">All Products</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer pt-2">
                  <Link to="/adminManageProducts">Manage Products</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer pt-2">
                  <Link to="/catManagement">Category</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
            <Link to="/adminOrder" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Orders</span>
            </Link>
          </li>

          <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">
            <Link to="/adminSetting" className="flex items-center gap-2">
              <Settings size={18} />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100 text-black">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
