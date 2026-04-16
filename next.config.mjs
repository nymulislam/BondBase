/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
