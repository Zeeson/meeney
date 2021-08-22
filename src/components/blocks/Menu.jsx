import React from "react";
import { Link } from "react-router-dom";
import { MenuCont } from "../styles/Style";
import { MenuData } from "./Data";

const Menu = () => {
  return (
    <>
      <MenuCont>
        {MenuData.map((el) => (
          <li>
                <Link to="/" className={el.class}>
                    <span className="icon">{el.icon}</span>
               {el.title}
            </Link>
          </li>
        ))}
      </MenuCont>
    </>
  );
};

export default Menu;
