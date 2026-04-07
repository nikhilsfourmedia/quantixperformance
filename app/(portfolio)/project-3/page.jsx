import MarqueeComponent from "@/components/common/Marquee";
import Footer5 from "@/components/footers/Footer5";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/portfolio/Breadcumb";

import Projects3 from "@/components/portfolio/Projects3";
import React from "react";
export const metadata = {
  title: "Project 3 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function ProjectPage3() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Projects3 />
      <MarqueeComponent />
      <Footer5 />
    </>
  );
}
