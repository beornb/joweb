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
            <ProcessCard title="Discover" text="I begin with deep research, understanding users, markets, <br>and the problem space from all angles." text_line_2="&nbsp;" number={1}></ProcessCard>
            <ProcessCard title="Define" text="I align product goals with user needs and business <br> opportunities, identifying where I can make the most" text_line_2="meaningful impact." number={2}></ProcessCard>
            <ProcessCard title="Develop & Deliver"  text="From product experiences to messaging strategies, <br> I build solutions that resonate." text_line_2="<br>I test, iterate, and collaborate closely  <br>  across teams to ensure what we ship <br> is delivering value to users and the business."  number={3}></ProcessCard>
            <ProcessCard title="My Toolbox"  text="Figma · Adobe CS · Miro · Sketch · Notion · Slack · Jira · Google Workspace" text_line_2="UserTesting · Typeform · Hotjar · CMS platforms · PPT / Google Slides <br> for storytelling & GTM · "  number={4}></ProcessCard>
            
        
          </div>
        </div>
      </div>
    </section>
  );
}
