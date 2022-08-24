// @ts-check
const { withContentlayer } = require("next-contentlayer");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = withContentlayer(nextConfig);
