import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-v1",
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
