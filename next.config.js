module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "fa", "ar"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    domains: ["behsod.com"],
    hostname: "example.com",
    protocol: "https",
  },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  // presets: ["next/babel"],
  // swcMinify: false, // it should be false by default
};

// const withImages = require("next-images");
// module.exports = withImages();
