import React from "react";
import ScrollTest from "../components/scroll";
import Nav from "../components/navbar"
import Hero from "../components/hero";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Projects from "../components/projects";
import Quotation from "../components/quotation";
// import { Canvas } from "@react-three/fiber";

const Landing = (props)=>{
    return(
        <>
            {/* <ScrollTest/> */}
            <Nav/>
            <Hero scrollPositon = {props.scrollPositon}/>
            <About/>
            <Portfolio/>
            <Projects/>
            <Quotation/>
        </>
    )
}

export default Landing