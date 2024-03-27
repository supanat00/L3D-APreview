import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Portal(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/portal.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" scale={[ 1, 1, 1]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Podest_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Podest_BAKED}
                />
              </group>
              <group name="Armature_3" position={[0, 1.538, 0]}>
                <group name="Bone_2" position={[0, -0.5, 0]}>
                  <group name="Port_1" position={[0, -1.073, 0]}>
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.Port_BAKED}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
