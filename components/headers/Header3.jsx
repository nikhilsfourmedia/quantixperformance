"use client";
import SideMenu from "./component/SideMenu";
import MobileNav from "./component/MobileNav";
import MobileMenuSocials from "./component/MobileMenuSocials";
import Nav from "./component/Nav";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header3() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile Menu */}

      <div
        className={`mobile-menu-wrapper ${mobileMenuOpen ? "body-visible" : ""
          } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link scroll={false} href="/">
              <Image
                width={86}
                height={24}
                src="/assets/img/logo.svg"
                alt="Quantix Performance"
              />
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>Golden Court, Shop 217, Above Zudio</h6>
            <h6>Hills and Dales, Undri, Pune, India</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="mailto:hello@quantixperf.com">
                hello@quantixperf.com
              </a>
            </h6>
            <h6>
              <Link scroll={false} href="/contact">
                Book a consultation
              </Link>
            </h6>
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>

      {/* Header Area */}

      <header className="nav-header header-layout3">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link scroll={false} href="/">
                      <Image
                        width={250}
                        height={70}
                        src="/assets/img/logo.svg"
                        alt="Quantix Performance"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {" "}
                      <Nav />
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="menu-toggle sidebar-btn"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <Link
                      scroll={false}
                      href="/project"
                      className="btn btn-border4 header3-plain-btn"
                    >
                      <span className="link-effect">
                        <span className="effect-1">Work with us</span>
                        <span className="effect-1">Work with us</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
