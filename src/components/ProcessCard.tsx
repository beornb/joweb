"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProcessCardProps {
  title: string;
  text: string;
  text_line_2: string;
  number: number;
}

const textLine2Variants = {
  rest: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    opacity: 1,
    height: "auto",
    marginTop: 0,
    
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ProcessCard({ title, text, number, text_line_2 }: ProcessCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      // bg-black class removed, backgroundColor is handled by cardVariants
      className="border-3 border-(--dark-beige) bg-(--light-beige) p-6 rounded-3xl  w-full flex justify-between items-center pt-8 pb-8 relative overflow-hidden"
    >
      <div>
        <h4
          // text-white class removed, color is handled by subtitleVariants
          className="text-lg font-bold mb-1 text-dark"

        >
          {title}
        </h4>

        {number == 1 && (
          <div className="absolute top-2 right-6  z-1 opacity-50 md:opacity-100">
              <Image src="/elements/element_1.png" alt="" width={300} height={300} />
          </div>    

        )}
        {number == 2 && (
          <div className="absolute top-[-180px]  z-1 right-6  opacity-50 md:opacity-100">
              <Image src="/elements/element_1.png" alt="" width={300} height={300} />
          </div>    

        )}

                {number == 3 && (
          <div className="absolute top-2  z-1 right-6  opacity-50 md:opacity-100">
              <Image src="/elements/element_2.png" alt="" width={300} height={300} />
          </div>    

        )}
        {number == 4 && (
          <div className="absolute top-[-150px] z-1 right-6  opacity-50 md:opacity-100">
              <Image src="/elements/element_2.png" alt="" width={300} height={300} />
          </div>    

        )}
        <div className="relative z-10">


        <p className="text-dark max-w-[calc(100vw-200px)]" dangerouslySetInnerHTML={{ __html: text }}>
          
        </p>
        <motion.p
        className="text-dark max-w-[calc(100vw-200px)]"
          variants={textLine2Variants}
           dangerouslySetInnerHTML={{ __html: text_line_2 }}
        >
        </motion.p>
        </div>
        
            {/* <div className="absolute top-[400px] right-6 opacity-50 z-0">
              <Image src="/elements/element_2.png" alt="" width={300} height={300} />
            </div> */}
      </div>
      <div  id="number" className="text-7xl pl-5 text-black text-bold absolute  right-6 z-2">
        {'0' + number.toString()}
      </div>
    </motion.div>
  );
}
