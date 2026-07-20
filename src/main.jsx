import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./assets/global.css";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
