"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import Trusted from "@/components/Trusted";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";



export default function Home() {


  return (
    <>
      <Header />
      <div className="grid items-center justify-items-center min-h-screen p-8 pt-0">

        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          

          <About />

          <Impact />

          <Trusted />

          <Process />

          <Projects />

          <Testimonials />

          <Contact />
        </main>

        <Footer />
        <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </div>
    </>
  );
}
