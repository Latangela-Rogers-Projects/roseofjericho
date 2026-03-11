import { createBrowserRouter, Navigate } from "react-router-dom"
import PublicLayout from "../layouts/PublicLayout"
import DashboardLayout from "../layouts/DashboardLayout"
import ProtectedRoute from "../components/ProtectedRoute"

// Public Pages
import Home from "../pages/public/Home"
import ProductList from "../pages/public/ProductList"
import ProductDetail from "../pages/public/ProductDetail"
import Cart from "../pages/public/Cart"
import Checkout from "../pages/public/Checkout"
import OrderConfirmation from "../pages/public/OrderConfirmation"

// Auth Pages
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Unauthorized from "../pages/auth/Unauthorized"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:slug", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
    ],
  },
 
])
