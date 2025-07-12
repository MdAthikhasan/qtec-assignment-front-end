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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

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
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

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
```
