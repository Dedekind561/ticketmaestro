/** @type {import('next').NextConfig} */

let nextConfig;
if (process.env.NODE_ENV === 'development') {
  nextConfig = {};
} else {
  nextConfig = {
    basePath: '/ticketmaestro',
    output: 'export',
    reactStrictMode: true,
  };
}

export default nextConfig;
