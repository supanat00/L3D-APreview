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
      <group scale={(150, 150, 150)}>
        <primitive object={nodes.sing_white_Rig_V04_FinSing} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/singmodel/sing.gltf");
