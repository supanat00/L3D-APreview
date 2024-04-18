"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export default function Sing(props) {
  const group = useRef();
  const {
    nodes,
    materials,
    animations: typingAnimation,
  } = useGLTF("/models/singmodel/sing.gltf");

  typingAnimation[0].name = "Animation";

  const { actions } = useAnimations(typingAnimation, group);

  useEffect(() => {
    actions["Animation"].reset().play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position-y={-2.5}
        position-x={5}
        position-z={0}
        rotation-y={0.1}
        rotation-x={-0.3}
        rotation-z={0}
        scale={(230, 230, 230)}
      >
        <primitive object={nodes.sing_white_Rig_V04_FinSing} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/singmodel/sing.gltf");
