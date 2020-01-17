import React from "react";
import { withRouter } from "react-router-dom";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem";
const previewCollection = ({ title, items, match, history }) => {
  return (
    <div className="collection-preview">
      <h1
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
        className="title"
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(previewCollection);
