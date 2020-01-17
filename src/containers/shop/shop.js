import React from "react";
import { Route } from "react-router-dom";
import Category from "../category/category";
import CollectionOverview from "../../components/collections-overview/collectionsOverview";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default Shop;
