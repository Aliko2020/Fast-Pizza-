import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      pizzaId: 1,
      name: "Margherita",
      quantity: 1,
      unitPrice: 12,
      totalPrice: 12
    }
  ],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.pizzaId === action.payload.pizzaId);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.pizzaId === action.payload.pizzaId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
      } else {
        return state.filter(item => item.pizzaId !== action.payload.pizzaId);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.pizzaId !== action.payload);
    },
    clearCart: () => {
      return [];
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
