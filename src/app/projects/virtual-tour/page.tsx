"use client"; // Required for Framer Motion and useState

import ProjectHeader from "@/components/ProjectHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/images/project/screenshot-vt-1.png",
  "/images/project/screenshot-vt-2.png",
  "/images/project/screenshot-vt-3.png",
];

export default function VirtualTourPage() {
  return (
    <div className="relative">
      <Link href="/" className="absolute top-8 left-8 z-10">
        <Image src="/images/icons/home.svg" alt="Back" width={40} height={40} />
      </Link>
      <ProjectHeader
        projectHeading="Creating the Virtual Tour: <br /> A Dual Lens in Product & Marketing"
        projectTags={[
          "Business Valuation",
          "Fintech",
          "B2B | B2C",
          "Startup",
          "Web",
          "Product Design",
          "Product Marketing",
          "Product Help Content",
        ]}
      />
      <main className="container mx-auto py-12 px-4 min-h-screen flex flex-col items-center justify-center text-center text-lg">
        <Image
          width={1118}
          height={699}
          alt="Virtual Tour Screenshot"
          src="/images/project/screenshot-virtual-tour.png"
        />
        <div id="details" className="flex mt-16 gap-8">
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">ROLE</p>
            <p>Product Designer</p>
            <p>Product Marketing Manager</p>
            <p>(Strategy → Design → Execution)</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TEAM</p>
            <p>VP Marketing</p>
            <p>Product Designer /</p>
            <p>Product Marketing Manager</p>
            <p>Front-end Engineer</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TOOLS</p>
            <p>Figma, Navattic</p>
            <p>Salesforce, Calendy</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TIMELINE</p>
            <p>January – March 2025</p>
          </div>
        </div>

        <div
          id="main"
          className="container mx-auto max-w-[700px] mt-4 text-left text-black"
        >
          <h2 className="text-mid text-3xl font-medium mt-6">Goal</h2>
          <p className=" mt-4">
            To create a self-serve, interactive product tour that improves
            product comprehension, drives qualified sign-ups, and enables Sales
            with a consistent, scalable story.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-8">Problem</h3>
          <p className=" mt-4">
            Valutico was evolving from a Sales-led approach into a more scalable
            Sales-assisted + Product-led growth model. Until this point, most
            prospects engaged with the product only after talking to a sales
            representative.
          </p>
          <p className=" mt-4">
            However, we recognised a gap: <br />
            in certain regions or time zones, prospects had no access to Sales
            at all — yet still needed to evaluate the product. To address this,
            the product experience needed to:
          </p>
          <ul className="list-disc list-inside">
            <li>Act as a self-serve introduction to the platform</li>
            <li>Deliver a consistent narrative about the product’s value</li>
            <li>Scale globally without requiring live human support</li>
          </ul>
          <p className=" mt-4">
            The virtual tour became our first step toward this hybrid strategy —
            a bridge between interest and deeper engagement for users outside
            our typical sales touchpoints.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-8">Objectives</h3>
          <ul className="list-none space-y-2 mt-4">
            <li className="flex items-start m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>Improve product comprehension in under 3 minutes</span>
            </li>
            <li className="flex items-start  m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>Increase homepage-to-signup conversion by 15%</span>
            </li>
            <li className="flex items-start  m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>
                Create a reusable asset for Sales, Growth, and Onboarding
              </span>
            </li>
            <li className="flex items-start m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>Design a modular experience we could update over time</span>
            </li>
          </ul>

          <h2 className="text-mid text-3xl font-medium mt-12">Process</h2>

          <h3 className="text-mid text-2xl font-medium mt-8">
            Product Marketing Lens
          </h3>
          <p className="mt-4">
            To support first-time users, especially those new to valuation we
            built a clear, empathetic onboarding story that simplifies
            complexity.
          </p>
          <h4 className="mt-4">✍️ Narrative Strategy</h4>
          <p>Rather than overwhelming with features, we focused on:</p>
          <ul className="list-disc list-inside">
            <li>Removing jargon</li>
            <li>Framing the tour as a guided, rewarding journey</li>
            <li>Building trust through paced, user-friendly messaging</li>
          </ul>
          <h4 className="mt-4">🤝 Collaboration</h4>
          <p>Partnered with Valuation Services and Customer Success to:</p>
          <ul className="list-disc list-inside">
            <li>Pinpoint misunderstood features</li>
            <li>Highlight key &quot;aha&quot; moments</li>
            <li>Use real user language to shape tone and flow</li>
          </ul>
          <h4 className="mt-4">🧩 Story Flow</h4>
          <p>Using dummy data, we guided users through:</p>
          <ul className="list-disc list-inside">
            <li>Company setup</li>
            <li>Method selection and inputs</li>
            <li>Final valuation report — the “reward”</li>
          </ul>
          <h4 className="mt-4">🛠 Tool Choice</h4>
          <p>We chose Navattic for its:</p>
          <ul className="te list-disc list-inside">
            <li>Easy embedding</li>
            <li>No-code interactivity</li>
            <li>Flexibility for future updates</li>
          </ul>

          <div
            id="carousel-container"
            className="relative w-[120%] left-[-10%] h-[250px] my-8 overflow-hidden rounded-lg shadow-lg"
          >
            <motion.div
              className="flex h-full" // Ensure the track uses full height of the aspect ratio container
              initial={{ x: "0%" }}
              animate={{ x: `-${images.length * 100}%` }}
              transition={{
                ease: "linear",
                duration: images.length * 14, // Adjust duration for scroll speed (e.g., 7 seconds per image)
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {[...images, ...images].map((src, index) => (
                <div
                  key={`marquee-image-${index}`}
                  className="relative w-full h-full flex-shrink-0"
                  style={{ flexBasis: "100%" }} // Each image container takes full width of the carousel-container
                >
                  <Image
                    src={src}
                    alt={`Virtual Tour Screenshot ${
                      (index % images.length) + 1
                    }`}
                    layout="fill"
                    objectFit="contain" // Ensures the whole image is visible within its 16/9 container
                    className="rounded-lg"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <h3 className="text-mid text-2xl font-medium mt-8">
            Product Designer Lens
          </h3>
          <p className="mt-4">
            As the designer, I collaborated with our Front-End Engineer to build
            the tour in Navattic, using curated screenshots to simulate a real
            product experience.
          </p>
          <h4 className="mt-4">🔍 Simplifying the Interface</h4>
          <p>We used Navattic’s flexibility to:</p>
          <ul className="list-disc list-inside">
            <li>Hide advanced features that could distract new users</li>
            <li>Highlight only essential steps for completing a valuation</li>
            <li>Create a focused, intuitive flow</li>
          </ul>
          <h4 className="mt-4">🎨 On-Brand Experience</h4>
          <p>To keep the experience consistent:</p>
          <ul className="list-disc list-inside">
            <li>Applied our brand’s colors, fonts, and UI components</li>
            <li>Styled tooltips and modals to match our design system</li>
            <li>Made the tour feel like a native part of Valutico</li>
          </ul>
          <h4 className="mt-4">🔗 Supporting Growth & Education</h4>
          <p>We:</p>
          <ul className="list-disc list-inside">
            <li>Embedded videos and Help Center links</li>
            <li>Verified all flows for smooth navigation</li>
            <li>
              Captured user data for handoff to Sales & CS, connecting
              engagement to outreach
            </li>
          </ul>

          <div className="my-8 flex justify-center">
            <Image
              src="/images/project/screenshot-virtual-tour-2.png"
              alt="Virtual Tour design process in Figma"
              width={1118}
              height={629} // Calculated to maintain 16:9 aspect ratio for a 1118px width
              className="rounded-lg shadow-md"
            />
          </div>

          <h3 className="text-mid text-2xl font-medium mt-8">
            Collaboration & Tools
          </h3>
          <p className="mt-4">Who you worked with:</p>
          <ul className="list-disc list-inside">
            <li>Product for accuracy</li>
            <li>Marketing, Sales/CS for real objections</li>
            <li>Front End Engineer</li>
          </ul>
          <p className="mt-4">Tools used:</p>
          <ul className="list-disc list-inside">
            <li>Figma, Posthog, Navattic, Calendy</li>
          </ul>

          <div className="my-8 flex justify-center">
            <Image
              src="/images/project/screenshot-virtual-tour-3.png"
              alt="Virtual Tour Analytics Dashboard"
              width={700}
              height={365}
              className="rounded-lg shadow-md"
            />
          </div>

          <h3 className="text-mid text-2xl font-medium mt-8">
            Outcome & Impact
          </h3>
          <p className="mt-4">
            <em>Use metrics if you have them:</em>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Tour completion rate: 60% above previously implemented Virtual
              Tour
            </li>
            <li>+100% Engaged visitors</li>
            <li>Adopted as core Sales enablement tool in 3 regions</li>
            <li>Sales team shortened pitch time by 15 minutes</li>
          </ul>

          <h3 className="text-mid text-2xl font-medium mt-8">Reflection</h3>
          <p className="mt-4">What I learned</p>
          <ul className="list-disc list-outside ml-4">
            <li>
              The power of narrative in complex products. Crafting a guided
              experience using storytelling helped simplify a highly technical
              product. I learned how effective it is to remove friction and use
              a structured journey to help users focus on value over features.
            </li>
            <li>
              Balancing brand consistency across embedded tools. Integrating
              Navattic into our experience taught me the importance of
              maintaining visual and experiential consistency across platforms.
              Even small misalignments can erode trust.
            </li>
            <li>
              Cross-functional collaboration fuels better outcomes. Working with
              our Front-End Engineer, Valuation Services, and Customer Success
              showed me how vital it is to incorporate multiple perspectives.
              This helped us spotlight misunderstood features and tune the tour
              to real-world customer pain points.
            </li>
            <li>
              A good demo is a growth lever. This project highlighted that even
              in sales-led orgs, a well-crafted self-serve demo can act as a
              scalable bridge to engage and qualify users in new markets.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
