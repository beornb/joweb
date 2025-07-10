interface ProjectDetailsProps {
  role: string[];
  team: string[];
  tools: string[];
  timeline: string[];
}

export default function ProjectDetails({
  role,
  team,
  tools,
  timeline,
}: ProjectDetailsProps) {
  return (
    <div id="details" className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <div className="text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
        <p className="text-mid font-medium mb-2">ROLE</p>
        {role.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
        <p className="text-mid font-medium mb-2">TEAM</p>
        {team.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
        <p className="text-mid font-medium mb-2">TOOLS</p>
        {tools.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
        <p className="text-mid font-medium mb-2">TIMELINE</p>
        {timeline.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
