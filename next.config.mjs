/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./public/assets/sass"],
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: [
      "import",
      "global-builtin",
      "color-functions",
      "slash-div",
      "mixed-decls",
      "abs-percent",
      "function-units",
      "strict-unary",
      "legacy-js-api",
    ],
  },
};

export default nextConfig;
