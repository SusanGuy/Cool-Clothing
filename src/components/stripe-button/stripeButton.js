import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_80h0huWPQFW7WhyBvI6jgZrN00RzZI4H51";

  const onToken = token => {
    console.log(token);
    alert("Your Payment is Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cool Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeButton;
