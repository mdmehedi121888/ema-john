import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0,
    totalShipping = 0;
  for (const product of cart) {
    total += product.price;
    totalShipping += product.shipping;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + tax + totalShipping;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
