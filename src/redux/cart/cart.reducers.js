import { cartActions } from "./cart.types";
const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActions.ADD_ITEM:
      const newArray = state.cartItems.find(
        cartItem => cartItem.name === payload.name
      );
      let sahiArray;

      if (newArray) {
        sahiArray = state.cartItems.map(cartItem => {
          if (cartItem.name === payload.name) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1
            };
          } else {
            return cartItem;
          }
        });
      } else {
        sahiArray = [...state.cartItems, { ...payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: sahiArray
      };
    default:
      return state;
  }
};

export default cartReducer;
