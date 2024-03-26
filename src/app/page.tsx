import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-stretch">
      {/* Logo */}
      <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl before:dark:from-transparent before:lg:h-[360px] z-[-1] p-20">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/tkobro_logo.svg"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />

      </div>
      {/* Model Show */}
      <Scene />
      <div className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  );
}
