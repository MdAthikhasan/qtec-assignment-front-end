# Qtec Assignment - Frontend

This is the frontend for the Qtec Mini E-Commerce SPA built with React, TypeScript, and Tailwind CSS.

## Features

- Product listing with images, price, and details
- Product detail page
- Add to cart, cart sidebar with quantity controls
- Cart item count badge in navbar
- Checkout modal with form
- Cart persistence (localStorage)
- Responsive, modern UI

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set API URL

Create a `.env` file in the `frontend` directory:

```
VITE_APIURL=https://qtec-assgnment-backend.onrender.com
```

### 3. Run the app

```bash
npm run dev
```

## Deployment

You can deploy this app to Netlify, Vercel, or any static hosting. Make sure to set the `VITE_APIURL` environment variable to your backend URL.

## Project Structure

- `src/pages` - Home and ProductDetail pages
- `src/components` - Navbar, CartSidebar, CheckoutModal
- `src/context` - Cart context and hook

## Author

- Md Athik Hasan
