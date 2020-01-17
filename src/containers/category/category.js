import React from "react";
import CollectionItem from "../../components/collection-item/collectionItem";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/collection/collection.selector";
import "./category.styles.scss";
const category = ({ collections }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collections.title}</h2>
      <div className="items">
        {collections.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collections: selectCategory(ownProps.match.params.categoryId)(state)
  };
};

export default connect(mapStateToProps)(category);
