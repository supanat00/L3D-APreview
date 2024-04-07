import React from 'react';
import Image from 'next/image'

interface VideoPlayerMutedProps {
    muted: boolean;
    onPlayerMuted: () => void;
    size?: number | undefined;
    width?: number | undefined;
}

const VideoPlayerMuted: React.FC<VideoPlayerMutedProps> = ({
    muted,
    onPlayerMuted,
    size = 36,
    width = 3,
}) => {
    const center = size / 2;
    const radius = center - width;

    return <div className='relative flex justtify-center items-center'>
        <div className="">
            <button
                className="group cursor-pointer"
                onClick={onPlayerMuted}
            >
                <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
                    {muted ?
                        <Image
                            className="w-6 md:w-8 lg:w-10 xl:w-10 2xl:w-10"
                            src="/logos/mute.svg"
                            alt={"MUTE"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        /> :

                        <Image
                            className="w-6 md:w-8 lg:w-10 xl:w-10 2xl:w-10"
                            src="/logos/unmute.svg"
                            alt={"UNMUTE"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />}
                </div>
            </button>
        </div>
    </div>;

};

export default VideoPlayerMuted;