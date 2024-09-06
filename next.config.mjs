/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	assetPrefix:
		process.env.NODE_ENV === "production" ? "/watchmile-sdk-document" : "",
	basePath:
		process.env.NODE_ENV === "production" ? "/watchmile-sdk-document" : "",
};

module.exports = nextConfig;
