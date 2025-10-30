import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/PS-Project' : '',
  output: 'export', // Required for static export to GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
```

**Also create a `.env.production` file in your project root:**
```
NEXT_PUBLIC_BASE_PATH=/PS-Project
