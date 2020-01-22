import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearCart } from "../../redux/cart/cart.actions";
import StripeCheckoutButton from "../../components/stripe-button/stripeButton.js";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkoutItem";
import Button from "../../components/buttons/buttons";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, total, clearCart }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length !== 0 ? (
        cartItems.map(cartItem => {
          return <CheckoutItem key={cartItem.name} cartItem={cartItem} />;
        })
      ) : (
        <div className="message">There are no items in your cart....</div>
      )}

      {cartItems.length > 0 && (
        <Fragment>
          <div className="display-options">
            <div className="clear-button">
              <Button onClick={() => clearCart()}>Clear Cart</Button>
            </div>

            <div className="total">
              <span>TOTAL: ${total}</span>
            </div>
          </div>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 CVV: 123
          </div>
          <StripeCheckoutButton price={total} />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, { clearCart })(Checkout);
