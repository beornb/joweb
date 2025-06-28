"use client"; // Required for Framer Motion animations

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">Projects</h2>
          </div>
          <div className="md:w-3/4 text-left flex flex-col md:grid md:grid-cols-2 gap-8 relative"> {/* Changed to grid layout for md screens */}
            <ProjectCard title="Done Diligence" subtitle="Product Marketing" text="The wait is over" text2="Done Diligence has officially launched." no={1} className="h-full" color="white" projectLink="/projects/done-diligence" />
            <div className="flex flex-col gap-8 h-full"> {/* Wrapper for 2nd and 3rd cards */}
              <ProjectCard title="Virtual Tour" subtitle="PMM | Product Designer"  no={2} className="flex-1" color="white" projectLink="/projects/virtual-tour" />
              <ProjectCard title="Peers Selection" subtitle="Product Designer"  no={3} className="flex-1" color="black" projectLink="/projects/peers-selection" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
