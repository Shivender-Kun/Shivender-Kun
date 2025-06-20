import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Shivender Kumar Portfolio",
  short_name: "SK Portfolio",
  start_url: "/",
  id: "/",
  display: "standalone",
  background_color: "#0b3954",
  theme_color: "#0b3954",
  description: "Portfolio of Shivender Kumar - Full-stack developer.",
  icons: [
    {
      src: "/sk_icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/sk_icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
});

export default manifest;
