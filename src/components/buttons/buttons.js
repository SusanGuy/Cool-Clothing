import React from "react";
import { CustomButtonContainer } from "./buttons.styles";
const buttons = ({ children, ...rest }) => {
  return <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>;
};

export default buttons;
