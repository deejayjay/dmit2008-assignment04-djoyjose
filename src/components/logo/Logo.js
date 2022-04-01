import React from "react";

import logo from "../../static/images/toyswonderland-logo.svg";
import { LogoStyles } from "./styles";

function Logo(props) {
  return <LogoStyles src={logo} {...props} alt="ToysWonderLand Logo" />;
}

export default Logo;
