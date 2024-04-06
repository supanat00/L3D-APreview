"use client";
import { useEffect, useRef, useState } from "react";

export default function Video() {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>();
    const [videoProgress, setVideoProgress] = useState<number>(0);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setVideoDuration(video.duration);
        }
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const currentTime = videoRef.current?.currentTime;
        if (videoDuration != null && currentTime != null) {
            let loadingTimeout = setTimeout(() => {
                if (videoProgress == currentTime / videoDuration) {
                    setVideoProgress((prev) => prev + 0.000001);
                } else {
                    setVideoProgress(currentTime / videoDuration);
                }
            }, 10);

            return () => {
                clearTimeout(loadingTimeout);
            };
        }
    }, [videoProgress, videoDuration, isPaused]);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            setIsPaused(!video.paused);
            video.paused ? video.play() : video.pause();
        }
    }
    return (
        <div className="mt-20 w-full lg:rounded-xl lg:w-[70%]">
            <p className="text-white text-center">{videoProgress}</p>
            <video className="w-full lg:rounded-xl lg:w-[70%]" ref={videoRef} loop muted autoPlay>
                <source src="/video/G-Junior.mp4" />
            </video>
        </div>


    );
}
