import MarqueeComponent from "@/components/common/Marquee";
import Footer5 from "@/components/footers/Footer5";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/service/Breadcumb";
import Features1 from "@/components/service/Features1";

import Video from "@/components/service/Video";
export const metadata = {
  title: "Services | Quantix Performance",
  description:
    "B2B lead generation, performance marketing, digital marketing, telemarketing, and email services from Quantix Performance.",
};

export default function ServicePage1() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Features1 />
      <Video />
      <MarqueeComponent />
      <Footer5 />
    </>
  );
}
