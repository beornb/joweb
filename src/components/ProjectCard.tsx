"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  text?: string;
  text2?: string;
  projectLink: string; // Added projectLink prop

  no?: number; // Optional, if you want to include a number prop
  className?: string;
  color?: "white" | "black";
}

export default function ProjectCard({
  title,
  subtitle,
  text,
  text2,
  projectLink, // Destructure projectLink
  no,
  className,
  color,
}: ProjectCardProps) {
  const baseClassName =
    "border-3 border-(--rose-gold-fg-dark) p-6 rounded-3xl shadow-md";
  const textColorClass = color === "white" ? "text-white" : "text-black";
  const dynamicStyles = {
    backgroundImage: `url('/images/project/p${no}-bg.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const imageVariants = {
    rest: {
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      filter: "blur(4px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const buttonContainerVariants = {
    rest: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      opacity: .5,
      scale: 1,
      cursorTo: 'pointer',
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`${baseClassName} ${className || ""} cursor-pointer`.trim()}
      style={dynamicStyles}
    >
      <Link href={projectLink}>
        <h3 className={`text-2xl font-semibold mb-2   ${textColorClass}`}>
          {title}
        </h3>

        <h4 className={`text-lg font-bold mb-1 ${textColorClass}`}>
          {subtitle}
        </h4>
        <div className="flex flex-col items-center">
          {text && <p className={`text-lg ${textColorClass} `}>{text}</p>}
          {text2 && (
            <p
              className={`text-4xl ${textColorClass} text-center mt-10 mb-10 `}
            >
              {text2}
            </p>
          )}

          <div className="relative mt-4 w-full">
            <motion.img
              src={`/images/project/p${no}-img.png`}
              alt={`Project illustration ${no}`}
              className="w-full"
              variants={imageVariants}
            />
            <motion.img
              src={`/images/project/p${no}-logo.png`}
              alt={`Project logo ${no}`}
              className="w-25 mx-auto mt-4"
              variants={imageVariants}
            />
            <motion.div
              className="absolute inset-0 flex items-end justify-end p-4"
              variants={buttonContainerVariants}
            >
              <button className="px-6 py-3 cursor-pointer bg-(--rose-gold-bg-light) bg-opacity-50	 text-mid rounded-full font-semibold shadow-lg hover:bg-(--rose-gold-pale-pink) transition-colors">
                View Project
              </button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
