'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
    const [count, setCount] = useState(0);
    const [scrolled, setScrolled] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress);

        return () => window.removeEventListener('scroll', scrollProgress);
    }, []);

    useEffect(() => {
        if (count < 90) {
            setTimeout(() => {
                setCount(count + 1);
            }, 50);
        } else {
            setCount(1);
        }
    }, [count]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;
        contextRef.current = context;

        renderCanvas();

        return () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const windowHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollLength = Math.ceil(((scrollPx / windowHeightPx) * 90) / 1);

        setScrolled(scrollLength);
    };

    const renderCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (!canvas || !context) return;

        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;


    };

    return (
        <>
            <div className="relative w-full flex flex-col mt-12 items-center">
                <p className="text-white">test</p>
                <div className="w-full flex flex-col overflow-hidden">
                    <canvas ref={canvasRef} />
                    <Image
                        src={`/images-sequence/${scrolled.toString().padStart(4, '0000')}.png`}
                        layout="fill"
                        className="img-sequence w-full"
                        priority={true}
                        quality={1}
                        alt="img sequence"
                    />
                </div>
            </div>
        </>
    );
}
