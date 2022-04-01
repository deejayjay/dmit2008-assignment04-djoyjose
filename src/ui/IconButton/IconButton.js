import React from "react";
import { IconButtonStyles } from "./styles";
import { FaIcon } from "./../FaIcon";

function IconButton({ text, bgColor, color, onClick, iconName, iconMargin, iconPosition, ...props }) {
  return (
    <>
      <IconButtonStyles bgColor={bgColor} color={color} onClick={onClick} {...props}>
        {iconPosition === "before" ? <FaIcon className={iconName} color={color} margin={iconMargin} /> : ""}
        {text}
        {iconPosition === "after" ? <FaIcon className={iconName} color={color} margin={iconMargin} /> : ""}
      </IconButtonStyles>
    </>
  );
}

export default IconButton;
