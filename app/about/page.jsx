import Awards from "@/components/about/Awards";
import Breadcumb from "@/components/about/Breadcumb";
import Clients from "@/components/about/Clients";
import Contact from "@/components/about/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";

import Team from "@/components/about/Team";
import MarqueeComponent from "@/components/common/Marquee";
import Footer5 from "@/components/footers/Footer5";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "About Us | Quantix Performance",
  description:
    "Mission, vision, and values of Quantix Performance—B2B lead generation and performance marketing from Pune, India.",
};

export default function AboutPage() {
  return (
    <div className="brand-theme">
      <Header3 />
      <Breadcumb />
      <Facts />
      <Features />
      {/* <Awards /> */}
      {/* <Team /> */}
      <Contact />
      {/* <Clients /> */}
      <MarqueeComponent />
       <Footer5 />
    </div>
  );
}
