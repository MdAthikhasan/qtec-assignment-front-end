import React, { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; address: string }) => void;
}

const CheckoutModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Order Placed!</h2>
            <p className="mb-4">Thank you for your purchase.</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2">Checkout</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border rounded px-3 py-2"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded px-3 py-2"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              className="border rounded px-3 py-2"
              value={form.address}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
