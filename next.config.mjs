/** @type {import('next').NextConfig} */

let nextConfig;
if (process.env.NODE_ENV === 'development') {
  nextConfig = {};
} else {
  nextConfig = {
  };
}

export default nextConfig;
