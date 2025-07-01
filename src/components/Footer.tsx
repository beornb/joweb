import Image from 'next/image';

export default function Footer() {
  return (<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-4 mt-20 mb-30">
    <p>
      2025 © Jo-Ann Bishop. All rights reserved.
    </p>
  </footer>)
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-4 mt-20 mb-10">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Image src="/logos/instagram.png" alt="Instagram" width={64} height={64} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Image src="/logos/linkedin.png" alt="LinkedIn" width={64} height={64} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <Image src="/logos/x.png" alt="X" width={64} height={64} />
      </a>
    </footer>
  );
}
