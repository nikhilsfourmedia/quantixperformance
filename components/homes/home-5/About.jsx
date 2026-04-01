import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="about-area-1 space bg-gray shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
        style={{ top: "-100px", left: "0px", bottom: "100px" }}
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/about01.webp"
          alt="Quantix Performance team collaborating on B2B marketing strategy"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap fade_right">
                <div className="title-area mb-0">
                  <h2 className="sec-title text-smoke">
                    Lead generation and marketing built for B2B reality
                  </h2>
                  <p className="sec-text mt-35 mb-25 text-smoke">
                    Quantix Performance helps you reach the right accounts,
                    start real conversations, and prove impact back to sales
                    leadership—without noisy tactics or vague dashboards.
                  </p>
                  <h5 className="text-smoke mb-2">
                    Qualified conversations over vanity activity
                  </h5>
                  <h5 className="text-smoke mb-2">
                    One team across digital, email, and phone outreach
                  </h5>
                  <h5 className="text-smoke mb-0">
                    Reporting your CFO and CRO can understand
                  </h5>
                  <div className="btn-wrap mt-50">
                    <Link
                      scroll={false}
                      href="/about"
                      className="link-btn text-theme"
                    >
                      <span className="link-effect">
                        <span className="effect-1">ABOUT US</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
