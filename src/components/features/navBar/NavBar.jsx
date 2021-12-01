import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss"

const NavBar = () => {
  return (
    <div className="navbar-continer">
      <div className="navbar-logo-div">
        <h4 className="navbar-logo">
          User-List
        </h4>
      </div>
      <div className="navbar-links-div">
        <Link className="link" to="/user-list">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="Register">
          Sign-in
        </Link>
        <Link className="link" to="Login">
          Login
        </Link>
      </div>
{/* 
      <div className="navbar-links-div-sign-login">
        <Link className="link-sign" to="Register">
          Sign-in
        </Link>
        <Link className="link-login" to="Login">
          Login
        </Link>
      </div> */}
    </div>
  );
};

export default NavBar;
