import { cartActions } from "./cart.types";
export const toggleCart = () => {
  return {
    type: cartActions.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: cartActions.ADD_ITEM,
    payload: item
  };
};
