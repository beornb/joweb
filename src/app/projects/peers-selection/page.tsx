import ProjectHeader from "@/components/ProjectHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function PeersSelectionPage() {
  return (
    <div className="relative">
      <Link href="/" className="absolute top-8 left-8 z-10">
        <Image src="/images/icons/home.svg" alt="Back" width={40} height={40} />
      </Link>
      <ProjectHeader
        projectHeading="Reworked for clarity. <br /> Designed for precision.<br /> Select your best-fit peers with ease."
        projectTags={[
          "Business Valuation",
          "B2C",
          "Startup",
          "Web",
          "Product Design",
          "Product Marketing",
          "Product Help Content",
        ]}
      />
      <main className="container mx-auto py-12 px-4 min-h-screen flex flex-col items-center justify-center text-center">
        <div id="details" className="flex gap-8">
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">ROLE</p>
            <p>Product Designer</p>
            <p>Researcher</p>
            <p>Product Marketing Manager</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TEAM</p>
            <p>Product Owner</p>
            <p>Product Designer</p>
            <p>Valuation Services Specialist</p>
            <p>Customer Success Specialist</p>
            <p>Sales Specialists</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TOOLS</p>
            <p>Figma, Post Hog</p>
            <p>Metabase, Intercom</p>
            <p>Google Suite</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TIMELINE</p>
            <p>Commercial Release Cycles </p>
            <p>= 12 weeks</p>
          </div>
        </div>

        <div
          id="main"
          className="container mx-auto max-w-[700px] mt-4 text-left text-black"
        >
          <h2 className="text-mid text-3xl font-medium mt-16">Overview</h2>
          <p className=" mt-4">
            This case study examines how uncovering and reworking underutilised
            functionality can pave the way for algorithm-driven insights,
            starting with a better way to select the correct industry peers and
            evolving toward smarter, automated benchmarking AI.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-14">About Valutico</h3>

          <p className=" mt-4">
            Valutico empowers financial professionals with a powerful suite of
            tools to streamline business valuations, harnessing real-time data
            and advanced analytics for smarter decision-making.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-14">Problem</h3>

          <p className=" mt-4">
            The Peer Selection process is critical for accurate business
            valuations but is underutilised in the platform and not optimised to
            deliver maximum value to the users. Internal feedback from our
            customer-facing teams (e.g., Sales, CSM, and Valuation Services)
            revealed key inefficiencies, leaving financial professionals
            frustrated with irrelevant suggestions and the time-consuming task
            of manually searching for relevant peers with a growing distrust in
            the platform’s reliability.
          </p>

          <Image
            className="mt-8"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-1.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Solution</h3>

          <p className=" mt-4">
            The original peer selection flow dropped users into a pre-filled
            table of suggestions — many of which were irrelevant. This led to
            frustration and unnecessary cleanup, as users had to delete poor
            matches before they could begin.
          </p>
          <p className=" mt-4">
            We flipped that experience. Now, users land on a clean, blank
            workspace that puts them in control from the start. Below this, they
            see a dynamic panel of smart suggestions, which they can pull from
            based on:
          </p>

          <ul className="list-disc list-outside pl-5">
            <li>Keyword matches from company and industry data</li>
            <li>Similar peers to those already selected</li>
            <li>Early-stage algorithmic recommendations</li>
          </ul>

          <p className=" mt-4">
            This reimagined layout simplifies the flow, reduces cognitive load,
            and makes the peer selection process feel more intuitive and
            user-driven. With a single click, users can add relevant peers and
            build a tailored list that fits their needs — no cleanup required.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-14">Deliverables</h3>

          <ul className="list-disc list-inside mt-4">
            <li>
              A redesigned peer selection screen, combining search, suggestions,
              and list-building in a single, user-friendly interface
            </li>
            <li>
              Improved UI for clearer hierarchy and more intuitive interactions
            </li>
            <li>
              Peer suggestion logic integrated with visual affordances for fast
              decision-making
            </li>
          </ul>

          <div className="flex gap-6 justify-around mt-8">
            <div className="w-[140] text-center bg-[var(--rose-gold-bg-semi)] px-6 py-4 rounded-lg">
              <p className="text-[var(--rose-gold-bg-mid)] text-4xl font-semibold">
                -30
              </p>
              <p className="mt-2">Reduced from hours to mins</p>
            </div>
            <div className="w-[140] text-center bg-[var(--rose-gold-bg-semi)] px-6 py-4 rounded-lg">
              <p className="text-[var(--rose-gold-bg-mid)] text-4xl font-semibold">
                60%
              </p>
              <p className="mt-2">Increased Trust</p>
            </div>
            <div className="w-[140] text-center bg-[var(--rose-gold-bg-semi)] px-6 py-5 rounded-lg">
              <p className="text-[var(--rose-gold-bg-mid)] text-4xl font-semibold">
                +8
              </p>
              <p className="mt-2">Increased User Happiness </p>
            </div>
          </div>
          <Image
            className="mt-4"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-2.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">
            Research & Challenges Identified
          </h3>

          <p className=" mt-4">
            Since our core ICP (financial professionals) have limited
            availability for direct feedback, we leveraged insights and
            internally.
          </p>

          <ul className="list-disc list-outside pl-5">
            <li>
              Feedback from our Customer Success and Valuation Services teams,
              who work directly with users
            </li>
            <li>
              Product analytics, highlighting drop-off points and time spent in
              the flow
            </li>
            <li>
              Direct user feedback and feature requests, collected through
              support tickets and our in-app feedback tool
            </li>
          </ul>

          <p className=" mt-4">
            These inputs pointed to three major challenges:
          </p>
          <div className="mx-8">
            <div className="mt-6">
              <strong>Irrelevant Peer Suggestions</strong>
              <br />
              <strong>60%</strong> of suggestions were commonly flagged as
              irrelevant by internal experts based on user sentiment and support
              queries.
              <br />
              <i className="font-medium text-mid">
                “Users frequently delete the entire suggested list and start
                over” — CSM Team Lead
              </i>
            </div>

            <div className="mt-6">
              <strong>Time-Consuming Workflow</strong>
              <br />
              Average time to complete peer selection: <strong>3+ hours</strong>
              , with most of it spent deleting irrelevant suggestions.
              <br />
              <i className="font-medium text-mid">
                “It’s faster to do it myself than fix what’s already there.” —
                Feedback via Support Ticket
              </i>
            </div>

            <div className="mt-6">
              <strong>Trust & Frustration</strong>
              <br />
              Only 1 in 4 users interacted with more than 2 suggested peers,
              suggesting low confidence
              <br />
              <i className="font-medium text-mid">
                “They don’t understand why a peer is shown and don’t feel
                confident in the logic.” — CSM feedback summary
              </i>
            </div>
          </div>

          <Image
            className="mt-4"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-3.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Ideation</h3>

          <p className=" mt-4">
            Since we already had a foundational understanding of the features we
            wanted to include on this screen, our ideation phase focused on
            validating and shaping those ideas. We held two cross-functional
            workshops involving Sales, Customer Success, and Product. During
            these sessions, team members contributed wireframes and sketches,
            and we collaboratively discussed the best path forward based on our
            shared knowledge of user needs and technical capabilities.
          </p>

          <Image
            className="mt-4"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-4.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Design</h3>

          <p className=" mt-4">
            Given that our target audience consists of older-generation
            financial professionals, we focused on simplicity and familiar
            patterns. Our goal was to streamline the process, ensuring the
            system does the heavy lifting by delivering accurate peer
            suggestions with minimal user effort.
          </p>

          <p className=" mt-4">Key Principles:</p>

          <ul className="list-disc list-outside pl-5">
            <li>
              Simplicity – Reducing cognitive load with an intuitive interface.
            </li>
            <li>
              Familiar Patterns – Aligning with existing workflows and industry
              expectations.
            </li>
            <li>
              Leveraging Existing Data – Using known company information to
              refine suggestions.
            </li>
            <li>
              Efficiency-First Interactions – Minimizing manual input to save
              time.
            </li>
            <li>
              Automation-Driven Assistance – Generating relevant results
              instantly to ease decision-making.
            </li>
          </ul>

          <h3 className="text-mid text-2xl font-medium mt-14">
            Design Approach:
          </h3>

          <p className=" mt-4">
            To make peer selection as effortless as possible, we designed an
            interface where users start with a clean, curated list rather than
            an overwhelming dataset. Below a streamlined table, AI-generated
            peer suggestions are presented in a structured format, allowing
            users to browse, assess, and add selections with a single click.
            This reduces time-consuming manual filtering while maintaining full
            control over the final selection.
          </p>

          <Image
            className="mt-4"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-5.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Iteration</h3>

          <p className=" mt-4">
            As a result of testing, we refined the layout to make the peer
            selection process faster and more intuitive by surfacing the most
            relevant and frequently used peer groups more prominently. A key
            challenge was balancing visibility and simplicity—ensuring important
            options were easy to find without overwhelming users. We also had to
            carefully manage the trade-off between automation and user control,
            making sure AI-generated suggestions felt helpful rather than
            intrusive.
          </p>

          <Image
            width={1018}
            height={599}
            className="mt-4"
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-6.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Final Design</h3>

          <p className=" mt-4">
            In the final design, we prioritised peer groups based on insights
            from A/B and C testing, placing the most relevant options front and
            center for quick access. To streamline the experience, we enabled
            users to easily browse and add peers with minimal friction,
            supported by AI-powered suggestions tailored to their valuation data
            and past behavior.
          </p>

          <Image
            className="mt-4"
            width={1018}
            height={599}
            alt="Peers Selection Screenshot"
            src="/images/project/screenshot-peers-selection-7.png"
          />

          <h3 className="text-mid text-2xl font-medium mt-14">Next Steps</h3>

          <p className=" mt-4">
            To ensure continued value and improvement of the peer selection
            feature, our next steps include:
          </p>

          <ul className="list-disc list-outside pl-5">
            <li>
              Monitor usage: Track metrics such as engagement with suggested
              peers and time-to-selection to understand adoption and friction
              points.
            </li>
            <li>
              Evaluate suggestion quality: Measure how often AI-generated
              suggestions are accepted, edited, or ignored, and gather user
              feedback to assess perceived relevance.
            </li>
            <li>
              Track algorithm growth: Analyze how the algorithm evolves over
              time based on real user behavior, aiming to continuously improve
              the accuracy and contextual relevance of peer suggestions.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
