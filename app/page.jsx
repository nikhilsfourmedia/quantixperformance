import Footer5 from "@/components/footers/Footer5";
import SearchPopup from "@/components/headers/component/SearchPopup";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/home-5/About";
import Blogs from "@/components/homes/home-5/Blogs";
import Hero from "@/components/homes/home-5/Hero";
import Projects from "@/components/homes/home-5/Projects";
import Steps from "@/components/homes/home-5/Steps";
import Testimonials from "@/components/homes/home-5/Testimonials";
// import Video from "@/components/homes/home-5/Video";
import React from "react";

export const metadata = {
  title: "Quantix Performance | B2B Lead Generation & Performance Marketing",
  description:
    "Quantix Performance helps B2B teams grow pipeline with qualified leads—lead generation, performance and digital marketing, telemarketing, and email.",
};

export default function Home() {
  return (
    <div>
      <SearchPopup />
      <Header4 />
      <Hero />
      <Steps />
      <About />
      <Projects />
      <Testimonials />
      {/* <Video /> */}
      <Blogs />
      <Footer5 />
    </div>
  );
}
