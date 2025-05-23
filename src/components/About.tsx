export default function About() {
  return (
    <section className="w-full mt-44" >
      <div className="container mx-auto max-w-[950px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-2xl font-medium  mb-6 md:mb-0">About Me</h2>
          </div>
          <div className="md:w-3/4 text-left">
            <p className="text-lg text-black mb-4">
I’m a <b>Product Designer</b> & <b>Product Marketing Manager</b> based in Vienna, Austria, with 15+ years creating digital products that are both beautifully designed and truly useful. I work at the intersection of UX, product strategy, and go-to-market, turning complex ideas into simple, scalable solutions. From onboarding flows that cut support to launches that drive adoption.
            </p>
            <p className="text-lg text-black mb-4">
              I bring a user-centered approach that aligns product vision with business goals.
If you’re building something meaningful and want a cross-functional thinker fluent in design and strategy, let’s connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
