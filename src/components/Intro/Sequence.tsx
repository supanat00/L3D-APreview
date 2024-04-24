'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
    const [count, setCount] = useState(0);
    // const [scrolled, setScrolled] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollProgress);

    //     return () => window.removeEventListener('scroll', scrollProgress);
    // }, []);

    useEffect(() => {
        if (count < 400) {
            setTimeout(() => {
                setCount(count + 1);
            }, 30);
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

    // const scrollProgress = () => {
    //     const scrollPx = document.documentElement.scrollTop;
    //     const windowHeightPx =
    //         document.documentElement.scrollHeight -
    //         document.documentElement.clientHeight;

    //     const scrollLength = Math.ceil(((scrollPx / windowHeightPx) * 100) / 1);

    //     setScrolled(scrollLength);
    // };

    const renderCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (!canvas || !context) return;
    };

    return (
        <div className='flex w-full h-full items-center justify-center'>
            <canvas className="img-sequence flex w-full"
                ref={canvasRef} />
            <Image
                src={`/images-sequence/${count.toString().padStart(4, '0000')}.png`}
                width={450}
                height={450}
                className="img-sequence absolute z-50"
                // priority={true}
                quality={1}
                alt="img sequence"
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
        </div>
    );
}
