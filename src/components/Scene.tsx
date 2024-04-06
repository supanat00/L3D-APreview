"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import DanceModel from "../models/dance";
import SingModel from "../models/sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="mt-10 lg:w-[70%] rounded-xl">
      <Canvas className="w-full">
        <Environment preset="city" />
        <SingModel />
        <DanceModel />
      </Canvas>
    </div>

  );
}
