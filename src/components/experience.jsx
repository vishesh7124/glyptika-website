import { ContactShadows, Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { DissolveMaterial } from "./DissolveMaterial";
import { EffectComposer } from "@react-three/postprocessing";
// import Model from "./Plane";
import earthTexture from '../assets/images/earth_texture.jpeg';

export const Experience = ()=>{
    let tex = useTexture(earthTexture)
    const boxMaterial = new THREE.MeshStandardMaterial({color:'white'})
    const sphereMaterial = new THREE.MeshStandardMaterial({color:'white',map:tex})
    const items = ["box", "sphere"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItem, setVisibleItem] = useState("box");
    const [mobile, setMobile] = useState(false);
    const [tablet, setTablet] = useState(false);

    const itemDisplayed = items[currentIndex];

    
    const handleResize = () => {
        // Set navMobile to true if the window width is less than 510px
        if (window.innerWidth < 1100) {
            setMobile(true);
        } else {
            setMobile(false);
        }

        // if(window.innerWidth<1100 && window.innerWidth >720){
        //     setTablet(true)
        // }
        // else{
        //     setTablet(false)
        // }
    };

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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Update visible item when itemDisplayed changes
    useEffect(() => {
        setVisibleItem(itemDisplayed);
    }, [itemDisplayed]);
    const onFadeOut = ()=> setVisibleItem(itemDisplayed)
    return(
        <>
        {(visibleItem === "box") && (
            <mesh scale={0.4} position={!mobile?[1.6, 0.7, 0.5]:[0,0,0]} >
                <boxGeometry  />
                <DissolveMaterial
                    baseMaterial={boxMaterial}
                    visible={itemDisplayed === "box"}
                    onFadeOut={onFadeOut}
                    color="#0082b2"
                />
            </mesh>
        )}
        
        {(visibleItem === "sphere") && (
            <mesh scale={0.5} position={!mobile?[1.6, 0.7, 0.5]:[0,0,0]}>
                <sphereGeometry />
                <DissolveMaterial
                    baseMaterial={sphereMaterial}
                    visible={itemDisplayed === "sphere"}
                    onFadeOut={onFadeOut}
                    color="#0082b2"
                />
            </mesh>
        )}
        
        {/* {(visibleItem === "plane") && (
            <Model
                rotation={[1.4, 0.6, -5.7]}
                scale={0.5}
                position={!mobile?[1.8, 0.5, 0.5]:[0,0,0]}
                // position={[0, 0, 0]}
                dissolveVisible={itemDisplayed === "plane"}
                onFadeOut={onFadeOut}
            />
        )} */}
        {/* {(visibleItem === "cloud") && (
            <Cloud
                // rotation={[1.4, 0.6, -5.7]}
                scale={0.003}
                position={[0, 0, 0]}
                dissolveVisible={itemDisplayed === "cloud"}
                onFadeOut={onFadeOut}
            />
        )} */}
        
        <Environment preset="sunset" />
        <ContactShadows position-y={-1} />
    </>
    )
}