"use client"; // Required for Framer Motion animations

import ProjectCard from "@/components/ProjectCard";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Projects() {

    const shouldReduceMotion = useReducedMotion();
  const transitionDuration = shouldReduceMotion ? 0 : 0.3;
  const slidingBgVariants = {
    initial: { x: "100%" }, // Start off-screen to the right
    hover: { x: "0%" },     // Slide in from the right
  };

  const textVariants = {
    initial: { color: "var(--rose-gold-bg-light)" }, // Corresponds to the original text-light color
    hover: { color: "var(--color-black)" },         // Target text color
  };

  const circleBgVariants = {
    initial: { backgroundColor: "var(--rose-gold-fg-dark)" },
    hover: { backgroundColor: "var(--color-white)" },
  };

  return (
    <section className="w-full mt-24">
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">Projects</h2>
          </div>
          <div className="md:w-3/4 text-center">

    
            <div className="lg:w-full text-left flex flex-col lg:grid lg:grid-cols-2 gap-8 relative  max-w-[328px] lg:max-w-[800px] m-auto ">
              {" "}
              {/* Changed to grid layout for md screens */}
              <ProjectCard
                title="Done Diligence"
                subtitle="Product Marketing"
                text="The wait is over"
                text2="Done Diligence has officially launched."
                no={1}
                className="flex-1 max-w-[328px]"
                color="white"
                projectLink="/projects/done-diligence"
              />
              <div className="flex flex-col gap-8 h-full">
                {" "}
                {/* Wrapper for 2nd and 3rd cards */}
                <ProjectCard
                  title="Virtual Tour"
                  subtitle="PMM | Product Designer"
                  no={2}
                  className="flex-1  max-w-[328px]"
                  color="white"
                  projectLink="/projects/virtual-tour"
                />
                <ProjectCard
                  title="Peers Selection"
                  subtitle="Product Designer"
                  no={3}
                  className="flex-1 max-w-[328px]"
                  color="black"
                  projectLink="/projects/peers-selection"
                />
              </div>
            </div>
            

            <h3 className=" text-2xl font-medium mt-14 text-left">
              Every project leaves a mark.
            </h3>
            <p className=" mt-4 text-black text-left">
              Here’s a look back at some of my earlier work, from client
              projects to creative experiments. While tools and trends have
              changed, my approach has always been rooted in empathy, clarity,
              and collaboration.
            </p>

 <div className="flex gap-5  mt-8">
              <Link href="/projects/archive" passHref>
                <motion.div // Changed from div to a for semantic linking with Framer Motion
                  className="relative overflow-hidden flex items-center rounded-full border-2 border-black bg-black pl-6 gap-3 cursor-pointer no-underline" // Added no-underline
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Sliding background layer */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    variants={slidingBgVariants}
                    transition={{ duration: transitionDuration, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  {/* Content layer - needs to be above the sliding background */}
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.p
                      className="text-sm leading-none"
                      variants={textVariants}
                      
                      transition={{ duration: transitionDuration, ease: "easeInOut" }}
                    >
                      Let&apos;s Go Back
                    </motion.p>
                    <motion.div
                      id="circle"
                      className="w-[39px] h-[39px] rounded-full flex items-center justify-center"
                      variants={circleBgVariants}
                      transition={{ duration: transitionDuration, ease: "easeInOut" }}
                    >
                      <Image src="/elements/arrow.svg" alt="arrow icon" width={12} height={12} />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
             

            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
