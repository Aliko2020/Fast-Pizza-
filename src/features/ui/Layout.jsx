import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartOverView from "../cart/CartOverView"
import { useSelector } from "react-redux"


const Layout = ({children}) => {
  const cart = useSelector((state)=> state.cart)
  const navigation = useNavigation()

  const isLoading = navigation.state === "loading";
  
  return (
    <main className="app">
      <Header />
      <div className="content">
        {isLoading? <div className="loader"><p>Loading your menu🍔...</p></div> : <Outlet />}
      </div>
      {cart.length? <CartOverView /> : ""}
    </main>
  )
}

export default Layout
