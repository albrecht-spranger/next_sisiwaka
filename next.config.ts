import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: [
		"3001-cs-938152440042-default.cs-asia-east1-jnrc.cloudshell.dev",
		"*.cloudshell.dev", // URLが変わりやすいので保険として
	],
};

export default nextConfig;
