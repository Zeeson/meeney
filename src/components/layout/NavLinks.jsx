import React from "react";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavItem, NavList, Search } from "../styles/Style";
import flag from '../../assets/images/flag.png'
import logo from '../../assets/images/meeny-logo.png'


const NavLinks = ({ toggle }) => {
  return (
    <NavList className={toggle ? "active" : ""}>
      <NavItem>
        <NavLink to="/" className="nav_link">
          <div className="country">
            <img src={flag} alt="" />
          </div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/" className="nav_link">
          <div className="message">
            <div className="counter">20</div>
            <FaEnvelope />
          </div>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/" className="nav_link">
          <div className="notification">
            <div className="counter">50+</div>
            <FaBell />
          </div>
        </NavLink>
      </NavItem>
      <NavItem>
        <Search action="">
          <div className="search_box">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search" />
          </div>
        </Search>
      </NavItem>
      <NavItem>
        <NavLink to="/" className="nav_link">
        <img src={logo} alt="" />
        </NavLink>
      </NavItem>
    </NavList>
  );
};

export default NavLinks;
