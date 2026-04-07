"use client";
import addGsap from "@/utils/addGsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

function HeroSlide({ bgImage, title, body, yearTagLines }) {
  return (
    <div>
      <div
        className="hero-slider background-image por"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="hero-overlay"
          data-overlay="title"
          data-opacity="5"
        ></div>
        <div className="container">
          <div className="hero-style5">
            <h1
              className="hero-title hero-title-fullwidth"
              data-ani="slideindown"
              data-ani-delay="0.1s"
            >
              {title}
            </h1>
            <div className="row align-items-end gy-4">
              <div className="col-lg-7">
                <div className="hero-style5-body">
                  <p
                    className="hero-text"
                    data-ani="slideindown"
                    data-ani-delay="0.2s"
                  >
                    {body}
                  </p>
                  <div
                    className="hero-year-tag"
                    data-ani="slideindown"
                    data-ani-delay="0.3s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/worldwide.svg"
                      alt=""
                    />
                    <h6>{yearTagLines}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self-end text-lg-end">
                <div
                  className="text-lg-end"
                  data-ani="slideindown"
                  data-ani-delay="0.3s"
                >
                  <Link
                    scroll={false}
                    className="circle-btn style2 btn bg-theme text-white gsap-magnetic"
                    href="/contact"
                  >
                    <span className="link-effect">
                      <span className="effect-1">
                        BOOK A <br /> CONSULTATION
                      </span>
                      <span className="effect-1">
                        BOOK A <br /> CONSULTATION
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    addGsap();
  }, []);

  const sliderOptions = {
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="hero-wrapper hero-5" id="hero">
      <Slider className="global-carousel" id="heroSlider5" {...sliderOptions}>
        <HeroSlide
          bgImage="/assets/img/hero/hero-5-3.jpg"
          title="B2B growth, measured in meetings"
          body="Quantix Performance connects you with buyers who fit your offer—through lead generation, performance marketing, digital, telemarketing, and email."
          yearTagLines="Pune-based team, B2B-focused delivery"
        />
        <HeroSlide
          bgImage="/assets/img/hero/hero-5-4.jpg"
          title="Pipeline you can plan around"
          body="Clear reporting, accountable execution, and outreach that sounds like your brand—not a generic script farm."
          yearTagLines="What sets us apart: fit, follow-up, and full-funnel thinking"
        />
      </Slider>
    </div>
  );
}
