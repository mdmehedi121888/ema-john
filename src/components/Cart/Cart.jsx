import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0,
    totalShipping = 0,
    quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + tax + totalShipping;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items:{quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
