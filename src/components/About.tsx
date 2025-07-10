export default function About() {
  return (
    <section className="w-full mt-24" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">About Me</h2>
          </div>
          <div className="md:w-3/4 text-left">
            <p className="text-lg text-black mb-4">
              I’m a <span className="font-semibold">Product Designer</span> & <span className="font-semibold">Product Marketing Manager</span> with 15+ years of experience building digital products that are not just beautifully designed, but genuinely useful.
            </p>
            <p className="text-lg text-black mb-4">
              I work at the <span className="font-semibold">intersection of UX</span>, <span className="font-semibold">product strategy,</span> and <span className="font-semibold">go-to-market</span>, turning complex ideas into intuitive, scalable solutions. From onboarding flows that reduce support load to GTM launches that boost feature adoption, I bring a <span className="font-semibold">holistic</span>, <span className="font-semibold">user-centered</span> approach that connects <span className="font-semibold">product vision</span> with <span className="font-semibold">business results</span>.
            </p>
            <p className="text-lg text-black mb-4">
              I believe good design is about how it works and how it helps. If you&apos;re building something meaningful and need a <span className="font-semibold">cross-functional thinker</span> who speaks both design and strategy, I’d love to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
