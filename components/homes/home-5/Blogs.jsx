import Image from "next/image";
import Link from "next/link";
import React from "react";

const highlights = [
  {
    id: 1,
    image: "/assets/img/blog/1.jpg",
    date: "For revenue teams",
    category: "Why Quantix",
    title: "Account clarity before channel spend",
    excerpt:
      "We start with your ICP and offer so messaging, media, and outreach reinforce the same story.",
  },
  {
    id: 2,
    image: "/assets/img/blog/2.jpg",
    date: "Execution",
    category: "Delivery",
    title: "Governance you can trust",
    excerpt:
      "QA on scripts and lists, brand-safe telemarketing, and email practices that protect deliverability.",
  },
  {
    id: 3,
    image: "/assets/img/blog/3.jpg",
    date: "Partnership",
    category: "Results",
    title: "Reporting that connects to pipeline",
    excerpt:
      "Weekly visibility into meetings booked, funnel stages, and what we are testing next—with plain language.",
  },
];

export default function Blogs() {
  return (
    <section className="blog-area space">
      <style>{`
        .blog-area .sec-title,
        .blog-area .sec-text,
        .blog-area .post-meta-item span,
        .blog-area .blog-title a,
        .blog-area .text-smoke {
          color: #000000 !important;
        }
      `}</style>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Why teams choose Quantix Performance
              </h2>
              <p className="sec-text mt-3 mb-0 text-smoke">
                Practical strengths that keep B2B programs honest, consistent,
                and focused on qualified demand.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {highlights.map((elm) => (
            <div key={elm.id} className="col-lg-4 col-md-6">
              <div className="blog-card style3">
                <div className="blog-img">
                  <Link scroll={false} href="/contact">
                    <Image
                      width={416}
                      height={340}
                      src={elm.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <span>{elm.date}</span>
                    <span>{elm.category}</span>
                  </div>
                  <h4 className="blog-title">
                    <Link scroll={false} href="/contact">
                      {elm.title}
                    </Link>
                  </h4>
                  <p className="mb-3 text-smoke">{elm.excerpt}</p>
                  <Link
                    scroll={false}
                    href="/contact"
                    className="link-btn"
                    style={{ color: "#000000" }}
                  >
                    <span className="link-effect">
                      <span className="effect-1">GET STARTED</span>
                      <span className="effect-1">GET STARTED</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
