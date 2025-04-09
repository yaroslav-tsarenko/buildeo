import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['cdn.allship.ai'],
    },
    output: 'standalone', // Ensures dynamic server-side rendering
};

export default nextConfig;