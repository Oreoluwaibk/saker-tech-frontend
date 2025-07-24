/** @type {import('next').NextConfig} */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import withTM from 'next-transpile-modules';

const withTranspiledModules = withTM(['lodash-es']);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    // Fix for the issue with ESM packages
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }
    return config;
  },
  transpilePackages: [
    "@ant-design", 
    "rc-util",
    "rc-tree", 
    "rc-pagination",
    "rc-picker",
    "geist",
    "rc-table",
    "string-width",
    "antd",
    "rc-notification", 
    "rc-tooltip",
    'lodash-es', 
    '@ant-design/plots',
    "@rc-component/util"
  ],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default withTranspiledModules(nextConfig);
