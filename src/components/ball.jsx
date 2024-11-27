import React, { Suspense } from "react";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from "@react-three/drei";
import RingLoader from "react-spinners/RingLoader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

    <ambientLight intensity={0.25}/>
    <directionalLight position={[0,0,0.05]}/>
    <mesh castShadow receiveShadow scale={2.75} >
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
            color="#7966b0"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        <Decal
            position={[0,0,1]}
            map={decal}
            rotation={[2 * Math.PI, 0,6.25]}
            flatShading
        />
    </mesh>
  </Float>;
};

const BallCanvas = ({ icon }) => {
  const [dpr, setDpr] = useState(1)
  return (
    <Canvas dpr={1} frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <PerformanceMonitor flipflops={3} onFallback={() => setDpr(1)}>
      <Suspense
        fallback={
            null
        }
      >
      </Suspense>
        <OrbitControls enableZoom={false} enablePan={false}>
            
        </OrbitControls>
        <Ball imgUrl={icon}></Ball>

      {/* <Preload all /> */}
      </PerformanceMonitor>
    </Canvas>
  );
};

export default BallCanvas;
