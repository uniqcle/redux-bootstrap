import React, { Component } from "react";
import Counter from './counter'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Logo
        </a>

        <Counter />
      </div>
    </nav>
  );
};

export default Navbar;
