"use client"; // Required for Framer Motion and useState

import ProjectHeader from "@/components/ProjectHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/project/screenshot-dd-1.png",
  "/images/project/screenshot-dd-2.png",
  "/images/project/screenshot-dd-3.png",
];

export default function DoneDiligencePage() {
  return (
    <>
      <ProjectHeader 
      projectHeading="Building anticipation for a smarter way to handle due diligence"
      projectSubHeading="Done Diligence Teaser Campaign"
      projectTags={["Business Valuation", "Fintech", "B2B | B2C", "Teaser", "GTM", "Product Marketing"]}
      />
       <main className="container mx-auto py-12 px-4 min-h-screen flex flex-col items-center justify-center text-center text-lg">
        <Image
          width={1118}
          height={699}
          alt="Done Dilligence Screenshot"
          src="/images/project/screenshot-done-dilligence.png"
        />
        <div id="details" className="flex mt-16 gap-8">
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">ROLE</p>
            <p>Product Marketing Manager</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TEAM</p>
            <p>Marketing Manager</p>
            <p>Product Marketing Manager</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TOOLS</p>
            <p>Figma, Canva</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left">
            <p className="text-mid">TIMELINE</p>
            <p>April – May 2025</p>
          </div>
        </div>

        <div
          id="main"
          className="container mx-auto max-w-[700px] mt-4 text-left text-black"
        >
          <h2 className="text-mid text-3xl font-medium mt-6">The Challenge</h2>
          <p className=" mt-4">
            We were gearing up to launch Done Diligence, a new feature designed to simplify and guide the due diligence process inside our platform. Given the technical nature of the topic, we knew a traditional product announcement wouldn’t cut through. Instead, we needed a fresh, engaging way to spark curiosity and drive early interest without overwhelming users with detail.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-8">The Goal</h3>
          <ul className="list-none space-y-2 mt-4">
            <li className="flex items-start m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>Build anticipation ahead of launch</span>
            </li>
            <li className="flex items-start  m-0">
              <Image
                src="/images/icons/checkmark.svg"
                alt="Checkmark"
                width={20}
                height={20}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <span>Position Done Diligence as both smart and approachable</span>
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
                Equip both the Customer Success and Sales teams with teaser materials to drive conversations
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
              <span>Encourage early demo requests and adoption</span>
            </li>
          </ul>

          <div className="flex items-center flex-col mt-6">

          
                 <Image
                          src="/images/project/done-dillegence-cards-1.png"

                alt="Checkmark"
                width={686}
                height={20}
                
                className="mr-3 mt-1 flex-shrink-0"
              />

                 <Image
                          src="/images/project/done-dillegence-cards-2.png"

                alt="Checkmark"
                width={460}
                height={20}
                
                className="mr-3 mt-1 flex-shrink-0"
              />
              </div>

            <h2 className="text-mid text-3xl font-medium mt-6">The Campaign</h2>
            <h3 className="text-mid text-2xl font-medium mt-8">You’ve done your diligence—now we’ve done it for you.</h3>
          <p className=" mt-4">
        To support this message, I developed a multi-channel teaser campaign, including:</p>

         <ul className="list-disc list-inside">
            <li>Homepage Banner: Eye-catching copy with minimal design to hint at what’s coming</li>
            <li>In-App Pop-Up: A short teaser and a blurred sneak peek of the UI</li>
            <li>Sales & CSM Enablement Deck: To support early conversations and internal alignment</li>
            <li>Targeted Landing Pages: Segment-specific value messaging and teaser imagery</li>
            <li>Email Teaser: High-impact one-liner with a link to a waitlist</li>
            <li>White Paper: A deeper dive into the &quot;why&quot; behind the feature for more technical buyers</li>
            <li>Masterclass (Planned): A live walkthrough to engage leads and educate early adopters</li>
          </ul>

                    <p className=" mt-4">
        Each asset was designed to build layered awareness — from light, playful messaging to more in-depth educational content as launch day approached.</p>


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

          <h3 className="text-mid text-2xl font-medium mt-8">The Results</h3>

          <ul className="list-disc list-inside">
            <li>65%+ open rate on the teaser email</li>
            <li>3× increase in demo requests the week of launch</li>
<li>Strong adoption of enablement materials by Sales and CSM teams</li>
<li>Strong White paper download rate </li>
<li>Early interest in the upcoming masterclass, with over 70 sign-ups pre-launch</li>
<li>Positive feedback on the tone and clarity of the messaging</li>
          </ul>


     <Image
          className="mt-8"
          width={1118}
          height={699}
          alt="Done Dilligence Screenshot"
          src="/images/project/screenshot-done-dilligence2.png"
        />



          <h3 className="text-mid text-2xl font-medium mt-8">What I Learned</h3>


          <h3 className="text-mid text-2xl font-medium mt-8">Speak to the Problem, Not the Product</h3>
          <p className=" mt-4">
            This campaign reinforced the importance of meeting professionals where they are — with messaging that’s clear, confident, and rooted in solving real business problems. Rather than overloading users with technical detail, we focused on the value of the solution and the pain it removes.
          </p>

          <p className=" mt-4">
            It also highlighted how essential it is to build layered communication: from high-level curiosity hooks to in-depth content like white papers and masterclasses. Each touchpoint worked together to build trust and interest over time.
          </p>
          <p className=" mt-4">
            Finally, internal enablement played a critical role. By equipping Sales and Customer Success with tailored materials early on, we turned a feature drop into a company-wide conversation starter.

          </p>


        </div>
      </main>
      <Footer />
    </>
  );
}
