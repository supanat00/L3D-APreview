"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import DanceModel from "./Models/Dance";
import SingModel from "./Models/Sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="w-full flex rounded-xl mt-2 px-8">
      {/* Sing */}
      <Canvas style={{ height: "40vh" }}>
        <Environment preset="city" />
        <Suspense fallback={null}>
          <DanceModel />
          <SingModel />
        </Suspense>
      </Canvas>
    </div>

  );
}
