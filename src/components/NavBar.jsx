import { React } from "react";

export default function NavBar({ children }) {
  return (
    <>
      <div className="nav-bar_hzt"></div>
      <div className="main-container">
        <div className="nav-bar_vrt"></div>
        <div className="main">{children}</div>
      </div>
    </>
  );
}
