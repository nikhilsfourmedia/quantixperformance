import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div id="services" className="premium-projects-area overflow-hidden">
      <style>{`
        .premium-projects-area {
          background: #000000;
          position: relative;
          padding: 120px 0;
          color: #fff;
        }
        .premium-projects-area::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .premium-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(to right, #ffffff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .premium-desc {
          color: #9ca3af;
          font-size: 1.125rem;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .premium-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 24px;
          padding: 32px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .premium-card:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(79, 70, 229, 0.15);
        }
        .premium-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 32px;
          position: relative;
          background: #111;
        }
        .premium-img-wrap img {
          width: 100%;
          height: auto;
          transition: transform 0.7s ease;
          object-fit: cover;
          display: block;
        }
        .premium-card:hover .premium-img-wrap img {
          transform: scale(1.08);
        }
        .premium-card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #f3f4f6;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        .premium-card:hover .premium-card-title {
          color: #e0e7ff;
        }
        .premium-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: auto;
        }
        .premium-tag {
          background: rgba(99, 102, 241, 0.1);
          color: #c7d2fe;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: all 0.3s ease;
        }
        .premium-card:hover .premium-tag {
          color: #ffffff;
          background: rgba(99, 102, 241, 0.25);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .premium-btn {
          display: inline-block;
          background: linear-gradient(135deg, #fb923c 0%, #ea580c 100%);
          color: #ffffff !important;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(234, 88, 12, 0.35);
        }
        .premium-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(234, 88, 12, 0.5);
        }
      `}</style>
      <div className="container relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 text-center">
            <h2 className="premium-title">Services built for B2B teams</h2>
            <p className="premium-desc mb-5">
              From first touch to sales-ready leads, we align channels around
              your ideal customer and revenue goals.
            </p>
          </div>
        </div>
        <div className="row gy-5 gx-5 justify-content-center mt-2">
          {projects.map((project) => (
            <div key={project.id} className="col-xl-6 col-lg-6">
              <div className="premium-card">
                <Link scroll={false} href="/contact" className="premium-img-wrap">
                  <Image
                    width={618}
                    height={470}
                    src={project.imageSrc}
                    alt={project.title}
                  />
                </Link>
                <div>
                  <h3 className="premium-card-title">
                    <Link scroll={false} href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title}
                    </Link>
                  </h3>
                  <ul className="premium-tags">
                    {project.categories.map((category, index) => (
                      <li key={index} className="premium-tag">
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-3 text-center">
          <Link
            scroll={false}
            href="/service"
            className="premium-btn"
          >
            Review Service Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
