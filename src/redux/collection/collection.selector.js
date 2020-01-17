import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectCollection = state => state.collection;

export const selectCollectionFilter = createSelector(
  [selectCollection],
  collection => {
    return collection.collections;
  }
);

export const selectCategory = collectionUrlParam =>
  createSelector([selectCollection], collection =>
    collection.collections.find(
      item => item.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
