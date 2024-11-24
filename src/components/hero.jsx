import React, { useEffect, useRef } from "react";
import { useState } from "react";
import bgCloudFront from '../assets/images/White_clouds.png'
import bgPlanes from '../assets/images/Plane_2.png'
import plane from '../assets/images/paper.png'
import bgCloudBack from '../assets/images/Brown2.png'
import bgModels from '../assets/images/bg-models.png'


const Hero = ()=>{

    const [scrollPosition, setScrollPosition] = useState(0);
    const parallaxElements = useRef([]);
    const maxScrollOffset = 500;

    useEffect(() => {
        const handleScroll = () => {
            // Update scroll position
            const normalizedScroll = Math.min(window.scrollY / window.innerHeight, 1) * maxScrollOffset;
            setScrollPosition(normalizedScroll);
        };
        
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);
    
    useEffect(() => {
        console.log(scrollPosition)
        // Update the transform style for each parallax element based on scroll position
        parallaxElements.current.forEach((el) => {
            const speedY = el.dataset.speedy; // Get the speed for the y-axis
            el.style.transform = `translatex(calc(-50%)) translateY(calc(-50% - ${scrollPosition * speedY}px))`;
        });
    }, [scrollPosition]); // Run this effect whenever scrollPosition changes

    return(
        <div className="section main" id="main">
            <img src={bgModels} data-speedx="0.2" data-speedy="-0.1" alt="" className="parallax bg-models" ref={el => parallaxElements.current[0] = el} />
            <div className="text-hero parallax" data-speedx="0.5" data-speedy="-0.25" ref={el => parallaxElements.current[1] = el}>
                <h1 className="text-head">Glyptika</h1>
            </div>
            <img src={bgCloudBack} data-speedx="0.3" data-speedy="-0.15" alt="" className="parallax bg-cloud-back" ref={el => parallaxElements.current[2] = el}/>
            <img src={plane} alt="" data-speedx="0.2" data-speedy="0.2" className="parallax plane plane-1" ref={el => parallaxElements.current[3] = el} />
            {/* <img src={plane} alt="" data-speedx="0" data-speedy="0" className="parallax plane plane-2" ref={el => parallaxElements.current[4] = el} /> */}
            <img src={bgPlanes} data-speedx="0.4" data-speedy="0.6" alt="" className="parallax bg-planes" ref={el => parallaxElements.current[5] = el} />
            <img src={bgCloudFront} data-speedx="0" data-speedy="0.1" alt="" className="parallax bg-cloud-front" ref={el => parallaxElements.current[6] = el} />
        </div>
    )
}

export default Hero