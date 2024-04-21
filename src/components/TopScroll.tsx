'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TopScroll() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 700) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {showScroll && (
                <div className="fixed w-9 bottom-32 right-3.5 opacity-80 z-50" onClick={scrollToTop}>
                    <Image
                        className="w-full"
                        src="/logos/top.svg"
                        alt={"TOP"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
            )}
        </div>
    );
}
