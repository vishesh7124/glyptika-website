import React from "react";

const Nav = ()=>{
    return(
        <div className="header text-uppercase">
            <div className="navbar">
                <div className="logo">

                </div>
                        <ul className="nav-items">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#"><button className="nav-btn text-uppercase">Quotations</button></a>
                            </li>
                        </ul>
                {/* <div className="nav-tems">
                </div> */}
            </div>
        </div>
    )
}

export default Nav