"use client";
import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerMute from "./VideoPlayerMute";

export default function Video() {
    const [muted, setMuted] = useState(true); // [muted, setmuted]
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

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setMuted(video.muted);
        }
    }
    return (
        <div className="relative mt-20 w-full lg:rounded-xl lg:w-[70%]">
            {/* <div className="absolute top-2 right-12 z-10">
                <VideoPlayerControls
                    progress={videoProgress}
                    isPaused={isPaused}
                    onPlayerPause={togglePlayPause}
                />
            </div> */}
            <div className="absolute top-2 right-2 z-10">
                <VideoPlayerMute
                    muted={muted}
                    onPlayerMuted={toggleMute}
                />
            </div>
            <video className="w-full lg:rounded-xl" ref={videoRef} loop muted autoPlay playsInline>
                <source src="/video/G-Junior2.mp4" />
            </video>
        </div>


    );
}
