/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: "./utils/imageLoader.ts",
    },
};

export default nextConfig;
