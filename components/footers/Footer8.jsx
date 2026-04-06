"use client";
import Socials from "./component/Socials";
import Image from "next/image";
import FooterLinks3 from "./component/FooterLinks3";
import Link from "next/link";

export default function Footer8() {
  return (
    <footer className="footer-wrapper footer-layout2 overflow-hidden">
      <div className="container">
        <div className="widget-area space-top">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5 col-lg-6">
              <div className="widget widget-newsletter footer-widget">
                <h3 className="widget_title">
                  Get B2B growth ideas and campaign tips in your inbox
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Work email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <button type="submit" className="btn" aria-label="Subscribe">
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt=""
                    />
                  </button>
                </form>
                <p>
                  We only use your email to send updates you ask for. Prefer a
                  one-to-one chat?{" "}
                  <Link scroll={false} href="/contact" className="text-theme">
                    Contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xl-2 col-lg-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Navigate</h3>
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks3 />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto col-lg-4">
              <div className="widget footer-widget widget-contact">
                <h3 className="widget_title">Contact</h3>
                <ul className="contact-info-list">
                  <li>
                    Golden Court, Shop 217, Above Zudio <br />
                    Hills and Dales, Undri, Pune, India
                  </li>
                  <li>
                    <a href="mailto:hello@quantixperf.com">
                      hello@quantixperf.com
                    </a>
                    <br />
                    <Link scroll={false} href="/contact">
                      Request a consultation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()} Quantix Performance.
                B2B lead generation and performance marketing.
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="social-btn style3 justify-content-md-end">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
