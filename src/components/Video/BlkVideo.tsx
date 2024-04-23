

import { Suspense } from "react"

export default function BlkVideo() {




    return (
        <Suspense>
            <VideoComponent />
        </Suspense>

    );
}

async function VideoComponent({ }) {


    const apiKey = process.env.GOOGLEDRIVE_API_KEY;

    const VideoBlk = `https://www.googleapis.com/drive/v3/files/1YMmKoB83KBgQ8DALtU8Gri3w_UYPDRPo?alt=media&key=${apiKey}&v=.mp4`;

    return (
        <div className="flex w-full">
            <video className="w-full lg:rounded-xl" loop muted autoPlay playsInline>
                <source src={VideoBlk} />
            </video>
        </div>
    )

}