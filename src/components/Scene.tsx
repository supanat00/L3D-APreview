"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import DanceModel from "../models/dance";
import SingModel from "../models/sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="rounded-xl">
      <Canvas className="w-full">
        <Environment preset="city" />
        <DanceModel />
        <SingModel />
      </Canvas>
    </div>

  );
}
