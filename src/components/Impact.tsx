"use client"; // Required for Framer Motion animations

import Image from 'next/image';
import { motion } from 'framer-motion';
import ImpactCard from "@/components/ImpactCard";

const MotionImage = motion(Image); // Create a motion component from next/image

export default function Impact() {
  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">My Impact</h2>
          </div>
          <div className="md:w-3/4 text-left flex gap-5 relative flex-col md:flex-row"> {/* Added relative positioning context */}
            <ImpactCard title="15+" subtitle="Years Experience" text="Bridging product design, strategy & marketing across SaaS and B2C & B2B."></ImpactCard>
            <ImpactCard title="6+" subtitle="Trusted Teams" text="Partnered with Product, Engineering, CS, and Marketing on key launches."></ImpactCard>
            <ImpactCard title="30%" subtitle="Faster TTM" text="Led quarterly release cycles with cross-functional alignment." extraLine={true}></ImpactCard>
            
            <MotionImage
              src="/elements/element_3.png"
              alt="Decorative Element"
              width={120} // You can adjust this width
              height={120} // You can adjust this height
              className="absolute z-10 -top-8 md:-top-0 md:right-[-80px] right-[-20px]" // Positioned to float above, slightly to the right, overlapping the third card
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20, // Duration for one full rotation (in seconds)
                repeat: Infinity, // Repeat the animation indefinitely
                ease: "linear", // Constant speed rotation
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
