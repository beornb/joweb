"use client";
import Link from "next/link";

interface TestimonialCardProps {
  text?: string;
  name?: string;
  title?: string; // Added projectLink prop
  image?: string;
    link?: string; // Added projectLink prop

}

export default function TestimonialCard({
  title,
  text,
  name, // Destructure projectLink
  link

}: TestimonialCardProps) {
  
  return (
    <div
        className="border-3 border-(--rose-gold-fg-dark) p-2 rounded-3xl  shadow-md"

    >
      <Link href={link || '#'} target="_blank">


      <div className='p-6'>

      
        <div>
        <p className="text-base font-semibold   text-[var(--rose-gold-bg-dark)]   " >
          {text}
        </p>

        <h4 className={`text-lg mt-6 font-bold  text-black`}>
          {name} 
        </h4>

        <p className="text-base font-semibold  text-[var(--rose-gold-bg-dark)]   " >
          {title}
        </p>

        
      </div>

      
      </div>
      </Link>
    </div>
  );
}
