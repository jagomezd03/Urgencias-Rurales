import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import { NavLink } from "react-router-dom";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";

import AppContext from "../context/AppContext";

const Header = () => {


  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/patients">Pacientes</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">Médicos</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">
            medico@example.com
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
