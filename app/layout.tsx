import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@decal | clu.ng",
  description: "Private Biolink developed with Next.js | @x05k on ig",
  icons: {
    icon: "https://cdn.discordapp.com/emojis/1310254577831903254.webp?size=128",
  },
  openGraph: {
    title: "@decal | clu.ng",
    description: "Private Biolink developed with Next.js | @x05k on ig",
    url: "https://clu.ng",
    images: [
      {
        url: "https://i.pinimg.com/736x/9f/c7/e3/9fc7e3ec06cd28eb55b3bc8a0663cb69.jpg", // Replace with your thumbnail URL
        width: 1200,
        height: 630,
        alt: "Thumbnail description",
      },
    ],
  },
};

// Define viewport configuration for theme color
export const viewport = {
  themeColor: "#000000", // Black embed color
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
