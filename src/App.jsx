import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./features/ui/Layout";
import Home from "./features/pages/Home";
import Menu from "./features/menu/menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/order:id",
          element: <Order />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
