"use client";

import Context from "@/context/Context";
import ScrollTop from "@/components/common/ScrollTop";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import { ParallaxProvider } from "react-scroll-parallax";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Providers({ children }) {
  const path = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.esm");
  }, []);

  useEffect(() => {
    const WOW = require("@/utils/wow");
    const wow = new WOW.default({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [path]);

  return (
    <Context>
      <ParallaxProvider>{children}</ParallaxProvider>
      <ScrollTop />
      <ScrollTopBehaviour />
    </Context>
  );
}
