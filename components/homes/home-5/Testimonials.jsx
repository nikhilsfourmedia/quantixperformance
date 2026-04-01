"use client";
import { testimonialData2 } from "@/data/testimonials";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const slickSettings = {
    slidesToShow: 1,
    dots: false,
    centerMode: true,
    centerPadding: "470px",
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "350px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "200px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="testimonial-area-2 space bg-gray overflow-hidden"
    >
      <div className="container text-center mb-40">
        <h2 className="sec-title text-smoke">What clients say</h2>
        <p className="sec-text mt-3 mb-0 text-smoke mx-auto" style={{ maxWidth: "42rem" }}>
          Feedback from B2B marketing and revenue leaders we have partnered
          with.
        </p>
      </div>
      <div className="container-fluid p-0">
        <Slider
          {...slickSettings}
          className="row global-carousel testi-slider2"
        >
          {testimonialData2.map((elm, i) => (
            <div key={i} className="col-lg-4">
              <div className="testi-box style2">
                <div className="quote-icon">
                  <Image
                    width={52}
                    height={32}
                    src="/assets/img/icon/quote.svg"
                    alt=""
                  />
                </div>
                <p className="testi-box_text">“{elm.text}”</p>
                <div className="testi-box_profile">
                  <h4 className="testi-box_name">{elm.name}</h4>
                  <span className="testi-box_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
