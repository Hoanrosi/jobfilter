import React from "react";
import "./header.scss";
import header from "../image/bg-header-desktop.svg";
function Header() {
  return (
    <div className="header">
      <img src={header} className="header-desktop" />
    </div>
  );
}

export default Header;
