"use client"; // Required for Framer Motion and useState

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ArchiveProjectCard from "@/components/ArchiveProjectCard";




export default function ArchivePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
      }
    }, []);
  return (
   <div className="relative">
    <Link href="/" className="absolute top-8 left-8 z-10">
      <Image src="/images/icons/home.svg" alt="Back" width={40} height={40} />
    </Link>
           
            <header  className="header-height-project flex p-8 md:pt-14 md:pb-14 lg:pt-30 lg:pb-30 relative overflow-hidden flex font-medium"  >
                 <video ref={videoRef} autoPlay loop muted playsInline  className="video-background">
          <source src="/video/bg_rosegold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        
              <div id="container" className="container mx-auto max-w-[950px] bg-transparent p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
                  <div className="flex-grow text-center md:text-left">
            
                   
                        <p className="text-2xl mb-0 text-mid text-center leading-14 mt-1" >
                     The Story So Far
                    </p>
                    
                    
                    <p className={`text-5xl mb-3 text-black leading-13 font-normal text-center  'mt-0' : 'mt-5'} `}>
                      Archived work from <span className="text-mid">previous roles</span>, <span className="text-mid">experiments</span>, and everything in between.
                     </p>
                    

                                
                  </div>
                </div>
              </div>
            </header>

       <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center text-lg">
        <div id="projectList" className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <ArchiveProjectCard link="ValuticoWeb" image="01 ValuticoWeb" text="Valutico's journey commenced in 2014 within the confines of a global investment bank's office, where one of our founders was struck by the overly complex nature of valuations." />
            <ArchiveProjectCard link="Adverity Design System" image="03 Adverity Design System" text="Adverity Frog is enabling, guiding and supporting product development to increase productivity and satisfaction while raising the quality and consistency of the platform." />
            <ArchiveProjectCard link="No Code Enrichments" image="07 No Code Enrichments" text="Adverity wants to automise interactions between the product and the user, this will allow Adverity to have a “self-service” offering which will reduce the new users' onboarding time." />

            <ArchiveProjectCard link="Nedbank Product Design" image="06 Nedbank Product Design" text="Our aim is to have a single source of truth where designers and developers can find and use all the resources to create a cohesive product design." />

            <ArchiveProjectCard link="African Bank" image="10 AfricanBank" text="With African Bank redefining its brand and strategic priorities, we translated this evolution into a compelling digital experience, one that would expand perceptions, encourage engagement, and signal a confident new era for the bank." />
            <ArchiveProjectCard link="SAA" image="11 saa" text="South African Airways engaged us to redesign their website following a major brand and strategy overhaul. Our goal was to deliver a digital experience that matched their ambitions, intuitive, elegant, and aligned with the expectations of today’s traveler." />


          </div>
          <div className="flex flex-col gap-8">
            <ArchiveProjectCard link="ValuticoRebrand" image="02 ValuticoRebrand" text="Following a recent rebranding effort aimed at embracing growth in the global market, we recognised the need to redesign our website to better support our expanding presence." />
            <ArchiveProjectCard link="Adverity Billing Wizard" image="04 Adverity Billing Wizard" text="Adverity wants the ability to offer self service customers a way to seamlessly upgrade their plan to meet their data needs or provide the ability purchase more data on a buy as you use basis." />
            <ArchiveProjectCard link="Adverity Portal" image="08 Adverity Portal" text="Enriching your data means transforming and tailoring the data according to your needs. An enrichment is a set of instructions that you specify for the product to transform your data." />

            <ArchiveProjectCard link="Nedbank Design System" image="05 Nedbank Design System" text="Radically Improved Nedbank Business Banking Maintenance. Digital transformation program." />

            <ArchiveProjectCard link="dischem" image="12 dischem" text="With Dis-Chem’s growing digital presence, we focused on building an app experience that placed user needs at the center — from effortless document submission to fast, reliable medication delivery, all wrapped in an interface that felt both modern and familiar." />


           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
