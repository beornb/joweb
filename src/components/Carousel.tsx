"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CarouselProps {
  images: string[];
  duration: number;
  className?: string;
  motionDivClassName?: string;
  imageWidths: number | number[]
}

export default function Carousel({
  images,
  duration,
  className,
  motionDivClassName,
  imageWidths
}: CarouselProps) {

  let animationDistance = 0;

  if (Array.isArray(imageWidths)) {
    animationDistance = (imageWidths.reduce((a, b) => a + b, 0))
  } else {
    animationDistance = (images.length * (imageWidths + 16))  ;
  }

  const shouldReduceMotion = useReducedMotion();
    const marqueeVariants = {
    animate: {
      x: [0, `-${animationDistance}px`], // Animate from original position to one full set width left
      transition: {
        x: {
          repeat: Infinity, // Loop forever
          repeatType: "loop", // On repeat, restart the animation
          duration: duration,
          ease: "linear", // Constant speed
        },
      },
    },
    initial: { // The static or starting state
      x: 0,
    }
  };

  //

  console.log('animationDistance', animationDistance)
  
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <motion.div
        className={`flex ${motionDivClassName || ""} gap-x-[16]`}
        //animate={{ x: ["0%", "-50%"] }}
        variants={marqueeVariants}
        animate={shouldReduceMotion ? "initial" : "animate"} // Apply 'animate' variant only if motion is not reduced

        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
                      <div
                      
                        key={`marquee-image-${index}`}
                        style={{width: (Array.isArray(imageWidths) ? imageWidths[index % images.length] : imageWidths).toString() + 'px'}}
                        className={`relative h-[250]  flex-shrink-0`}
                        
                      >
                        <Image
                          src={src}
                          alt={`Virtual Tour Screenshot ${
                            (index % images.length) + 1
                          }`}
                          
                          fill={true}
                          
                        />
                      </div>
                    ))}

                    {/* {instagramImages.map((src, index) => (
              <div
                key={`insta-card-${index}`}
                className="flex-shrink-0 mx-2"
              >
                <Image
                  src={src}
                  alt={`Instagram card screenshot ${
                    (index % instagramImages.length) + 1
                  }`}
                  width={220}
                  height={220}
                  className=""
                />
              </div> 
            ))}*/}
      </motion.div>
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}
