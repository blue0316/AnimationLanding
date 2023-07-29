import React from "react";
import Font from "react-font";

const CustomFont = ({ children, ...props }) => {
  return <Font {...props}>{children}</Font>;
};

export default CustomFont;
