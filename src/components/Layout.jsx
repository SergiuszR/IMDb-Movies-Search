import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
