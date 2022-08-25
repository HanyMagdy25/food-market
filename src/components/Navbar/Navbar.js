import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navTitle } from "../../utils/data";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose ,AiOutlineArrowDown} from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-all-sections">
            <span>
              جميع الأقسام
              <IoIosArrowDown />
            </span>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
