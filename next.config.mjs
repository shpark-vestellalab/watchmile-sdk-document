/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	// GitHub Pages를 위한 설정
	basePath:
		process.env.NODE_ENV === "production" ? "/watchmile-sdk-document" : "",
};

export default nextConfig;
