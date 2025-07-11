import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Qtec Shop
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <button
          className="relative text-gray-700 hover:text-blue-600 font-medium"
          onClick={onCartClick}
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
