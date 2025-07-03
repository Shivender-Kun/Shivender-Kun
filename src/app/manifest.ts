import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Shivender Kumar Portfolio",
  short_name: "SK Portfolio",
  start_url: "/",
  id: "/",
  display: "standalone",
  display_override: ["window-controls-overlay", "fullscreen", "minimal-ui"],
  background_color: "#080f1d",
  theme_color: "#080f1d",
  description: "Portfolio of Shivender Kumar - Full-stack developer.",
  icons: [
    { src: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
    { src: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    { src: "/icons/icon-300.png", type: "image/png", sizes: "300x300" },
    { src: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    {
      src: "/icons/icon-192-maskable.png",
      type: "image/png",
      sizes: "192x192",
      purpose: "maskable",
    },
    {
      src: "/icons/icon-512-maskable.png",
      type: "image/png",
      sizes: "512x512",
      purpose: "maskable",
    },

    {
      src: "/icons/icon_monochrome_108.png",
      type: "image/png",
      sizes: "108x108",
      purpose: "monochrome",
    },
    {
      src: "/icons/icon_monochrome_162.png",
      type: "image/png",
      sizes: "162x162",
      purpose: "monochrome",
    },
    {
      src: "/icons/icon_monochrome_216.png",
      type: "image/png",
      sizes: "216x216",
      purpose: "monochrome",
    },
    {
      src: "/icons/icon_monochrome_324.png",
      type: "image/png",
      sizes: "324x324",
      purpose: "monochrome",
    },
    {
      src: "/icons/icon_monochrome_432.png",
      type: "image/png",
      sizes: "432x432",
      purpose: "monochrome",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/home_desktop.webp",
      type: "image/png",
      sizes: "1920x1080",
      label: "Home Screen",
      form_factor: "wide",
    },
    {
      src: "/screenshots/skills_desktop.webp",
      type: "image/png",
      sizes: "1920x1080",
      label: "Skills Screen",
      form_factor: "wide",
    },
    {
      src: "/screenshots/projects_desktop.webp",
      type: "image/png",
      sizes: "1920x1080",
      label: "Projects Screen",
      form_factor: "wide",
    },
    {
      src: "/screenshots/experience_desktop.webp",
      type: "image/png",
      sizes: "1920x1080",
      label: "Experience Section",
      form_factor: "wide",
    },
    {
      src: "/screenshots/home_mobile.webp",
      type: "image/png",
      sizes: "1081x2146",
      label: "Home Section",
      form_factor: "narrow",
    },
    {
      src: "/screenshots/skills_mobile.webp",
      type: "image/png",
      sizes: "1081x2146",
      label: "Skills Section",
      form_factor: "narrow",
    },
    {
      src: "/screenshots/projects_mobile.webp",
      type: "image/png",
      sizes: "1081x2146",
      label: "Projects Section",
      form_factor: "narrow",
    },
    {
      src: "/screenshots/experience_mobile.webp",
      type: "image/png",
      sizes: "1081x2146",
      label: "Experience Section",
      form_factor: "narrow",
    },
  ],
});

export default manifest;
