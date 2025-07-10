"use client"; // Required for Framer Motion and its hooks
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";


export default function Contact() {
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
            <h2 className="text-2xl font-medium mb-6 md:mb-0">Let&apos;s work together!</h2>
          </div>
                

          <div
            id="ContactSection"
            className="border-3 border-(--dark-beige) bg-(--light-beige) p-6 rounded-3xl  w-full flex justify-between items-center pt-8 pb-8 relative overflow-hidden"
            style={{
              backgroundImage: "url('/elements/element_2.png')",
              backgroundPosition: 'calc(100% + 60px) calc(100% + 40px)',
              backgroundRepeat: 'no-repeat',
               backgroundSize: '300px'
            }}
          >
            <div>
            <p className="mb-2 text-5xl text-black leading-14"> 
              Have a project in mind?
            </p>
            <p className="mb-12 text-3xl   text-mid "> 
             Let&apos;s talk.
             </p>
            <div className="flex gap-5  mt-8">
              <Link href="mailto:hello@joannb.com?subject=Hello&nbsp;Jo" passHref>
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
      </div>
    </section>
  );
}
