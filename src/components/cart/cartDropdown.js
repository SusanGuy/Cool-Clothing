import React from "react";
import { connect } from "react-redux";
import Button from "../buttons/buttons";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";
import "./cartDropDown.styles.scss";
const cartDropdown = ({ cartItems, history, toggleCart }) => {
  let cartItem;
  if (cartItems.length > 0) {
    cartItem = cartItems.map(cartItem => {
      return <CartItem key={cartItem.name} item={cartItem} />;
    });
  } else {
    cartItem = (
      <span className="empty-message">There is no items in your cart</span>
    );
  }

  const handleCheckout = () => {
    toggleCart();
    history.push("/checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItem}</div>
      <Button onClick={() => handleCheckout()}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default withRouter(
  connect(mapStateToProps, { toggleCart })(cartDropdown)
);
