import React, { Component } from "react";
import Counter from './counter'
import CustomerNavbar from "./customerNavbar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <CustomerNavbar />

        <Counter />
      </div>
    </nav>
  );
};

export default Navbar;
