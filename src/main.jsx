import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./assets/global.css";

import RootLayout from "./layouts/RootLayout.jsx";

import { Home, Shop, Cart, ErrorPage, ProductPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "product/:productId", Component: ProductPage },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
