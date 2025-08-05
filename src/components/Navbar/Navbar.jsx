import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-6 py-4 bg-[#FFE353]">
      <div className="flex items-center gap-6">
        <Link to={"/"} className="logo font-bold text-2xl text-gray-800">
          Move App
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-gray-600 transition">
            Movies
          </Link>
          <Link to="/tv" className="hover:text-gray-600 transition">
            TV Shows
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <select className="text-gray-600 border-none rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
          <option value="ar">English</option>
          <option value="en">Arabic</option>
        </select>
        <Link to="/wishlist" className="flex items-center gap-2 cursor-pointer">
          <FaHeart
            className="text-2xl text-[#292D32] cursor-pointer"
            title="Wishlist"
          />
          <span className="font-medium text-sm">Wishlist</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
