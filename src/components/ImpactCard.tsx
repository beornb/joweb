"use client";

import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  subtitle: string;
  text: string;
  extraLine?: boolean;
}

const cardVariants = {
  rest: {
    backgroundColor: "rgb(0 0 0)", // Was bg-black
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    backgroundColor: "rgb(255 255 255)", // To bg-white
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const subtitleVariants = {
  rest: {
    color: "rgb(255 255 255)", // Was text-white
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    color: "rgb(0 0 0)", // To text-black
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const titleSpanVariants = {
  rest: {
    WebkitTextFillColor: "transparent", // Ensures gradient from classes is visible
    // backgroundImage will be determined by Tailwind classes when not hovering
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    WebkitTextFillColor: "rgb(0 0 0)", // Makes text black
    backgroundImage: "none", // Removes the gradient
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ImpactCard({ title, subtitle, text, extraLine }: ImpactCardProps) {
  return (
    <motion.div
      // bg-black class removed, backgroundColor is handled by cardVariants
      className="border-3 border-(--rose-gold-fg-dark) p-6 rounded-lg shadow-md md:w-1/3"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      <motion.h4
        // text-white class removed, color is handled by subtitleVariants
        className="text-md font-medium mb-1"
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.h4>
      <p className="text-black hei">
        {text}
        {extraLine === true && (
            <>
            <br /><br />
            </>
          )}
        </p> {/* This text will be black on white bg during hover */}
      <h3>
        <motion.span
          // text-transparent class removed; WebkitTextFillColor handled by titleSpanVariants.
          // Gradient classes (bg-gradient-to-r, from-*, via-*, to-*) and bg-clip-text remain.
          className="text-5xl font-semibold mb-2 bg-gradient-to-r from-(--rose-gold-pale-pink) via-(--golden) to-(--rose-gold-fg-dark) bg-clip-text"
          variants={titleSpanVariants}
          
        >
          {title}
          
        </motion.span>
      </h3>
    </motion.div>
  );
}
