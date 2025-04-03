import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: true,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config

  //   // Add 'mui-modern' to the beginning of the conditionNames array
  //   // Prepending ensures it's checked early in the resolution process
  //   if (config.resolve.conditionNames) {
  //     config.resolve.conditionNames = ['mui-modern', ...config.resolve.conditionNames];
  //   } else {
  //     // If conditionNames doesn't exist for some reason, initialize it
  //     // This is less likely but good for robustness
  //     config.resolve.conditionNames = ['mui-modern'];
  //   }

  //   // You can add other webpack customizations here if needed

  //   return config;
  // },
};

export default nextConfig;
