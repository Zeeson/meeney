import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown} from "react-icons/io";
import { Nav, User, Toggle } from "../styles/Style";
import NavLinks from "./NavLinks";
import user from '../../assets/images/profile.png'

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
      <Nav className={navbar ? "isActive" : ""}>
          <div className=" eclipse eclipse_1"></div>
          <div className="eclipse eclipse_2"></div>
          <User className="user">
              <div className="user_img">
                  <img src={user} alt="" />
              </div>
              
              <IoIosArrowDown className='dropdown_icon'/>
              <span className="name">John Doe</span>
              <ul className="dropdown">
                  <li>dropdown</li>
              </ul>
      </User>

      <div className="navlinks">
        

        <NavLinks toggle={toggle} />
        <Toggle onClick={handleClick}>
          {toggle ? <FaTimes /> : <FaBars />}
        </Toggle>
      </div>
    </Nav>
  );
};

export default Navbar;
