import type { NextConfig } from "next";

const CANONICAL_HOST = "sayedesmail.com";

// Hosts that should permanently redirect to the canonical domain, path preserved.
const LEGACY_HOSTS = ["sayed5atab-gilt.vercel.app", `www.${CANONICAL_HOST}`];

const nextConfig: NextConfig = {
    async redirects() {
        return LEGACY_HOSTS.map((host) => ({
            source: "/:path*",
            has: [{ type: "host" as const, value: host }],
            destination: `https://${CANONICAL_HOST}/:path*`,
            permanent: true,
        }));
    },
};

export default nextConfig;
