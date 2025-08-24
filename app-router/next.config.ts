import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	experimental: {
		devtoolSegmentExplorer: true,
	},
};

export default nextConfig;
