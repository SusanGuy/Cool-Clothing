import React from "react";
import MenuItem from "../menu-items/menu-item";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sections: selectDirectorySections(state)
  };
};

export default connect(mapStateToProps)(Directory);
