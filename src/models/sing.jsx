import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Dance(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/sing.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[ 100, 100, 100]}>
        <group>
          <group>
            <primitive object={nodes.sing_white_Rig_V04_FinSing} />
          </group>
        </group>
      </group>
    </group>
  );
}
