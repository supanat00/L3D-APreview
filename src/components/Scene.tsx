"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceModel from "../models/dance";
import SingModel from "../models/sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="w-full flex rounded-xl mt-12">
      {/* Sing */}
      <Canvas className="w-full">
        <Environment preset="city" />
        <OrbitControls />
        <Suspense fallback={null}>

          <SingModel />
        </Suspense>
      </Canvas>
      {/* Dance */}
      <Canvas className="w-full">
        <Environment preset="city" />
        <OrbitControls />
        <Suspense fallback={null}>
          <DanceModel />
        </Suspense>
      </Canvas>
    </div>

  );
}
