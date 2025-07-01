"use client"; // Required for Framer Motion animations
import { motion } from "framer-motion";


import TestimonialCard from "@/components/TestimonialCard";


export default function Testimonials() {
  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">Testimonials</h2>
          </div>
          <div className="md:w-3/4 text-left flex flex-col md:flex-row gap-5 relative h-[400px] overflow-hidden"> {/* Added relative positioning context */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex flex-col gap-5 md:w-1/2"
              animate={{ y: ["0%", "-120%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              <div className="flex flex-col gap-5">
                <TestimonialCard name="Stephen Kavyia" title="Design Lead ABSA Bank" text="“Jo is passionate, fun and caring – she plays an important part in developing the bonds among our team members. She is a thorough, and exacting designer always looking for ways to help deliver the best that is possible.”" link=" https://www.linkedin.com/in/stephen-kavayi-90a9a917/"></TestimonialCard>
                <TestimonialCard name="Bernice Huntley" title="Freethinking Business Consultants" text="“Jo used her Leadership skills to take “Team Work” to a higher level by bringing the team together through idea sharing and thinking to achieve one common goal. ”" link=" https://www.linkedin.com/in/bernice-huntley-0755bb25/"></TestimonialCard>
                <TestimonialCard name="Revika Hooseria" title="Nedbank" text="“A GREAT display of Leadership, Collaboration, Hard Work and understanding of the end to end Design process.”" link="- https://www.linkedin.com/in/revikahooseria/"></TestimonialCard>
              </div>
              <div className="flex flex-col gap-5" aria-hidden="true">
                <TestimonialCard name="Stephen Kavyia" title="Design Lead ABSA Bank" text="“Jo is passionate, fun and caring – she plays an important part in developing the bonds among our team members. She is a thorough, and exacting designer always looking for ways to help deliver the best that is possible.”" link=" https://www.linkedin.com/in/stephen-kavayi-90a9a917/"></TestimonialCard>
                <TestimonialCard name="Bernice Huntley" title="Freethinking Business Consultants" text="“Jo used her Leadership skills to take “Team Work” to a higher level by bringing the team together through idea sharing and thinking to achieve one common goal. ”" link=" https://www.linkedin.com/in/bernice-huntley-0755bb25/"></TestimonialCard>
                <TestimonialCard name="Revika Hooseria" title="Nedbank" text="“A GREAT display of Leadership, Collaboration, Hard Work and understanding of the end to end Design process.”" link="- https://www.linkedin.com/in/revikahooseria/"></TestimonialCard>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5 md:w-1/2"
              animate={{ y: ["-120%", "0%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              <div className="flex flex-col gap-5">
                <TestimonialCard name="Georgine Livermore" title="Valutico" text="“Her expertise, strong work ethic and attention to detail have really elevated the projects we've worked on.”" link="https://www.linkedin.com/in/georgina-livermore-b676662b/"></TestimonialCard>
                <TestimonialCard name="Andrew Roberts" title="Adverity" text="“When we work together I feel my input is truly valued, and when combined with her own professional insights, we create some really great UX copy.”" link="https://www.linkedin.com/in/andrew-roberts-175b14115/"></TestimonialCard>
                <TestimonialCard name="Dayne Völler" title="Chief Technical Officer " text="“Her passion for design and her unwavering persistence to see tasks through really make her stand out and sets her apart in her field.”" link="https://www.linkedin.com/in/dayne-voller/"></TestimonialCard>

              </div>
              <div className="flex flex-col gap-5" aria-hidden="true">
                <TestimonialCard name="Georgine Livermore" title="Valutico" text="“Her expertise, strong work ethic and attention to detail have really elevated the projects we've worked on.”" link="https://www.linkedin.com/in/georgina-livermore-b676662b/"></TestimonialCard>
                <TestimonialCard name="Andrew Roberts" title="Adverity" text="“When we work together I feel my input is truly valued, and when combined with her own professional insights, we create some really great UX copy.”" link="https://www.linkedin.com/in/andrew-roberts-175b14115/"></TestimonialCard>
                <TestimonialCard name="Dayne Völler" title="Chief Technical Officer " text="“Her passion for design and her unwavering persistence to see tasks through really make her stand out and sets her apart in her field.”" link="https://www.linkedin.com/in/dayne-voller/"></TestimonialCard>
              </div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
