// DissolveMaterial.jsx
import { useFrame } from "@react-three/fiber";
import { patchShaders } from "gl-noise";
import { easing } from "maath";
import * as React from "react";
import * as THREE from "three";
import CSM from "three-custom-shader-material";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uThickness;
  uniform vec3 uColor;
  uniform float uProgress;
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }
  
  void main() {
    float noise = random(vUv);
    float progress = uProgress;

    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;
    
    gl_FragColor = vec4(uColor, alpha + border);
  }`;

export function DissolveMaterial({
  baseMaterial,
  thickness = 0.1,
  color = "#eb5a13",
  intensity = 50,
  duration = 1.2,
  visible = true,
  onFadeOut,
}) {
  const uniforms = React.useRef({
    uThickness: { value: thickness },
    uColor: { value: new THREE.Color(color).multiplyScalar(intensity) },
    uProgress: { value: 0 },
  });

  useFrame((_state, delta) => {
    try {
      easing.damp(
        uniforms.current.uProgress,
        "value",
        visible ? 1 : 0,
        duration,
        delta
      );

      if (uniforms.current.uProgress.value < 0.1 && onFadeOut) {
        onFadeOut();
      }
    } catch (error) {
      console.error("Dissolve Material Frame Error:", error);
    }
  });

  return (
    <shaderMaterial
      uniforms={uniforms.current}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      transparent={true}
      depthWrite={false}
    />
  );
}