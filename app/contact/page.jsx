import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";

import Footer5 from "@/components/footers/Footer5";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "Contact | Quantix Performance",
  description:
    "Contact Quantix Performance in Undri, Pune. Request a consultation for B2B lead generation and performance marketing.",
};

export default function ContactPage() {
  return (
    <div className="brand-theme">
      <Header3 />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer5 />
    </div>
  );
}
