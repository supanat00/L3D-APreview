import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useRef } from "react";

export default function Sing(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/singmodel/sing.gltf"
  );

  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={(150, 150, 150)}>
        <primitive object={nodes.sing_white_Rig_V04_FinSing} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/singmodel/sing.gltf");
