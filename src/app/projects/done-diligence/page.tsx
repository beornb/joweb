"use client"; // Required for Framer Motion and useState

import ProjectHeader from "@/components/ProjectHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";

const images = [
  "/images/project/screenshot-dd-1.png",
  "/images/project/screenshot-dd-2.png",
  "/images/project/screenshot-dd-3.png",
  "/images/project/screenshot-dd-6.png",
  "/images/project/screenshot-dd-7.png",
  "/images/project/screenshot-dd-8.png",
];
const imageWidths = [
  333,
  333,
  549,
  463,
  463,
  463
]

const instagramImages = [
  "/images/project/done-dillegence-cards-1.png",
  "/images/project/done-dillegence-cards-2.png",
  "/images/project/done-dillegence-cards-3.png",
  "/images/project/done-dillegence-cards-4.png",
  "/images/project/done-dillegence-cards-5.png",
];

export default function DoneDiligencePage() {
  return (
   <div className="relative">
    <Link href="/" className="absolute top-8 left-8 z-10">
      <Image src="/images/icons/home.svg" alt="Back" width={40} height={40} />
    </Link>
    <ProjectHeader 
      projectHeading="Building anticipation for a smarter way to handle due diligence"
      projectSubHeading="Done Diligence Teaser Campaign"
      projectTags={["Business Valuation", "Fintech", "B2B | B2C", "Teaser", "GTM", "Product Marketing"]}
      />
       <main className="container mx-auto py-12 px-4 min-h-screen flex flex-col items-center justify-center text-center text-lg">
         <div
          id="main"
          className="container mx-auto max-w-[700px] mt-0 text-left text-black"
        >
        <Image
          width={950}
          height={499}
          alt="Done Dilligence Screenshot"
          src="/images/project/screenshot-done-dilligence.png"
        />
        </div>

        <div id="details" className="flex mt-16 gap-12 max-w-[900px] w-[900px] ">
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">ROLE</p>
            <p>PMM</p>
            <p>Product Designer</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TEAM</p>
            <p>Marketing Manager</p>
            <p>PMM</p>
            <p>Product Designer</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TOOLS</p>
            <p>Figma, Canva</p>
          </div>
          <div className="w-1/4 text-lg text-black text-left rounded-md p-3 bg-[var(--rose-gold-bg-light))]">
            <p className="text-mid font-medium mb-2">TIMELINE</p>
            <p>April – May 2025</p>
          </div>
        </div>

        <div
          id="main"
          className="container mx-auto max-w-[700px] mt-4 text-left text-black"
        >
          <h2 className="text-mid text-3xl font-medium mt-16">The Challenge</h2>
          <p className=" mt-4">
            We were gearing up to launch Done Diligence, a new feature designed to simplify and guide the due diligence process inside our platform. Given the technical nature of the topic, we knew a traditional product announcement wouldn’t cut through. Instead, we needed a fresh, engaging way to spark curiosity and drive early interest without overwhelming users with detail.
          </p>

          <h3 className="text-mid text-2xl font-medium mt-14">The Goal</h3>
          <ul className="list-none space-y-2">
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

          <Carousel imageWidths={250} images={instagramImages} duration={instagramImages.length * 7} className="mt-14 h-[250px] w-[120%] left-[-10%]" />

            <h2 className="text-mid text-3xl font-medium mt-14">The Campaign</h2>
            <h3 className="text-mid text-xl font-medium mt-6">You’ve done your diligence—now we’ve done it for you.</h3>
          <p className=" mt-4">
        To support this message, I developed a multi-channel teaser campaign, including:</p>

         <ul className="list-disc list-outside pl-5">
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

          <Carousel
            images={images}
            duration={images.length * 8}
            className="w-[120%] left-[-10%] h-[250px] my-8 mt-14"
            motionDivClassName="h-full"
            imageWidths={imageWidths}
          />
          

          <h3 className="text-mid text-2xl font-medium mt-14">The Results</h3>

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



          <h3 className="text-mid text-2xl font-medium mt-14">What I Learned</h3>


          <h3 className="text-mid text-xl font-medium mt-6">Speak to the Problem, Not the Product</h3>
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
    </div>
  );
}
