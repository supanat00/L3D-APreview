"use client"
import dynamic from "next/dynamic";
import Image from 'next/image'

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: true,
});

const Video = dynamic(() => import("../components/Video"), {
  ssr: true,
});

const Trainers = dynamic(() => import("../components/Trainers"), {
  ssr: true,
});

const OurPlaces = dynamic(() => import("../components/OurPlaces"), {
  ssr: true,
});

const PowerfulPartners = dynamic(() => import("../components/PowerfulPartners"), {
  ssr: true,
});

const TopScroll = dynamic(() => import('../components/TopScroll'), {
  ssr: true,
});



export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* PART BLKGEM VIDEO SHOW*/}
      <div className="flex flex-col items-center">
        {/* BLKGEM LOGO*/}
        <Image
          className="w-32 mt-20                     
                     lg:w-60 lg:mt-36
                     xl:w-60 xl:mt-32
                     "
          src="/logos/blkgem.svg"
          alt={"BLKGEM LOGO"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
        {/* TITLE */}
        <p className="text-primary text-center font-Montserrat leading-none font-black mt-16 px-8 md:px-20 lg:px-40 text-3xl md:text-5xl lg:text-6xl"
        >THE ART OF
          ENTERTAINMENT
          ACADEMY
        </p>

        {/* Video Show */}
        <Video />

        {/* Icon BLKGEM / GMMMUSIC / HARIEM SHAKE */}
        <div className="flex mt-20 justify-between px-12">
          {/* GMM LOGO */}
          <div className="flex px-4">
            <Image
              className="w-full md:w-40 lg:w-64 xl:w-80 2xl:w-96 "
              src="/logos/gmm.svg"
              alt={"GMM LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>

          {/* BLKGEM LOGO */}
          <div className="flex px-4">
            <Image
              className="w-full md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
              src="/logos/blkgem.svg"
              alt={"BLKGEM LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>

          {/* HARIEM LOGO */}
          <div className="flex px-4">
            <Image
              className="w-full md:w-40 lg:w-64 xl:w-80 2xl:w-96 "
              src="/logos/hariem.svg"
              alt={"BLKGEM LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
        </div>
      </div>

      {/* PART BLKGEM ICONIC */}
      <div className="flex flex-col items-center">
        {/* BLKGEM ICONIC */}
        <div className="flex flex-col justify-center items-center w-full mt-28">
          <p className="text-white text-center font-Montserrat font-bold text-md md:text-2xl lg:text-3xl">BLKGEM ICONIC</p>
          <Scene />

          {/* <Image
            className="w-2/3"
            src="/logos/model.png"
            alt={"Model"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          /> */}
          <div className="flex items-center justify-center mt-6">
            {/* bb logo */}
            <Image
              className="w-28 mx-6 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
              src="/logos/bb.svg"
              alt={"BB LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <Image
              className="w-28 mx-6 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
              src="/logos/gg.svg"
              alt={"GG LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
        </div>
      </div>

      {/* PART OUR PROJECT */}
      <div className="flex flex-col mt-12 items-center">
        {/* OUR PROJECT */}
        <p className="text-white text-center font-Montserrat font-bold text-sm md:text-2xl lg:text-3xl">OUR PROJECT</p>

        {/* AWESOME LOGO */}
        <Image
          className="w-56 mt-16 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
          src="/logos/awesome.svg"
          alt={"AWESOME LOGO"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />

        <p className="mt-12 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">AUTHENTIC ARTIST EXPERIENCE</p>

        {/* Project Highlight */}
        <div className="w-full flex flex-col mt-8 px-3 items-center">
          <div className="w-full border border-gray-500 px-8 py-4">
            <p className="text-gray-400 font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
            <p className="text-white  font-Montserrat text-xs mt-3">• MV.FULL PRODUCTION 100 SQ.M VIRTUAL PRODUCTION LED VOLUME</p>
            <p className="text-white  font-Montserrat text-xs ">• INDIVIDUAL PICTURE & VDO PROFILE</p>
            <p className="text-white  font-Montserrat text-xs ">• PROFESSIONAL TRAINING TEAM</p>
            <p className="text-white  font-Montserrat text-xs ">• EXCLUSIVE MUSIC TRACK</p>
            <p className="text-white  font-Montserrat text-xs mb-3">• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
          </div>

          {/* SEE MORE BUTTON */}
          <a
            rel="noopener"
            href="https://www.google.com/?gws_rd=ssl"
            target="_blank">
            <button
              type="button"
              className="mt-6 py-0.5 text-gray-900 font-Montserrat font-medium bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-xxs px-8   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >SEE MORE</button>
          </a>

          {/* DOT DOT DOT */}

        </div>

        {/* Detail */}
        <div className="w-full flex flex-col mt-10 px-2 ">
          {/* Vocal */}
          <div className="flex border-b border-white justify-between pb-4 pl-2">
            <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">VOCAL</p>
            <Image
              className="w-6"
              src="/logos/arrow.svg"
              alt={"ARROW"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
          {/* Dance */}
          <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
            <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">DANCE</p>
            <Image
              className="w-6"
              src="/logos/arrow.svg"
              alt={"ARROW"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
          {/* Rap */}
          <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
            <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">RAP</p>
            <Image
              className="w-6"
              src="/logos/arrow.svg"
              alt={"ARROW"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
          {/* Performance */}
          <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
            <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">PERFORMANCE</p>
            <Image
              className="w-6"
              src="/logos/arrow.svg"
              alt={"ARROW"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
        </div>
      </div>

      {/* PART OUR PROFESSIONAL TRAINERS */}
      <div className="flex flex-col mt-12 items-center">
        <p className="text-gray-400 text-center font-Montserrat font-medium text-sm md:text-2xl lg:text-3xl">OUR PROFESSIONAL TRAINERS</p>
        {/* PROFESIONAL TRAINERS PICTURE */}
        {/* <div className="w-full flex mt-12 items-center justify-center overflow-hidden">
          <Image
            className="w-3/5 mx-3"
            src="/logos/longhair.png"
            alt={"longhair"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-3/5 mx-3"
            src="/logos/redhead.png"
            alt={"redhead"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-3/5 mx-3"
            src="/logos/blacksuit.png"
            alt={"blacksuit"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
        </div> */}

        <Trainers />

        <Image
          className="w-full mt-10"
          src="/logos/blackgem.svg"
          alt={"BLACKGEM"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
        <div className="w-full px-8">
          {/* VISION */}
          <div className="flex flex-col mt-16 w-full">
            <p className="text-gray-600 font-Montserrat text-left text-sm md:text-2xl lg:text-3xl">VISION</p>
            <p className="text-white mt-4 font-Montserrat font-bold text-left text-md md:text-2xl lg:text-3xl ">
              ❝<br />ACADEMY OF ARTISTIC<br />INSPIRATION IN ASIA<br />❞
            </p>
          </div>
          {/* MISSION */}
          <div className="flex flex-col mt-12 w-full">
            <p className="text-gray-600 text-right text-sm font-Montserrat md:text-2xl lg:text-3xl">MISSION</p>
            <p className="text-white mt-4 text-right font-Montserrat font-bold text-md md:text-2xl lg:text-3xl">
              ❝<br />ENHANCE<br />ENTERTAINMENT<br />INDUSTRY TALENT<br />❞
            </p>
          </div>
        </div>
      </div>

      {/* PART OUR PLACE */}
      <OurPlaces />

      {/* PART ARTIST RECRUIT */}
      <div className="flex w-full flex-col mt-24 px-4">
        <p className="text-white text-center text-3xl font-Montserrat font-bold leading-none">
          ARTIST RECRUIT <br />
          & DEVELOPMENT</p>
        {/* 80 */}
        <div className="flex w-full border-b border-gray-400 items-center px-16 mt-2 py-2">
          <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
            80</p>
          <p className="text-white text-left text-md font-Montserrat font-bold">
            AUDITIONS</p>
        </div>
        {/* 68 */}
        <div className="flex w-full border-b border-gray-400 items-center px-16 py-2">
          <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
            68</p>
          <p className="text-white text-left text-md font-Montserrat font-bold">
            BANGKOK</p>
        </div>
        {/* 12 */}
        <div className="flex w-full border-b border-gray-400 items-center px-16 py-2">
          <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
            12</p>
          <p className="text-white text-left text-md font-Montserrat font-bold">
            NATIONWIDE</p>
        </div>
        {/* 200 */}
        <div className="flex w-full  items-center px-16 py-2">
          <p className="text-white text-left text-3xl font-Montserrat font-bold mr-12">
            200</p>
          <p className="text-white text-left text-md font-Montserrat font-bold">
            TRAINEES/YEAR</p>
        </div>
      </div>

      {/* PART POWERFUL PARTNERS */}
      <PowerfulPartners />

      {/* ENDDING */}
      <div className="flex w-full flex-col mt-8 items-center">

        {/* OFFICIAL */}
        {/* VISIT OUR IMAGE */}

        {/* STICKER LINE DOWNLOAD */}
        <div className="w-full px-4 mt-8">
          <div className="relative bg-white w-full p-2 rounded-xl">
            <Image
              className="absolute w-6 top-2 right-2"
              src="/logos/line2.svg"
              alt={"LINE2"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <p className="text-center text-lg md:text-2xl lg:text-3xl font-Montserrat">FREE</p>
            <div className="flex justify-center mt-8">
              <Image
                className="w-24 mx-2"
                src="/logos/sticker1.svg"
                alt={"sticker1"}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
              />
              <Image
                className="w-24 mx-2"
                src="/logos/sticker3.svg"
                alt={"sticker3"}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
              />
              <Image
                className="w-20 mx-2"
                src="/logos/sticker2.svg"
                alt={"sticker2"}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
              />
            </div>
            <p className="text-center mt-8 mb-1 text-lg md:text-2xl lg:text-3xl font-Montserrat">DOWNLOAD STICKER LINE</p>
          </div>
        </div>

        {/* APPLICATION DOWNLOAD */}
        <div className="w-full px-4 mt-8">
          <div className="bg-white flex flex-col w-full p-2 rounded-xl justify-center items-center">
            <Image
              className="w-40 mt-8"
              src="/logos/blkgem2.svg"
              alt={"blkgem2"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <p className="text-center mt-8 mb-1 text-lg md:text-2xl lg:text-3xl font-Montserrat">DOWNLOAD APPLICATION</p>
          </div>
        </div>



        {/* SOCIAL */}
        <p className="text-white mt-8 text-center text-md md:text-2xl lg:text-3xl font-Montserrat">BLKGEM.OFFICIAL</p>
        <div className="w-full flex justify-center mt-4 px-8">
          <Image
            className="w-4 mx-4"
            src="/logos/facebook.svg"
            alt={"FACEBOOK"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/x.svg"
            alt={"X"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/ig.svg"
            alt={"IG"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/youtube.svg"
            alt={"YOUTUBE"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/line.svg"
            alt={"LINE"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />

        </div>
        {/* Texts */}
        <p className="text-white mt-16 text-center font-bold text-sm md:text-2xl lg:text-3xl font-Montserrat">THE ART OF ENTERTAINMENT ACADEMY</p>
        <Image
          className="w-full mt-10"
          src="/logos/blackgem.svg"
          alt={"BLACKGEM"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
      </div>

      {/* TOP BUTTON */}
      <TopScroll />
    </div>

  );
}
