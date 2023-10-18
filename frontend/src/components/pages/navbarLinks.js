import React from "react";
import "./navbarlinks.css";
import { Link } from "react-router-dom";

const NavbarLinks = (props) => {
  const navbarLinksElements = [
    {
      text: "Home",
      href: "/",
      className: "smoothScroll",
    },
    {
      text: "About Us",
      href: "/about",
      className: "smoothScroll",
    },
    {
      text: "Doctors",
      href: "/team",
      className: "smoothScroll",
    },
    {
      text: "News",
      href: "/news",
      className: "smoothScroll",
    },
    {
      text: "Contact",
      href: "/google-map",
      className: "smoothScroll",
    },
    {
      text: "Make an appointment",
      href: "/appointment",
      className: "appointment-btn smoothScroll",
    },
  ];
  const navbarLinks = navbarLinksElements.map((element, index) => (
    <li key={index} className={element.className}>
      <Link to={element.href}>{element.text}</Link>
    </li>
  ));

  return (
    <ul className="nav navbar-nav navbar-right d-flex flex-row">
      {navbarLinks}
    </ul>
  );
};

export default NavbarLinks;
