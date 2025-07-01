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
  projectLink, // Destructure projectLink
  no,
  className,
  color,
}: ProjectCardProps) {
  const baseClassName =
    " rounded-xl shadow-md";
  const textColorClass = color === "white" ? "text-white" : "text-black";
  const dynamicStyles = {
    backgroundImage: `url('/images/project/p${no}-bg.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: '328px',
    
    height: no == 1 ? '600px' : '290px'

    
    
    
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
      
      
      
    >
      <Link href={projectLink} >
      <motion.div
      id='background'
      className={`${baseClassName} ${className || ""} absolute cursor-pointer`.trim()}
        style={dynamicStyles} 
        variants={imageVariants}
      >

      </motion.div>

      <div className='p-6'>

      
        <div className='absolute'>
        <h3 className={` text-3xl font-semibold  ${textColorClass}`} >
          {title}
        </h3>

        <h4 className={`text-lg ${textColorClass}`}>
          {subtitle}
        </h4>
        </div>
        <div className="flex flex-col items-center mt-23">
          <div className='mt-30'>

          </div>
          {/* {text && <p className={`text-lg ${textColorClass} `}>{text}</p>}
          {text2 && (
            <p
              className={`text-4xl ${textColorClass} text-center mb-10 `}
            >
              {text2}
            </p>
          )} */}

          <div className="relative mt-4 w-full">
            {/* <motion.img
              src={`/images/project/p${no}-bg.png`}
              alt={`Project illustration ${no}`}
              className="w-full"
              variants={imageVariants}
            /> */}

            <motion.div
              className={`absolute inset-0 flex items-end justify-end p-4 ${no=== 1 ? 'mt-75' : ''} `}
              variants={buttonContainerVariants}
            >
              <button className="px-6 py-3 cursor-pointer bg-(--rose-gold-bg-light) bg-opacity-90	 text-mid rounded-full font-semibold shadow-lg hover:bg-(--rose-gold-pale-pink) transition-colors">
                {projectLink == '#' ? 'Coming Soon' : "View Project"}
              </button>
            </motion.div>
          </div>
        </div>
      
      </div>
      </Link>
    </motion.div>
  );
}
