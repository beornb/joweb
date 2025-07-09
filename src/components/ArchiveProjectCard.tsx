import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArchiveProjectCarsProps {
  image: string;
  text: string;
  link: string;
}

export default function ArchiveProjectCard({ image, text, link }: ArchiveProjectCarsProps) {
  return (
        <Link target='_blank' href={`/CaseStudies/${link}.html`} >

    <div className="items-center justify-center mb-6   p-0">
                <Image src={`/CaseStudies/${image}.png`} alt="arrow icon" width={700} height={120} />
      <p className="text-gray-700 text-left text-base mt-4">{text}<span className='text-[var(--rose-gold-fg-mid)]'>..Read more</span></p>
    </div>
    </Link>
  );
}
