import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/normal/why_3-1.jpg"
          alt="Quantix Performance discussing B2B growth strategy with clients"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">Mission, vision, and how we operate</h2>
            </div>
            <h4>Our mission</h4>
            <p>
              Help B2B organizations grow pipeline with qualified conversations
              and marketing that respects both your brand and your buyer’s
              time.
            </p>
            <h4 className="mt-35">Our vision</h4>
            <p className="mb-n1">
              Become the partner sales and marketing leaders trust when they need
              accountable demand—not disconnected tactics or inflated lead
              counts.
            </p>
            <h4 className="mt-35">Our values</h4>
            <p className="mb-n1">
              Clarity in reporting, discipline in execution, and transparency
              when something needs to change. We grow when you hit your growth
              targets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
