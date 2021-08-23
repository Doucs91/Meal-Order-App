import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (itme) => {},
  removeItem: (id) => {},
});
export default CartContext;
