import React from "react";
import ScrollTest from "../components/scroll";
import Nav from "../components/navbar"
import Hero from "../components/hero";
import About from "../components/about";
import Portfolio from "../components/portfolio";

const Landing = (props)=>{
    return(
        <>
            {/* <ScrollTest/> */}
            <Nav/>
            <Hero scrollPositon = {props.scrollPositon}/>
            <About/>
            <Portfolio/>
        </>
    )
}

export default Landing