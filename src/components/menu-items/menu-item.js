import React from "react";
import "./menu-items.styles.scss";

const menuItem = ({ title, imageUrl, size }) => {
  let assignedClassName = ["menu-item"];
  if (size) {
    assignedClassName.unshift(size);
  }
  return (
    <div className={assignedClassName.join(" ")}>
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

export default menuItem;
