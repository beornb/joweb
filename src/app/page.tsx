import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16  pt-0">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/video/bg_rosegold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          <Header />

          <About />

          <Impact />
        </main>

        <Footer />
      </div>
    </>
  );
}
