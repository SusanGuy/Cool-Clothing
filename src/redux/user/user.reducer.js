import { userActions } from "./user.actionTypes";
const initialState = {
  currentUser: null,
  loading: true
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
