import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  const user = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQuantityHandler = (item) => {
    dispatch(increaseQuantity({ pizzaId: item.pizzaId }));
  };

  const decreaseQuantityHandler = (item) => {
    dispatch(decreaseQuantity({ pizzaId: item.pizzaId }));
  };

  return (
    <section className="cart-container">
      <div className="cart">
        <h2 style={{marginTop: 8}}>Your cart 🛒, {user}</h2>
        <hr style={{marginTop: 8, color: "gray"}} />
        {cart.length === 0 ? (
          <p style={{ marginTop: 32, marginBottom: 16 }}>Your cart 🛒 is still empty. Start adding some pizzas :)</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.pizzaId}>
              <div className="cart-controls">
                <p style={{marginRight: 16}}>{item.name}</p>
                <div className="cart-controls">
                  <span style={{marginRight: 16}}>₵{item.totalPrice}</span>
                  <div className="cart-controls">
                    <button className="cart-btn" onClick={() => decreaseQuantityHandler(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="cart-btn" onClick={() => increaseQuantityHandler(item)}>+</button>
                    <CiTrash style={{marginLeft: 16}} size={22} color="gray" onClick={() => dispatch(removeFromCart(item.pizzaId))}>Delete</CiTrash>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <hr style={{marginBottom: 8,marginTop: 9, color: "gray"}} />
        {cart.length === 0 ? "" : <button className="button">Order</button>}
      </div>
    </section>
  );
};

export default Cart;
