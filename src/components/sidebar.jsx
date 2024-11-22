import React from "react";
import { HashLink } from 'react-router-hash-link'
import { IoIosClose } from "react-icons/io";

const Sidebar = (props) => {
  return (
    <>
        <div className="sidebar">
                    <li>
            <HashLink
                onClick={props.handleLinkClick}
                to="/#main"
                smooth
                className={props.activeLink === "Home" ? "active-link" : ""}
            >
                Home
            </HashLink>
            </li>
            <li>
            <HashLink
                onClick={props.handleLinkClick}
                to="/#about"
                smooth
                className={props.activeLink === "Home" ? "active-link" : ""}
            >
                About Us
            </HashLink>
            </li>
            <li>
            <HashLink
                onClick={props.handleLinkClick}
                to="/#projects"
                smooth
                className={props.activeLink === "portfolio" ? "active-link" : ""}
            >
                Projects
            </HashLink>
            </li>
            <li className="last-li-btn">
            <HashLink
                onClick={props.handleLinkClick}
                to="/#quotation"
                smooth
                className={props.activeLink === "portfolio" ? "active-link" : ""}
            >
                <button className="nav-btn text-uppercase">Quotations</button>
            </HashLink>
            </li>
        </div>
        <button onClick={props.onClose} className="sidebar-close-btn"><IoIosClose/></button>
    </>
  );
};

export default Sidebar;
