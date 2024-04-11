import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Dance(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/dance.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[150, 150, 150]}>
        <group>
          <group>
            <primitive object={nodes.Dance_black_Rig_V03_FinDance_Back} />
          </group>
        </group>
      </group>
    </group>
  );
}
