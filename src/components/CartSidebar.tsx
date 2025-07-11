import React from "react";
import { useCart } from "../context/useCart";

const CartSidebar: React.FC<{
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}> = ({ open, onClose, onCheckout }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            Your cart is empty.
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.product._id} className="flex items-center mb-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-14 h-14 rounded object-cover mr-3"
              />
              <div className="flex-1">
                <div className="font-semibold">{item.product.name}</div>
                <div className="text-gray-500 text-sm">
                  ${item.product.price.toFixed(2)}
                </div>
                <div className="flex items-center mt-1">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    onClick={() =>
                      updateQuantity(
                        item.product._id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="ml-3 text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold mb-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          disabled={cart.length === 0}
          onClick={onCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
