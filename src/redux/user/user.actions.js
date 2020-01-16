import { userActions } from "./user.actionTypes";
export const setCurrentUser = user => {
  return { type: userActions.SET_CURRENT_USER, payload: user };
};
