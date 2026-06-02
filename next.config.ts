import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → deployable to GitHub Pages (keeps the custom domain).
  output: "export",
  // next/image optimization needs a server; static export must opt out.
  images: { unoptimized: true },
  // Emit /about/index.html etc. so paths resolve cleanly on static hosts.
  trailingSlash: true,
};

export default nextConfig;
