import React from "react";
import {SparklesCore} from "@/components/ui/Sparkles";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
      <>
          <div className="h-[700px] md:h-[900px] xl:h-[800px] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <div className="w-full absolute inset-0 h-screen">
                  <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF"/>
              </div>
              <h1 id="vycetka-header" className="text-2xl md:text-5xl xl:text-7xl font-bold text-center text-white relative z-20">
                  Výčetka
              </h1>
              <div className="z-10 flex flex-col md:flex-row gap-10 pt-12">
                  <Link href="/">
                      <Image className="outline-1 outline-white rounded-lg" width={200} height={200} alt="get it on google play" src="/googleplay.png"></Image>
                  </Link>
                  <Image className="opacity-45 outline-1 outline-white rounded-lg" width={200} height={200} alt="get it on google play" src="/appstore.png"></Image>
              </div>
          </div>
          <div className="border-t border-t-gray-300 flex md:justify-evenly flex-col md:flex-row bg-black z-10 p-4 text-gray-300">
              <p className="md:text-lg py-2 md:py-0">&copy; 2024 Max Juškevič. CC BY 4.0. License</p>
              <Link href="/privacy" className="underline md:text-lg">
                  Ochrana soukromí
              </Link>
          </div>
      </>
  );
}

export default Home;