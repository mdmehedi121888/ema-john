import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  //   console.log(props.product);
  const { img, name, seller, quantity, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img}></img>
      <div className="product-info">
        <h4>{name}</h4>
        <p>price:${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}star</p>
      </div>
      <button
        className="cart-btn"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
