/**
 * Configuration Next.js optimisée pour le déploiement sur Vercel
 * Documentation : https://nextjs.org/docs/app/api-reference/config/next-config-js
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Optimisations pour la production */
  reactStrictMode: true,

  /** Configuration des images (ajoutez des domaines si nécessaire) */
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
