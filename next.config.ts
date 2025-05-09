import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['cdn.allship.ai'],
    },
    output: 'standalone',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.mp4$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash][ext]',
            },
        });
        return config;
    },
};

export default nextConfig;