"use client"; // Required for Framer Motion animations

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

// Define a consistent height for all logos. Widths can vary to maintain aspect ratio.
const LOGO_DISPLAY_HEIGHT_PX = 40;

const companyLogos = [
  { src: "/companies/Adverity.svg", alt: "Adverity", width: 100, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/African Bank.svg", alt: "African Bank", width: 120, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/Dischem.svg", alt: "Dischem", width: 110, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/Nedbank.svg", alt: "Nedbank", width: 100, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/SAA.svg", alt: "SAA", width: 70, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/Talent Garden.svg", alt: "Talent Garden", width: 130, height: LOGO_DISPLAY_HEIGHT_PX },
  { src: "/companies/Valutico.svg", alt: "Valutico", width: 110, height: LOGO_DISPLAY_HEIGHT_PX },
];

// Each logo item will be wrapped in a div. This is the width of that div in rem.
const LOGO_CONTAINER_WIDTH_REM = 10; // Approx 160px. Logos will be centered within this.
// Calculate the total distance the animation needs to cover for one set of logos.
const ANIMATION_DISTANCE_REM = companyLogos.length * LOGO_CONTAINER_WIDTH_REM;
// Define the duration of one loop. Adjust the multiplier for desired speed (e.g., 2.5 seconds per logo).
const ANIMATION_DURATION_S = companyLogos.length * 8;


export default function Trusted() {
  const shouldReduceMotion = useReducedMotion();
  // Duplicate the logos array for a seamless looping animation effect.
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  const marqueeVariants = {
    animate: {
      x: [0, `-${ANIMATION_DISTANCE_REM}rem`], // Animate from original position to one full set width left
      transition: {
        x: {
          repeat: Infinity, // Loop forever
          repeatType: "loop", // On repeat, restart the animation
          duration: ANIMATION_DURATION_S,
          ease: "linear", // Constant speed
        },
      },
    },
    initial: { // The static or starting state
      x: 0,
    }
  };

  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        {/* Added items-center for better vertical alignment of title and carousel on medium screens */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium mb-6 md:mb-0">Trusted By</h2>
          </div>
          {/* Carousel Viewport: This div clips the horizontally scrolling content. Added 'relative' for positioning fade overlays. */}
          <div className="md:w-3/4 overflow-hidden carosel relative">
            {/* Left fade overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#fbf9f5] to-transparent pointer-events-none z-10" />
            <motion.div
              className="flex" // This is the track that moves. flex-shrink-0 prevents it from shrinking.
              variants={marqueeVariants}
              initial="initial" // Start at the 'initial' variant state (x: 0)
              animate={shouldReduceMotion ? "initial" : "animate"} // Apply 'animate' variant only if motion is not reduced
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`} // Unique key for each item
                  className="flex-shrink-0 flex items-center justify-center h-20" // Container for each logo. h-20 for vertical space.
                  style={{ width: `${LOGO_CONTAINER_WIDTH_REM}rem` }} // Fixed width for each logo's container
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width} // Use the defined width for the image
                    height={logo.height} // Use the defined height for the image
                    className="object-contain" // Ensures the image scales nicely within its box
                  />
                </div>
              ))} 
            </motion.div>
            {/* Right fade overlay */}
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#fbf9f5] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
