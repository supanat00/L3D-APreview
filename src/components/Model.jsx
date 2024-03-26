import { useGLTF } from '@react-three/drei'
import React from 'react';

export default function Model() {
    const  { nodes } = useGLTF("/models/sing.gltf");
    return (
        <group>
            <mesh {...nodes.}>
                
            </mesh>
        </group>
    )
}