import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RxCross2 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import menu_close from "../../assets/menu_close.svg";

const Navbar = ({ setselectedtab }) => {
  const menuref = useRef();

  const open = () => {
    console.log(menuref.current.style.right);
    menuref.current.style.right = "0";
  };
  const close = () => {
    menuref.current.style.right = "-350px";
  };

  const handleTabClick = (tab) => {
    setselectedtab(tab);
    close();
  };

  return (
    <div className="navbar">
      <h1>Hey!!</h1>
      <CiMenuKebab className="nav-mob-open" onClick={open} />
      <ul ref={menuref} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          className="nav-mob-close"
          onClick={close}
        />
        {/* <RxCross2 className="nav-mob-close" onClick={close} /> */}
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p onClick={() => handleTabClick("Home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleTabClick("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p onClick={() => handleTabClick("skills")}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => handleTabClick("Projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleTabClick("connect me")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
