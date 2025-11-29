/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Removed 'standalone' output mode - Netlify Next.js plugin handles this
}

export default nextConfig
