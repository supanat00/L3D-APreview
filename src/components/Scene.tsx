"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceModel from "../models/Dance";
import SingModel from "../models/Sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="w-full flex rounded-xl mt-12 px-8">
      {/* Sing */}
      <Canvas className="w-full">
        <Environment preset="city" />
        <OrbitControls />
        <Suspense fallback={null}>
          <SingModel />
          <DanceModel />
        </Suspense>
      </Canvas>
    </div>

  );
}
