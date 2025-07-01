"use client"; // Required for Framer Motion and its hooks
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ProjectHeaderProps {
  projectHeading: string;
  projectSubHeading?: string;
  projectTags: string[]; // Added projectTags prop
  
}
export default function ProjectHeader({
  projectHeading,
  projectSubHeading,
  projectTags // Destructure projectTags
}: ProjectHeaderProps) {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);




  return (
    <header  className="header-height-project flex p-8 md:pt-14 md:pb-14 lg:pt-30 lg:pb-30 relative overflow-hidden flex font-medium"  >
        <video ref={videoRef} autoPlay loop muted playsInline  className="video-background">
          <source src="/video/bg_rosegold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


      <div id="container" className="container mx-auto max-w-[950px] bg-white/80 rounded-2xl border-light-project  p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          <div className="flex-grow text-center md:text-left">
            <Image src="/images/project/valutico.png" alt="Valutico Logo" width={140} height={19} />

            { projectSubHeading && (
                <p className="text-2xl mb-0 text-mid leading-14 mt-5" >
              {projectSubHeading}
            </p>
            )}
            
            <p className={`text-5xl mb-3 text-black leading-13 font-normal  ${projectSubHeading ? 'mt-0' : 'mt-5'} `} dangerouslySetInnerHTML={{ __html: projectHeading }} />
            
            <div className="flex items-center gap-3 font-medium mt-12 text-lg text-black flex-wrap" > {/* Added flex-wrap for multiple tags */}
              {projectTags.map((tag, index) => (
                <div key={index} id={`tag-${index}`} className="rounded-full bg-(--mono-light) p-2 px-5 font-medium text-sm">
                  {tag}
                </div>
              ))}
            </div>
                        
          </div>
        </div>
      </div>
    </header>
  );
}
