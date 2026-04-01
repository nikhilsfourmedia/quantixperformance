import Providers from "./providers";
import "./theme.scss";
import "rc-slider/assets/index.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--body-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor.css" />
      </head>
      <body className={`body ${figtree.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
