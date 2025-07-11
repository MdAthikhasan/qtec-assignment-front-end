import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import type { Product } from "./Home";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p._id === id);
        setProduct(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return <div className="text-center mt-10">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded shadow-md mx-auto md:mx-0"
      />
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>
        <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors mb-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button
          className="text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
