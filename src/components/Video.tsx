"use client";
import React from "react";

export default function Video() {
    return (
        <div className="mt-20 lg:w-[70%] rounded-xl">
            <video className="w-full lg:rounded-xl" loop muted autoPlay>
                <source src="/video/G-Junior.mp4" />
            </video>
        </div>
    );
}
