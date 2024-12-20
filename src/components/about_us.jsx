import React from "react";
import BallCanvas from "./ball";
import { Canvas } from "@react-three/fiber";
// import { Experience } from "./experience";
import {Bloom, EffectComposer} from '@react-three/postprocessing'
import Blender from "../assets/images/logos/blender.webp"
import Revit from "../assets/images/logos/revit.webp"
import illustrator from "../assets/images/logos/illustrator_logo.webp"
import premiere from "../assets/images/logos/premiere_logo.webp"
import Unreal from "../assets/images/logos/unreal.webp" 
import aEffects from "../assets/images/logos/effects_logo.webp"

const icons = [
    { name: "Blender", logo: Blender },
    { name: "Revit", logo: Revit },
    // { name: "ZBrush", logo: ZBrush },
    { name: "Unreal", logo: Unreal },
    { name: "Adobe Illustrator", logo: illustrator },
    { name: "Adobe Premiere", logo: premiere },
    { name: "After Effects", logo: aEffects },

]

const About = ()=>{
    return(
        <div className="about section " id="about">
                <div className="about-models absolute">
                    {/* <Canvas shadows camera={{position: [3,3,5], fov:20}}>
                        <ambientLight intensity={0.1}/>
                        <Experience />
                        <EffectComposer>
                            <Bloom luminanceThreshold={1} intensity={0.7} mipmapBlur/>
                        </EffectComposer>
                    </Canvas> */}

                </div>
            {/* <div className="paper-3d h-100 w-full">

            </div> */}
            <div className="about-content flex flex-col justify-center items-start">
                <h1 className="about-head">About Us</h1>
                <p className="text-lg">At Glyptika, We are a team of passionate and experienced professionals in
                    the field of 3D modeling, animation, and visual effects.
                    We specialize in creating visually stunning and realistic content through 3D modeling, 3D and 2D animations, and design.

                    </p>    
            </div>
            <div className="softwares flex">

                {icons.map((icon,index)=>(
                    <div key={index} className="software-item max-w-28">
                        <div className="w-28 h-28">
                            <BallCanvas icon={icon.logo}/>
                        </div>
                        <p className="text-2xl text-center w-auto text-wrap">{icon.name}</p>
                    
                    </div>

                ))}
            </div>
        </div>
    )
}

export default About