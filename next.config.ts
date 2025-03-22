import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true, // Enable dynamic input/output operations for improved performance
    authInterrupts: true, // Allow authentication processes to interrupt ongoing operations for security purposes
  },
};

export default nextConfig;
