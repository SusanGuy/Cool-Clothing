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

export const decreaseItem = item => {
  if (item.quantity === 1) {
    return {
      type: cartActions.REMOVE_ITEM,
      payload: item
    };
  } else {
    return {
      type: cartActions.DECREASE_ITEM,
      payload: item
    };
  }
};

export const removeItem = item => {
  return {
    type: cartActions.REMOVE_ITEM,
    payload: item
  };
};
