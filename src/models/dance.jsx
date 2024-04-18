import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useRef } from "react";

export default function Sing(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/dancemodel/dance_idle.gltf"
  );

  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={(150, 150, 150)}>
        <primitive object={nodes.Dance_black_Rig_V03_FinDance_Back} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/dancemodel/dance_idle.gltf");
