import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/useCart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const AppContent: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { clearCart } = useCart();

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderSubmit = () => {
    clearCart();
    setTimeout(() => setCheckoutOpen(false), 1500);
  };

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSubmit={handleOrderSubmit}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <CartProvider>
    <Router>
      <AppContent />
    </Router>
  </CartProvider>
);

export default App;
