import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import siteData from "@/app/data.json";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const { site, tracking } = siteData;

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: [
      {
        url: site.icons.mainUrl,
        type: site.icons.mainType,
        sizes: site.icons.mainSizes,
      },
      { url: site.icons.fallbackUrl },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: site.themeColor.lightMedia, color: site.themeColor.lightColor },
    { media: site.themeColor.darkMedia, color: site.themeColor.darkColor },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language} className={montserrat.variable}>
      <body className="min-h-full flex flex-col antialiased">
        <Script src={tracking.googleTagSrc} strategy="lazyOnload" />
        <Script id="google-tag-inline" strategy="lazyOnload">
          {tracking.googleTagInline}
        </Script>
        <Script id="gtm-inline" strategy="lazyOnload">
          {tracking.gtmInline}
        </Script>
        <noscript>
          <iframe
            src={tracking.gtmNoScriptSrc}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
