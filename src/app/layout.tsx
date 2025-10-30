import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Academic Journal — Your Name",
description: "A concise, interactive journal of what I learned.",
metadataBase: new URL("https://example.com"),
openGraph: {
title: "Academic Journal — Your Name",
description: "A concise, interactive journal of what I learned.",
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" suppressHydrationWarning>
<body className={`${inter.className} bg-neutral-950`}>{children}</body>
</html>
);
}