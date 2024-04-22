"use client"
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
    children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
    return <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.075,

    }}
    >{children}
    </ReactLenis>;
}


export default SmoothScroll