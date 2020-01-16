import React from "react";
import CustomButton from "../buttons/buttons";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";
const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(collectionItem);
