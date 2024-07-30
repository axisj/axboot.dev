import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import React from "react";

export function Astronaut(props) {
  const { nodes, materials } = useGLTF("/img/astronaut.glb");
  return (
    <group {...props} dispose={null} scale={40} position={[3000, 0, 1000]} rotation={[-1.1, -0.6, 0]}>
      <mesh geometry={nodes.Astronaut["geometry"]} material={materials.Astronaut} />
      <ambientLight intensity={Math.PI} />
      <Environment blur={0.75}>
        {/*<color attach="background" args={['transparent']}/>*/}
        <Lightformer
          intensity={2}
          color='white'
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color='white'
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color='white'
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color='white'
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </group>
  );
}

useGLTF.preload("/img/astronaut.glb");
