const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const withPWA = require("next-pwa")({
  dest: "public"
});

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost"
        },
        {
          protocol: "http",
          hostname: "127.0.0.1"
        },
        {
          protocol: "https",
          hostname: "**"
        }
      ]
    },
    experimental: {
      serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
    },

    // Add metadataBase configuration
    env: {
      metadataBase: "https://pedroferreira.org"
    },

    // Optionally, you can also add generateBuildId function
    generateBuildId: async () => {
      return 'your-build-id'; // you can use any string here
    }
  })
);
