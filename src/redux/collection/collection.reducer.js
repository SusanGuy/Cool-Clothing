import ShopData from "./shop.data";
const initialState = {
  collections: ShopData
};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
