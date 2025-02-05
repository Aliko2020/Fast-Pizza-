import { Outlet } from "react-router-dom"
import Header from "./Header"
import CartOverView from "../cart/CartOverView"


const Layout = ({children}) => {
  const cart = "55"
  return (
    <main className="app">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      {cart? <CartOverView /> : ""}
    </main>
  )
}

export default Layout
