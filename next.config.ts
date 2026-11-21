import type { NextConfig } from "next";

/**
 * The default build targets the Cloudflare/Vinext runtime. Set
 * RUMAHL_STATIC_EXPORT=1 for a portable static export (dist/client) that can
 * be served by any static host, including Vercel.
 */
const staticExport = process.env.RUMAHL_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
