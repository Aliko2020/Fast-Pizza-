import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartOverView = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price ? item.price : 0);
  }, 0);

  return (
    <footer className="footers">
      <span>{totalItems} Pizza(s): Ghc {totalPrice}</span>
      <Link className="link" to="/cart">Open Cart</Link>
    </footer>
  );
}

export default CartOverView;
