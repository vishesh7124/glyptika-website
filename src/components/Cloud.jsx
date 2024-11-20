/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 cloud.gltf 
Author: asimchitrakar (https://sketchfab.com/asimchitrakar)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-5237b676f309443c95157c5d9ab516d8
Title: CLOUD
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { DissolveMaterial } from './DissolveMaterial';
import earthTexture from '../assets/images/earth_texture.jpeg';



export function Cloud(props) {
  const cloudMaterial = new THREE.MeshStandardMaterial({color:'white'})
  const { nodes, materials } = useGLTF('/models/cloud.gltf')
  console.log(materials)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={cloudMaterial} rotation={[-Math.PI / 2, 0, 0]}>
        <DissolveMaterial
            baseMaterial={cloudMaterial}
            visible={props.dissolveVisible}
            onFadeOut={props.onFadeOut}
          />
      </mesh>
    </group>
  )
}

useGLTF.preload('/cloud.gltf')