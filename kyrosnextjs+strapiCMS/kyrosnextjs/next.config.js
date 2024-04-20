/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  images: {
    unoptimized: true, //will change to false later
  },
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
  },
}

module.exports = nextConfig
