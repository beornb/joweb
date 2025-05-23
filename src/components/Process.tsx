"use client"; // Required for Framer Motion animations


import ProcessCard from "@/components/ProcessCard";


export default function Process() {
  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">My Process</h2>
          </div>
          <div className="md:w-3/4 text-left flex gap-5 relative flex-col"> {/* Added relative positioning context */}
            <ProcessCard title="Discover" text="I begin with deep research, understanding users, markets, and the problem space from all angles." text_line_2="this is a test" number={1}></ProcessCard>
            <ProcessCard title="Define" text="I align product goals with user needs and business opportunities, identifying where I can make the most meaningful impact. " text_line_2="this is a test" number={2}></ProcessCard>
            <ProcessCard title="Develop & Deliver"  text="From product experiences to messaging strategies, I build solutions that resonate." text_line_2="I test, iterate, and collaborate closely across teams to ensure what we ship delivers value, to users and the business."  number={3}></ProcessCard>
            <ProcessCard title="My toolbox"  text="Figma · Adobe CS · Miro · Sketch · Notion · Slack · Jira · Google Workspace · UserTesting · " text_line_2="· Typeform · Hotjar · CMS platforms · PPT / Google Slides for storytelling & GTM · "  number={4}></ProcessCard>
            
        
          </div>
        </div>
      </div>
    </section>
  );
}
