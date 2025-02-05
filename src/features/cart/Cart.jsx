import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { useState } from "react";

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
        <h2>Your cart, {user}</h2>
        {cart.length === 0 ? (
          <p style={{ marginTop: 16, marginBottom: 16 }}>Your cart is still empty. Start adding some pizzas :)</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.pizzaId}>
              <div className="cart-controls">
                <p>2× {item.name}</p>
                <div className="cart-controls">
                  <span>₵{item.totalPrice}</span>
                  <div className="cart-controls">
                    <button className="cart-btn" onClick={() => decreaseQuantityHandler(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="cart-btn" onClick={() => increaseQuantityHandler(item)}>+</button>
                    <button className="button" onClick={() => dispatch(removeFromCart(item.pizzaId))}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {cart.length === 0 ? "" : <button className="button">Place Order</button>}
        {cart.length === 0 ? "" : <button className="btn-clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>}
      </div>
    </section>
  );
};

export default Cart;
