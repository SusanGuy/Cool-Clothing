import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseItem
} from "../../redux/cart/cart.actions";

import "./checkoutItem.styles.scss";
const checkoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => decreaseItem(cartItem)} className="arrow">
          &#10092;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10093;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeItem, addItem, decreaseItem })(
  checkoutItem
);
