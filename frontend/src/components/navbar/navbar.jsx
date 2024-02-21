import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            to="/"
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            to="/women"
          >
            Mens
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            to="/women"
          >
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            to="/kids"
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link
          style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
          to="/login"
        >
          <button>Login </button>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
          to="/cart"
        >
          <img src={cart_icon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
