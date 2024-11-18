import React from "react";
import { useState, useEffect } from "react";
import { Link , useLocation} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Sidebar from "./sidebar";



const Nav = ()=>{
    const [show, setShow] = useState(false);
    const [navMobile, setNavMobile] = useState(true)
    const [NavBlur, setNavBlur] = useState(false)
    const [activeLink, setActiveLink] = useState(null)
    const toggleNavOpen = ()=>{
        setShow(!show)
    }
    const handleSideBarClose = ()=>{
        setShow(!show)
    }
    const toggleBlur = ()=>{
        if(window.scrollY>90){

            setNavBlur(true);
        }else{
            setNavBlur(false);

        }
        
    }
    window.addEventListener('scroll',toggleBlur)
    const handleResize = () => {
        // Set navMobile to true if the window width is less than 510px
        if (window.innerWidth < 510) {
            setNavMobile(true);
        } else {
            setNavMobile(false);
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            const top = section.offsetTop -5 ;
            const height = section.offsetHeight +10;
            if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveLink(section.id);
            }
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const handleLinkClick = () => {
        setTimeout(() => {
            toggleNavOpen();
            
        }, 700);
    }

    useEffect(() => {
        // Set navMobile based on initial window size
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="header text-uppercase">
            <div className={`navbar ${(NavBlur && !navMobile)?"bg-blur": ""}`}>
                <div className="logo">

                </div>
                {(!navMobile)?                       
                    <ul className="nav-items">
                            <li>
                                <HashLink onClick={handleLinkClick} to="/#about" smooth className={activeLink === 'Home' ? 'active-link' : '' }>About Us</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={handleLinkClick} to="/#projects" smooth className={activeLink === 'portfolio' ? 'active-link' : '' }>Projects</HashLink>
                            </li>
                            <li>
                                <HashLink onClick={handleLinkClick} to="/#quotation" smooth className={activeLink === 'portfolio' ? 'active-link' : '' }><button className="nav-btn text-uppercase">Quotations</button></HashLink>
                            </li>
                        </ul> :(show)?
                            <Sidebar activeLink={activeLink} handleLinkClick={handleLinkClick} onClose={handleSideBarClose}/> :""
                            }
                        {
                            (navMobile && !show) &&                         <div className={`burger ${show? "burger-top":""}`} onClick={toggleNavOpen}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Nav