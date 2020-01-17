import React from "react";
import { connect } from "react-redux";
import PreviewCollections from "../preview-collection/preview-collection";
import { selectCollectionFilter } from "../../redux/collection/collection.selector";
import "./collectionOverview.styles.scss";
const collectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...items }) => {
        return <PreviewCollections key={id} {...items} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collections: selectCollectionFilter(state)
  };
};

export default connect(mapStateToProps)(collectionsOverview);
