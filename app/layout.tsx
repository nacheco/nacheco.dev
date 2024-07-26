"use client";

import "../styles/index.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Natanael Pacheco</title>
        <meta name="title" content="Natanael Pacheco" />
        <meta
          name="description"
          content="Natanael Pacheco is a software engineer and web developer based in the San Francisco Bay Area. He specializes in building web applications and services."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bethel-template-418n-git-pre-release-zeviks.vercel.app/"
        />
        <meta
          property="og:title"
          content="Bethel Pharr - Serve God with love"
        />
        <meta
          property="og:description"
          content="Discover the transformative power of faith at our vibrant Pentecostal church affiliated with the esteemed Assemblies of God in Pharr, Texas. Immerse yourself in divine encounters as you join us every Sunday and Wednesday, where God's presence embraces our worship gatherings."
        />
        <meta
          property="og:image"
          content="/images/SEO-Screen.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://bethel-template-418n-git-pre-release-zeviks.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Bethel Pharr - Serve God with love"
        />
        <meta
          property="twitter:description"
          content="Discover the transformative power of faith at our vibrant Pentecostal church affiliated with the esteemed Assemblies of God in Pharr, Texas. Immerse yourself in divine encounters as you join us every Sunday and Wednesday, where God's presence embraces our worship gatherings."
        />
        <meta
          property="twitter:image"
          content="/images/SEO-Screen.webp"
        />

        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/images/favicon.ico" />


        
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
