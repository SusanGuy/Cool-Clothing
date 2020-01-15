import React from "react";
import "./buttons.styles.scss";
const buttons = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default buttons;
