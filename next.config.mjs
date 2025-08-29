/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Don’t fail build because of ESLint errors/warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Don’t fail build because of type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
