"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../models/portal";
import DanceModel from "../models/dance";
import SingModel from "../models/sing";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas>
      <Environment preset="city" />
      <Model />
      <SingModel />
      <DanceModel />
    </Canvas>
  );
}
