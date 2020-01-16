import React from "react";
import { connect } from "react-redux";
import Button from "../buttons/buttons";
import CartItem from "../cart-item/cart-item";
import "./cartDropDown.styles.scss";
const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem.name} item={cartItem} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems
  };
};

export default connect(mapStateToProps)(cartDropdown);
