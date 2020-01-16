import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./cartIcon.styles.scss";
const cartIcon = ({ toggleCart, count }) => {
  return (
    <div onClick={toggleCart} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    count: cartItems.length
  };
};

export default connect(mapStateToProps, { toggleCart })(cartIcon);
