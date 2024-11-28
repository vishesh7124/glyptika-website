import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import Cyl from "./Cyl";
import { EffectComposer,Bloom,ToneMapping } from '@react-three/postprocessing'
import { useState } from "react";



const Portfolio = ()=>{
    const [dpr, setDpr] = useState(1)   
    const [visible,setVisible] = useState(true)
    const optimizePerformance = ()=>{
        setVisible(false);
    }
    return(
        <div className="section portfolio" id="portfolio">
            {/* <h1 className="text-head-sub text-uppercase">Portfolio</h1> */}
            <Canvas flat camera={{fov:22}} frameloop="demand" className="cylinder" dpr={1}>
                <PerformanceMonitor flipflops={3} onFallback={optimizePerformance}>


                {/* <OrbitControls/> */}
                <ambientLight intensity={4}/>
                <Cyl/>
{                visible && <EffectComposer>
                    <Bloom
                        // mipmapBlur
                        intensity={1} // The bloom intensity.
                        // blurPass={undefined} // A blur pass.
                        // kernelSize={KernelSize.LARGE} // blur kernel size
                        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
                        // mipmapBlur={false} // Enables or disables mipmap blur.
                        // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
                        // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
                    />
                    <ToneMapping adaptive/>
                </EffectComposer>}
                </PerformanceMonitor>
            </Canvas>
            <div className="portfolio-head ">
                <h1 className="text-uppercase">Portfolio</h1>
            </div>
        </div>
    )
}

export default Portfolio