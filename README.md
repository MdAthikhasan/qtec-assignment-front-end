# Qtec Assignment - Frontend
<<<<<<< HEAD

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

Or use your local backend URL if running locally:

```
VITE_APIURL=http://localhost:5000
```

### 3. Run the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Deployment

You can deploy this app to Netlify, Vercel, or any static hosting. Make sure to set the `VITE_APIURL` environment variable to your backend URL.

## Project Structure

- `src/pages` - Home and ProductDetail pages
- `src/components` - Navbar, CartSidebar, CheckoutModal
- `src/context` - Cart context and hook

## Author

- [Your Name]

---

For backend setup, see the `/backend/README.md`.

# React + TypeScript + Vite
=======
>>>>>>> 74e0e57e5c5c47893947e0dbbd68ec5c4289868a

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

<<<<<<< HEAD
```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
=======
## Getting Started
>>>>>>> 74e0e57e5c5c47893947e0dbbd68ec5c4289868a

### 1. Install dependencies

<<<<<<< HEAD
      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
=======
```bash
npm install
>>>>>>> 74e0e57e5c5c47893947e0dbbd68ec5c4289868a
```

### 2. Set API URL

<<<<<<< HEAD
```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
=======
Create a `.env` file in the `frontend` directory:

>>>>>>> 74e0e57e5c5c47893947e0dbbd68ec5c4289868a
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

- [Md Athik Hassan]





