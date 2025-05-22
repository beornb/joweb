
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-0">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src="/video/bg_rosegold.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          <div className="container mx-auto max-w-[850px] bg-white/80 rounded-lg p-12 mt-8 text-center">
            <h1 className="text-4xl font-bold text-black">Contact Me</h1>
            <p className="text-lg text-black mt-4">
              This is the contact page. You can add a contact form or contact details here.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
