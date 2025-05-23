"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Trusted from "@/components/Trusted";
import Process from "@/components/Process";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <div className="relative overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16  pt-0">
        <video ref={videoRef} autoPlay loop muted playsInline  className="video-background">
          <source src="/video/bg_rosegold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          <Header />

          <About />

          <Impact />

          <Trusted />

          <Process />
        </main>

        <Footer />
        <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </div>
    </>
  );
}
