import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-items.styles.scss";

const menuItem = ({ title, history, imageUrl, size, linkUrl, match }) => {
  let assignedClassName = ["menu-item"];
  if (size) {
    assignedClassName.unshift(size);
  }
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={assignedClassName.join(" ")}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(menuItem);
