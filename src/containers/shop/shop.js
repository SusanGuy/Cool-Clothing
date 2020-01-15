import React, { Component } from "react";
import collections from "./shop.data";
import PreviewCollections from "../../components/preview-collection/preview-collection";
class Shop extends Component {
  state = {
    collections
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...items }) => {
          return <PreviewCollections id={id} {...items} />;
        })}
      </div>
    );
  }
}

export default Shop;
