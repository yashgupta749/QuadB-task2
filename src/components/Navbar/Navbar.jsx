import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RxCross2 } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = ({ setselectedtab }) => {
  const menuref = useRef();

  const open = () => {
    console.log(menuref.current.style.right);
    menuref.current.style.right = "0";
  };
  const close = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>Hey!!</h1>
      <CiMenuKebab className="nav-mob-open" onClick={open} />
      <ul ref={menuref} className="nav-menu">
        <RxCross2 className="nav-mob-close" onClick={close} />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setselectedtab("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setselectedtab("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setselectedtab("services")}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setselectedtab("work")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setselectedtab("connect me")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
