"use client";
import React from "react";
import {SparklesCore} from "@/components/ui/sparkles";

export default function Home() {
  return (
      <>
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-center text-white relative z-20">
            Výčetka
          </h1>
        </div>
      </>
  );
}
