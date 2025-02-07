import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartOverView = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.length;

  return (
    <footer className="footers">
      <span>{totalItems} {`Pizza${totalItems > 1? "s": ""}`} in cart 🛒</span>
      <Link className="link" to="/cart">Open Cart 🛒</Link>
    </footer>
  );
}

export default CartOverView;
