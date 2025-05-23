"use client"; // Required for Framer Motion and its hooks
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Header() {
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

  const greetingText = "Hello, I’m Jo-Ann.";
  const sentenceVariants = {
    hidden: { opacity: 1 }, // Parent is visible
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Optional delay before animation starts
        staggerChildren: shouldReduceMotion ? 0 : 0.05, // Time between each letter appearing
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 }, // Start invisible and slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.1, // Faster individual letter animation
      },
    },
  };

  return (
    <header className="mt-0 md:mt-12 lg:mt-24">

      <div id="container" className="container mx-auto max-w-[950px] bg-white/80 rounded-2xl border-light  p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          <div className="flex-grow text-center md:text-left">
            <motion.h2
              className="text-lg mb-2 font-medium text-mid"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {greetingText.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-5xl mb-3 text-black leading-14" >
              I blend <span className="text-mid">UX insight</span> with <span className="text-mid">marketing intuition</span> to craft products that delight users and fuel growth.
            </p>
            <div className="flex items-center gap-3 font-medium mt-8 text-lg text-black" >
              <p>
                Product Marketing       
              </p>
              <div className="w-[3px] h-[3px] rounded-full bg-[var(--rose-gold-bg-mid)]"></div>
              <p>
                Product Design 
              </p>
            </div>
            <div className="flex gap-5  mt-8">
              <Link href="/contact" passHref>
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
                      Get In Touch
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
              <Link href="https://www.linkedin.com/in/joannbishop/" target="_blank">
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
                      LinkedIn
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
    </header>
  );
}
