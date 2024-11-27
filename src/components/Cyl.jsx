import React, { useRef, useEffect } from 'react';
import * as THREE from "three";
import { useTexture } from '@react-three/drei';
import { invalidate, useFrame } from '@react-three/fiber';
import texture from '../assets/images/portfolio_2.png';

const Cyl = () => {
    const cyl = useRef(null);
    const tex = useTexture(texture);
    
    useEffect(() => {
        tex.needsUpdate = true;
        tex.minFilter = THREE.LinearMipMapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16;
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.generateMipmaps = true;
        tex.encoding = THREE.sRGBEncoding;
    }, [tex]);

    useFrame((state, delta) => {
        cyl.current.rotation.y += delta *0.4;
        invalidate();
    });

    return (
        <mesh ref={cyl} rotation={[0, 0, 0]}>
            <cylinderGeometry 
                args={[1, 1, 1, 64, 64, true]}
            />
            <meshStandardMaterial  // Switched back to standard material for simpler light interaction
                map={tex}
                transparent
                side={THREE.DoubleSide}
                flatShading={false}
                roughness={0.1}  // Reduced roughness for clearer texture
                metalness={0}    // Removed metalness for cleaner look
                envMapIntensity={1}
            />
        </mesh>
    );
};

export default Cyl;