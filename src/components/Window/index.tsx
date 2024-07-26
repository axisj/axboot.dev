import React, {useRef} from "react";
import {Environment, Lightformer, OrbitControls, useGLTF, useTexture} from '@react-three/drei'

export function Window(props) {
    const { nodes, materials} = useGLTF('/img/window.glb')

    return (
        <group {...props} dispose={null}
               // position={[0, 0, 0]}
               // rotation={[0, 0, 0]}
        >
            <mesh geometry={nodes.Window.geometry}  material={materials.glass} />
            <Environment blur={0.75} >
                {/*<color attach="background" args={['transparent']}/>*/}
                <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]}
                             scale={[100, 0.1, 1]}/>
                <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]}
                             scale={[100, 0.1, 1]}/>
                <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]}
                             scale={[100, 0.1, 1]}/>
                <Lightformer intensity={10} color="white" position={[-10, 0, 14]}
                             rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]}/>
            </Environment>
        </group>

    )
}


useGLTF.preload('/img/astronaut.glb')
